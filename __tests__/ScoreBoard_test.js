/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ScoreBoard from '../src/components/ScoreBoard';

describe('ScoreBoard', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<ScoreBoard compScore={0} />);
    expect(wrapper.is('.ScoreBoard')).toBe(true);
  });
  it('mounts to the DOM', () => {
    const wrapper = mount(<ScoreBoard compScore={0} />);
    expect(wrapper.find('.ScoreBoard').length).toBe(1);
  });
  it('displays the correct output from props to the user', () => {
    const wrapper = mount(<ScoreBoard compScore={2} />);
    expect(wrapper.find('.compOutput').text()).toBe('2');
  });
});
