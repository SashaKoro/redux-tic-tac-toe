/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import TicTacToe from '../src/components/TicTacToe';

describe('TicTacToe', () => {
  it('should show class of IntroScreen when true IntroScreenState', () => {
    const wrapper = shallow(<TicTacToe />);
    wrapper.setState({ showIntroScreen: true });
    expect(wrapper.is('.IntroScreen')).toBe(true);
  });

  it('should show class of TicTacToe when false IntroScreenState', () => {
    const wrapper = shallow(<TicTacToe />);
    wrapper.setState({ showIntroScreen: false });
    expect(wrapper.is('.TicTacToe')).toBe(true);
  });

  it('should assign correct player and computer Tokens', () => {
    const wrapper = mount(<TicTacToe />);

    wrapper.find('.xButton').simulate('click');
    expect(wrapper.state().playerChose).toBe('X');
    expect(wrapper.state().computerChose).toBe('O');

    wrapper.setState({ showIntroScreen: true });

    wrapper.find('.oButton').simulate('click');
    expect(wrapper.state().playerChose).toBe('O');
    expect(wrapper.state().computerChose).toBe('X');
  });

  it('should place the playerToken in the right box', () => {
    const wrapper = mount(<TicTacToe />);

    wrapper.find('.xButton').simulate('click');
    wrapper.find('.btn2').simulate('click');

    expect(wrapper.find('.btn2').text()).toBe('X');
  });
});
