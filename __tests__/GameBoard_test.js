/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { colorState, colorTestStub } from '../src/constants/colorTestStub';
import GameBoard from '../src/components/GameBoard';

describe('GameBoard', () => {
  const props = {
    squareContains: ['', '', 'X', '', '', 'O', '', '', ''],
    nextMove: jest.fn(),
    boxColors: colorState,
    playersTurn: true,
  };

  it('is selectable by class name', () => {
    const wrapper = shallow(<GameBoard {...props} />);
    expect(wrapper.is('.GameBoard')).toBe(true);
  });

  it('mounts to the DOM', () => {
    const wrapper = mount(<GameBoard {...props} />);
    expect(wrapper.find('.GameBoard').length).toBe(1);
  });

  it('displays the correct tokens from props to the user', () => {
    const wrapper = mount(<GameBoard {...props} />);

    expect(wrapper.find('.btn1').text()).toBe('');
    expect(wrapper.find('.btn2').text()).toBe('X');
    expect(wrapper.find('.btn5').text()).toBe('O');
  });

  it('disables buttons with tokens inside', () => {
    const wrapper = shallow(<GameBoard {...props} />);
    expect(wrapper.find('.btn2').prop('disabled')).toBe(true);
  });

  it('allows empty buttons to be clickable when players turn', () => {
    const wrapper = shallow(<GameBoard {...props} />);
    expect(wrapper.find('.btn3').prop('disabled')).toBe(false);
  });

  it('disabled all buttons when it is NOT players turn', () => {
    let newProps = { ...props, playersTurn: false };
    const wrapper = shallow(<GameBoard {...newProps} />);
    expect(wrapper.find('.btn3').prop('disabled')).toBe(true);
  });

  it('has buttons that have the style properties of the boxColors array objects', () => {
    let newProps = { ...props, boxColors: colorTestStub };
    const wrapper = shallow(<GameBoard {...newProps} />);
    expect(wrapper.find('.btn3').prop('style')).toBe(colorTestStub[3]);
    expect(wrapper.find('.btn8').prop('style')).toBe(colorTestStub[8]);
  });

  it('passes back the index of a clicked button on the nextMove function test 1', () => {
    const wrapper = shallow(<GameBoard {...props} />);
    wrapper.find('.btn0').simulate('click');
    expect(props.nextMove.mock.calls[0][0]).toBe(0);
  });

  it('passes back the index of a clicked button on the nextMove function test 2', () => {
    const wrapper = shallow(<GameBoard {...props} />);
    wrapper.find('.btn6').simulate('click');
    expect(props.nextMove.mock.calls[1][0]).toBe(6);
  });
});
