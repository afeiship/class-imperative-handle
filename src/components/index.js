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
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  componentDidMount() {
    const { indeterminate } = this.props;
    this.root.indeterminate = indeterminate;
  }

  onChange = (inEvent) => {
    const { onChange } = this.props;
    const checked = inEvent.target.checked;
    const target = { value: checked };
    onChange({ target });
  };

  render() {
    const {
      className,
      defaultValue,
      onChange,
      indeterminate,
      ...props
    } = this.props;
    return (
      <input
        type="checkbox"
        data-component={CLASS_NAME}
        defaultChecked={defaultValue}
        className={classNames(CLASS_NAME, className)}
        onChange={this.onChange}
        ref={(root) => (this.root = root)}
        {...props}
      />
    );
  }
}
