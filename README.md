# react-checkbox
> Pure checkbox for react.

## install
```shell
npm install -S afeiship/react-checkbox
```

## usage
1. import css
  ```scss
  @import "~react-checkbox/style.scss";

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
- https://www.jb51.net/web/82262.html
