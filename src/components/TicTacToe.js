import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IntroScreen from './IntroScreen';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import InfoDisplay from './InfoDisplay';
import rowLogic, { winningLines } from './functions/rowLogic';
import forkLogic from './functions/forkLogic';
import { cleanBoard } from '../reducers/gameBoard';
import * as actions from '../actions/index';
import * as show from '../constants/infoDisplayConstants';

export class TicTacToe extends Component {
  constructor (props) {
    super(props);

    this.playerHasChosen = this.playerHasChosen.bind(this);
    this.newPlayerMove = this.newPlayerMove.bind(this);
    this.crownWinner = this.crownWinner.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.computerMove = this.computerMove.bind(this);
    this.whosMove = this.whosMove.bind(this);
    this.whoStarts = this.whoStarts.bind(this);
  }

  playerHasChosen (playerToken, computerToken) {
    this.props.showIntroScreen(false);
    this.props.setTokens(playerToken, computerToken);
  }

  newPlayerMove (position) {
    let currentBoard = this.props.gameBoard.slice();
    currentBoard[position] = this.props.tokens.playerToken;
    this.props.updateTheBoard(currentBoard);
    this.checkIfWinner(currentBoard);
  }

  checkIfWinner (Board) {
    let gameOver = false;
    winningLines.forEach((winLine) => {
      let [winIdxOne, winIdxTwo, winIdxThree] = winLine;
      if (Board[winIdxOne] + Board[winIdxTwo] + Board[winIdxThree] === 'XXX' ||
          Board[winIdxOne] + Board[winIdxTwo] + Board[winIdxThree] === 'OOO') {
        gameOver = true;
        return this.crownWinner(...winLine);
      }
    });
    if (Board.join('').length === 9) {
      return this.tieGame();
    }
    if (!gameOver) {
      return this.whosMove();
    }
  }

  tieGame () {
    this.props.changeInfoDisplay(show.TIE_GAME);
    setTimeout(this.restartGame, 3000);
  }

  whosMove () {
    const {
      updateTurnNumber,
      turnNumber,
      playersTurn,
      changeWhosTurn, 
      changeInfoDisplay,
    } = this.props;

    updateTurnNumber(turnNumber + 1);
    if (playersTurn) {
      changeWhosTurn(false);
      changeInfoDisplay(show.THINKING);
      setTimeout(this.computerMove, 1000);
    } else {
      changeWhosTurn(true);
      changeInfoDisplay(show.YOUR_TURN);
    }
  }

  whoStarts () {
    const { playerStarts, changeWhosTurn, whoStartsNext, changeInfoDisplay } = this.props;

    if (playerStarts) {
      changeWhosTurn(false);
      whoStartsNext();
      changeInfoDisplay(show.THINKING);
      setTimeout(this.computerMove, 1000);
    } else {
      changeWhosTurn(true);
      whoStartsNext();
      changeInfoDisplay(show.YOUR_TURN);
    }
  }

  crownWinner (winIdxOne, winIdxTwo, winIdxThree) {
    const { boxColors, changeBoxColors, changeInfoDisplay, addToComputerScore } = this.props;

    const winningColor = '#EFD469';
    let Colors = JSON.parse(JSON.stringify(boxColors));
    Colors[winIdxOne].backgroundColor = winningColor;
    Colors[winIdxTwo].backgroundColor = winningColor;
    Colors[winIdxThree].backgroundColor = winningColor;
    changeBoxColors(Colors);
    changeInfoDisplay(show.YOU_LOST);
    addToComputerScore();
    setTimeout(this.restartGame, 3000);
  }

  restartGame () {
    const { boxColors, changeBoxColors, updateTheBoard, updateTurnNumber } = this.props;
    let boardCopy = _.cloneDeep(boxColors);
    let freshBoard = boardCopy.map((eachColor) => {
      eachColor.backgroundColor = '#D2D2D2';
      return eachColor;
    });
    changeBoxColors(freshBoard);
    updateTheBoard(cleanBoard);
    updateTurnNumber(1);
    this.whoStarts();
  }

