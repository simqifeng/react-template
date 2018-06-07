import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseAction } from '../../redux/actions/count-action';
import { getCookie } from '../../libs/utils';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  /*
   * 点击数量增加
   */
  handleIncrease() {
    const { count } = this.props;
    const nextCount = count + 1;
    this.props.increaseAction(nextCount);
  }

  render() {
    const { count } = this.props;
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h4>当前数量为：{count}</h4>
        <button
          onClick={this.handleIncrease}
          style={{
            background: '#f44',
            padding: '10px',
            color: '#fff',
            marginTop: '10px',
            border: 'none',
          }}
        >
          点击增加数量
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  count: state.countData.count,
});

const mapDispatchToProps = dispatch => ({
  increaseAction: bindActionCreators(increaseAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
