# class-imperative-handle
> React `useImperativeHandle` for class component.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/class-imperative-handle
```

## usage
```js
import classImperativeHandle from '@jswork/class-imperative-handle';

class MyComponent extends Component {
  handleRef = (inRoot) => {
    const { forwardedRef } = this.props;
    classImperativeHandle(forwardedRef, inRoot);
    this.root = inRoot;
  };

  render() {
    return (
      <div
        ref={this.handleRef}
        {...this.props}
      />
    );
  }
}

export default React.forwardRef((props: ReactCheckboxProps, ref: any) => (
  <MyComponent {...props} ref={ref} />
));
```

## license
Code released under [the MIT license](https://github.com/afeiship/class-imperative-handle/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/class-imperative-handle
[version-url]: https://npmjs.org/package/@jswork/class-imperative-handle

[license-image]: https://img.shields.io/npm/l/@jswork/class-imperative-handle
[license-url]: https://github.com/afeiship/class-imperative-handle/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/class-imperative-handle
[size-url]: https://github.com/afeiship/class-imperative-handle/blob/master/dist/class-imperative-handle.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/class-imperative-handle
[download-url]: https://www.npmjs.com/package/@jswork/class-imperative-handle
