/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/app';

describe('App', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.is('.App')).toBe(true);
  });
});
