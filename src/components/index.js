import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-checkbox';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.bool,
    defaultValue: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  _onChange = (inEvent) => {
    const { onChange } = this.props;
    const checked = inEvent.target.checked;
    onChange({
      target: { value: checked }
    });
  };

  render() {
    const { className, defaultValue, onChange, ...props } = this.props;
    return (
      <input
        type="checkbox"
        data-component={CLASS_NAME}
        defaultChecked={defaultValue}
        className={classNames(CLASS_NAME, className)}
        onChange={this._onChange}
        {...props}
      />
    );
  }
}
