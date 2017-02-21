/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { TicTacToe } from '../src/components/TicTacToe';
import { YOUR_TURN } from '../src/constants/infoDisplayConstants';
import { colorState } from '../src/constants/colorTestStub';
import { cleanBoard } from '../src/reducers/gameBoard';
import InfoDisplay from '../src/components/InfoDisplay';
import GameBoard from '../src/components/GameBoard';
import ScoreBoard from '../src/components/ScoreBoard';

describe('TicTacToe', () => {
  const props = {
    infoDisplay: YOUR_TURN,
    introScreen: true,
    computerScore: 0,
    playersTurn: true,
    turnNumber: 1,
    playerStarts: true,
    tokens: { playerToken: '', computerToken: '' },
    boxColors: colorState,
    gameBoard: cleanBoard,
    changeInfoDisplay: jest.fn(),
    showIntroScreen: jest.fn(),
    addToComputerScore: jest.fn(),
    changeWhosTurn: jest.fn(),
    updateTurnNumber: jest.fn(),
    whoStartsNext: jest.fn(),
    setTokens: jest.fn(),
    changeBoxColors: jest.fn(),
    updateTheBoard: jest.fn(),
  };

  const newProps = { ...props, introScreen: false };
  describe('TicTacToe base tests', () => {
    it('is is initially unselectable due to intro screen', () => {
      const wrapper = shallow(<TicTacToe {...props} />);
      expect(wrapper.is('.TicTacToe')).toBe(false);
    });

    it('becomes selectable by class name once introScreen prop is false', () => {
      const wrapper = shallow(<TicTacToe {...newProps} />);
      expect(wrapper.is('.TicTacToe')).toBe(true);
    });

    it('mounts to a DOM', () => {
      const wrapper = mount(<TicTacToe {...newProps} />);
      expect(wrapper.find('.TicTacToe').length).toBe(1);
    });

    it('contains an InfoDisplay child', () => {
      const wrapper = shallow(<TicTacToe {...newProps} />);
      expect(wrapper.find(InfoDisplay).length).toBe(1);
    });

    it('contains a GameBoard child', () => {
      const wrapper = shallow(<TicTacToe {...newProps} />);
      expect(wrapper.find(GameBoard).length).toBe(1);
    });

    it('contains a ScoreBoard child', () => {
      const wrapper = shallow(<TicTacToe {...newProps} />);
      expect(wrapper.find(ScoreBoard).length).toBe(1);
    });
  });

  describe('TicTacToe action dispatch tests', () => {
    it('calls showIntroScreen and setTokens actions when xButton or oButton is clicked', () => {
      const wrapper = mount(<TicTacToe {...props} />);
      wrapper.find('.xButton').simulate('click');

      expect(props.showIntroScreen.mock.calls[0][0]).toBe(false);
      expect(props.setTokens.mock.calls[0]).toEqual(['X', 'O']);
    });

    const nextProps = { ...newProps, tokens: { playerToken: 'X', computerToken: 'X' } };

    it('calls updateTheBoard with new board when player makes a new move', () => {
      const wrapper = mount(<TicTacToe {...nextProps} />);
      wrapper.find('.btn5').simulate('click');

      expect(nextProps.updateTheBoard.mock.calls[0][0]).toEqual(['','','','','','X','','','']);
    });

    it('calls updateTurnNumber with new turn when player makes a new move', () => {
      const wrapper = mount(<TicTacToe {...nextProps} />);
      wrapper.find('.btn5').simulate('click');

      expect(nextProps.updateTurnNumber.mock.calls[0][0]).toEqual(2);
    });

    it('calls changeInfoDisplay with Thinking... when player makes a new move', () => {
      const wrapper = mount(<TicTacToe {...nextProps} />);
      wrapper.find('.btn5').simulate('click');

      expect(nextProps.changeInfoDisplay.mock.calls[0][0]).toEqual('Thinking...');
    });

    it('calls changeWhosTurn with false when player makes a new move', () => {
      const wrapper = mount(<TicTacToe {...nextProps} />);
      wrapper.find('.btn5').simulate('click');

      expect(nextProps.changeWhosTurn.mock.calls[0][0]).toEqual(false);
    });
  });
});
