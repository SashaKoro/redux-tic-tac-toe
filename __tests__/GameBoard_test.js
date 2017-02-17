/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import GameBoard from '../src/components/GameBoard';

describe('GameBoard', () => {
  const board = ['', '', 'X', '', '', 'O', '', '', ''];
  const boxColors = [
    { backgroundColor: '#D2D2D2' },
    { backgroundColor: '#D2D2D2' },
    { backgroundColor: '#D2D2D2' },
    { backgroundColor: '#D2D2D2' },
    { backgroundColor: '#D2D2D2' },
    { backgroundColor: '#D2D2D2' },
    { backgroundColor: '#D2D2D2' },
    { backgroundColor: '#D2D2D2' },
    { backgroundColor: '#D2D2D2' },
  ];

  it('is selectable by class name', () => {
    const wrapper = shallow(<GameBoard squareContains={board} boxColors={boxColors} />);
    expect(wrapper.is('.GameBoard')).toBe(true);
  });

  it('mounts to the DOM', () => {
    const wrapper = mount(<GameBoard squareContains={board} boxColors={boxColors} />);
    expect(wrapper.find('.GameBoard').length).toBe(1);
  });

  it('displays the correct tokens from props to the user', () => {
    const wrapper = mount(<GameBoard squareContains={board} boxColors={boxColors} />);

    expect(wrapper.find('.btn1').text()).toBe('');
    expect(wrapper.find('.btn2').text()).toBe('X');
    expect(wrapper.find('.btn5').text()).toBe('O');
  });
});
