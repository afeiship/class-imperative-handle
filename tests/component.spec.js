import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactCheckbox from '../src/main';

describe('Basic Test', () => {
  it('renders to document', () => {
    const component = mount(
      <ReactCheckbox
        defaultValue={true}
        onChange={() => {
          console.log('changed!');
        }}
      />
    );

    const html = component.html();
    // change:
    expect(html.includes('data-component="react-checkbox"')).toBe(true);
    expoect(component.getDOMNode().checked).toBe(true);
  });
});
