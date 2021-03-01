import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCheckbox from '../src/main';
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
