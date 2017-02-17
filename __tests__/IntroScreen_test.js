/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import IntroScreen from '../src/components/IntroScreen';

describe('IntroScreen', () => {
  const prop = { chooseThis: jest.fn() };

  it('should be selectable by class name', () => {
    const wrapper = shallow(<IntroScreen {...prop} />);
    expect(wrapper.is('.IntroScreen')).toBe(true);
  });

  const wrapper = mount(<IntroScreen {...prop} />);

  it('should mount to the DOM', () => {
    expect(wrapper.find('.IntroScreen').length).toBe(1);
  });

  it('should call chooseThis with proper args when clicking xButton', () => {
    wrapper.find('.xButton').simulate('click');
    expect(prop.chooseThis.mock.calls[0]).toEqual(['X', 'O']);
  });

  it('should call chooseThis with proper args when clicking oButton', () => {
    wrapper.find('.oButton').simulate('click');
    expect(prop.chooseThis.mock.calls[1]).toEqual(['O', 'X']);
  });
});
