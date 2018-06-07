import 'whatwg-fetch';

const CONFIG = {
  // 请求域名
  API_PREFIX: '',
  // 请求的配置项
  REQUEST_CONFIGS: {
    method: 'GET',
    credentials: 'same-origin',
  },
};

// 根据自己的需求设置API_PREFIX
if (process.env.NODE_ENV === 'development') {
  CONFIG.API_PREFIX = 'http://localhost:3200';
}

/*
 * fetch 的请求配置项
 * @params configs: Object
 * configs.method, configs.credentials, configs.body, configs.headers, configs.timeout...
 */
const myRequestConfigs = (configs) => {
  return configs && Object.prototype.toString.call(configs) === '[object Object]'
    ? Object.assign({}, CONFIG.REQUEST_CONFIGS, configs)
    : CONFIG.REQUEST_CONFIGS;
};

/*
 * json对象入参转换FormData形式
 * @params 当某个 params[key] 的 value 为空时，过滤掉
 */
const objToFormData = (params) => {
  const form = new FormData();
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === 'number' || (typeof value === 'string' && value.trim() !== '') || !!value) {
      form.append(key, value);
    }
  }
  return form;
};

/*
 * json对象转换成query形式
 * @params 当某个 params[key] 的 value 为空时，过滤掉
 */
const objToQuery = (params) => {
  const result = [];
  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      const _value = value.join(',');
      result.push(`${key}=${_value}`);
    } else if (typeof value === 'number' || (typeof value === 'string' && value.trim() !== '') || !!value) {
      result.push(`${key}=${value}`);
    }
  }

  return result.join('&');
};

/*
 * fetch 增加 timeout 配置项
 * @params api, opts.timeout 默认为 3000ms
 */
// 拦截原始的fetch方法
const oldFetchfn = fetch;
// 定义新的fetch方法，封装原有的fetch方法
window.fetch = (api, opts) => {
  const fetchPromise = oldFetchfn(api, opts);

  const options = Object.assign({}, { timeout: 30000 }, opts);
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'));
    }, options.timeout);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
};

/* ======= 以上为公共方法 ======= */

/*
 * 接口请求示例
 * @return object
 */
export const fetchTest = (params) => {
  // 把入参转换为 formData 格式
  const form = objToFormData(params);

  const api = `${CONFIG.API_PREFIX}/api/test.json`;
  return fetch(api, myRequestConfigs({
    method: 'POST',
    body: form,
  }))
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    });
};
