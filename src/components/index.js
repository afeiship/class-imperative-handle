import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';

const CLASS_NAME = 'react-checkbox';

export default class ReactCheckbox extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The runtime value.
     */
    value: PropTypes.bool,
    /**
     * The default value.
     */
    defaultValue: PropTypes.bool,
    /**
     * If has element checked.
     */
    indeterminate: PropTypes.bool,
    /**
     * The handler when value change.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };

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
