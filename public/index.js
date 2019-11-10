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