  computerMove () {
    const { turnNumber, updateTheBoard } = this.props;
    const { playerToken, computerToken } = this.props.tokens;
    let gameBoard = this.props.gameBoard.slice();


    if (turnNumber === 1) {
      gameBoard[0] = computerToken;
    }
    if (turnNumber === 2) {
      if (gameBoard[4] === '') {
        gameBoard[4] = computerToken;
      } else gameBoard[2] = computerToken;
    }

    if (turnNumber === 3) {
      if (gameBoard[4] === '') {
        gameBoard[4] = computerToken;
      } else gameBoard[8] = computerToken;
    }

    if (turnNumber === 4) {
      gameBoard = rowLogic(gameBoard, playerToken, computerToken);

      if (gameBoard.join('').length === 3) {
        gameBoard = forkLogic(gameBoard, playerToken, computerToken);
      }
      if (gameBoard.join('').length === 3) {
        if (gameBoard[1] !== playerToken) {
          gameBoard[1] = computerToken;
        } else gameBoard[3] = computerToken;
      }
    }
    if (turnNumber > 4) {
      gameBoard = rowLogic(gameBoard, computerToken, computerToken);

      if (gameBoard.join('').length === turnNumber - 1) {
        gameBoard = rowLogic(gameBoard, playerToken, computerToken);
      }
      if (gameBoard.join('').length === turnNumber - 1) {
        let i = 0;
        while (gameBoard[i] !== '') i += 1;
        gameBoard[i] = computerToken;
      }
    }

    updateTheBoard(gameBoard);
    this.checkIfWinner(gameBoard);
  }

  render () {
    if (this.props.introScreen) {
      return (
        <IntroScreen
          className="IntroScreen"
          chooseThis={this.playerHasChosen}
        />
      );
    } else return (
      <div className="TicTacToe">
        <InfoDisplay
          info={this.props.infoDisplay}
        />
        <GameBoard
          playersTurn={this.props.playersTurn}
          nextMove={this.newPlayerMove}
          squareContains={this.props.gameBoard}
          boxColors={this.props.boxColors}
        />
        <ScoreBoard
          compScore={this.props.computerScore}
        />
      </div>
    );
  }
}

TicTacToe.propTypes = {

  /* action creators */

  changeInfoDisplay: PropTypes.func.isRequired,
  showIntroScreen: PropTypes.func.isRequired,
  addToComputerScore: PropTypes.func.isRequired,
  changeWhosTurn: PropTypes.func.isRequired,
  updateTurnNumber: PropTypes.func.isRequired,
  whoStartsNext: PropTypes.func.isRequired,
  setTokens: PropTypes.func.isRequired,
  changeBoxColors: PropTypes.func.isRequired,
  updateTheBoard: PropTypes.func.isRequired,

  /* properties */

  infoDisplay: PropTypes.string.isRequired,
  introScreen: PropTypes.bool.isRequired,
  computerScore: PropTypes.number.isRequired,
  playersTurn: PropTypes.bool.isRequired,
  turnNumber: PropTypes.number.isRequired,
  playerStarts: PropTypes.bool.isRequired,
  tokens: PropTypes.shape({
    playerToken: PropTypes.string.isRequired,
    computerToken: PropTypes.string.isRequired,
  }).isRequired,
  boxColors: PropTypes.arrayOf(PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  gameBoard: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

/* eslint-disable func-style */

function mapStateToProps ({
  infoDisplay,
  introScreen,
  computerScore,
  playersTurn,
  turnNumber,
  playerStarts,
  tokens,
  boxColors,
  gameBoard,
}) {
  return {
    infoDisplay,
    introScreen,
    computerScore,
    playersTurn,
    turnNumber,
    playerStarts,
    tokens,
    boxColors,
    gameBoard,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(Object.assign({}, actions), dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
