# react-checkbox
> Pure checkbox for react.

## installation
```shell
npm install -S @feizheng/react-checkbox
```

## update
```shell
npm update @feizheng/react-checkbox
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| value     | -      | -       | -           |
| onChange  | -      | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-checkbox/dist/style.scss";

  // customize your styles:
  $react-checkbox-options: ()
  ```
2. import js
  ```js
  import ReactCheckbox from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
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
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-checkbox/
