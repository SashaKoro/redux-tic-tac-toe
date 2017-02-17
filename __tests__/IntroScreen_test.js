/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import IntroScreen from '../src/components/IntroScreen';

describe('IntroScreen', () => {
  it('should be selectable by class name', () => {
    const wrapper = shallow(<IntroScreen />);
    expect(wrapper.is('.IntroScreen')).toBe(true);
  });

  it('should mount to the DOM', () => {
    const wrapper = mount(<IntroScreen />);
    expect(wrapper.find('.IntroScreen').length).toBe(1);
  });
});
