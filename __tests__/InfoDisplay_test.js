/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import InfoDisplay from '../src/components/InfoDisplay';

describe('InfoDisplay', () => {
  it('should be selectable by class name', () => {
    const wrapper = shallow(<InfoDisplay info="Your Turn!" />);
    expect(wrapper.is('.InfoDisplay')).toBe(true);
  });
  it('should mount to the DOM', () => {
    const wrapper = mount(<InfoDisplay info="Your Turn!" />);
    expect(wrapper.find('.InfoDisplay').length).toBe(1);
  });
  it('should display the info to the user', () => {
    const wrapper = mount(<InfoDisplay info="Your Turn!" />);
    expect(wrapper.find('.InfoDisplay').text()).toBe('Your Turn!');
  });
});
