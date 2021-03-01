# react-checkbox
> Pure checkbox for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-checkbox
```

## properties
| Name          | Type   | Required | Default | Description                           |
| ------------- | ------ | -------- | ------- | ------------------------------------- |
| className     | string | false    | -       | The extended className for component. |
| value         | bool   | false    | -       | The runtime value.                    |
| defaultValue  | bool   | false    | -       | The default value.                    |
| indeterminate | bool   | false    | -       | If has element checked.               |
| onChange      | func   | false    | noop    | The handler when value change.        |


## usage
1. import css
  ```scss
  @import "~@jswork/react-checkbox/dist/style.css";

  // or use sass
  @import "~@jswork/react-checkbox/dist/style.scss";

  // customize your styles:
  $react-checkbox-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactCheckbox from '@jswork/react-checkbox';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-checkbox">
          <article class="message is-info">
            <div class="message-header">Preview:</div>
            <div class="message-body">
              <label>
                <ReactCheckbox
                  indeterminate
                  defaultValue={true}
                  onChange={(e) => {
                    console.log('e.target.value', e.target.value);
                  }}
                />
                <span>A checkbox indeterminate</span>
              </label>
              <label>
                <ReactCheckbox
                  defaultValue={true}
                  onChange={(e) => {
                    console.log('e.target.value', e.target.value);
                  }}
                />
                <span>A checkbox</span>
              </label>
            </div>
          </article>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-checkbox/


## license
Code released under [the MIT license](https://github.com/afeiship/react-checkbox/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-checkbox
[version-url]: https://npmjs.org/package/@jswork/react-checkbox

[license-image]: https://img.shields.io/npm/l/@jswork/react-checkbox
[license-url]: https://github.com/afeiship/react-checkbox/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-checkbox
[size-url]: https://github.com/afeiship/react-checkbox/blob/master/dist/react-checkbox.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-checkbox
[download-url]: https://www.npmjs.com/package/@jswork/react-checkbox
