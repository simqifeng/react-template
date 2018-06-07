/*
 * 获取cookie
 * @params name: 要获取的 cookie 字段名
 */

export const getCookie = (name) => {
  let arr = [];
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  arr = document.cookie.match(reg);
  return (arr && arr.length > 0) ? arr[2] : null;
};
