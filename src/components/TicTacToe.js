import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IntroScreen from './IntroScreen';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import InfoDisplay from './InfoDisplay';
import rowLogic from './functions/rowLogic';
import forkLogic from './functions/forkLogic';
import { cleanBoard } from '../reducers/gameBoard';
import {
  changeInfoDisplay,
  showIntroScreen,
  addToComputerScore,
  changeWhosTurn,
  updateTurnNumber,
  whoStartsNext,
  setTokens,
  changeBoxColors,
  updateTheBoard,
} from '../actions/index';
import * as show from '../constants/infoDisplayConstants';


class TicTacToe extends Component {
  constructor (props) {
    super(props);

    this.PlayerHasChosen = this.PlayerHasChosen.bind(this);
    this.NewPlayerMove = this.NewPlayerMove.bind(this);
    this.crownWinner = this.crownWinner.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.ComputerMove = this.ComputerMove.bind(this);
    this.whosMove = this.whosMove.bind(this);
    this.whoStarts = this.whoStarts.bind(this);
  }

  PlayerHasChosen (playerToken, computerToken) {
    this.props.showIntroScreen(false);
    this.props.setTokens(playerToken, computerToken);
  }

  NewPlayerMove (position) {
    let placeToken = this.props.tokens.playerToken;
    let currentBoard = this.props.gameBoard.slice();
    currentBoard[position] = placeToken;
    this.props.updateTheBoard(currentBoard);
    this.checkIfWinner(currentBoard);
  }

  checkIfWinner (Board) {
    let gameOver = false;
    const winningLines = [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,4,6],
      [2,5,8],
      [3,4,5],
      [6,7,8],
    ];
    winningLines.forEach((winLine) => {
      let [winIdxOne, winIdxTwo, winIdxThree] = winLine;
      if (Board[winIdxOne] + Board[winIdxTwo] + Board[winIdxThree] === 'XXX') {
        gameOver = true;
        this.crownWinner('X', winIdxOne, winIdxTwo, winIdxThree);
      } else if (Board[winIdxOne] + Board[winIdxTwo] + Board[winIdxThree] === 'OOO') {
        gameOver = true;
        this.crownWinner('O', winIdxOne, winIdxTwo, winIdxThree);
      }
    });
    if (Board.join('').length === 9) {
      gameOver = true;
      this.tieGame();
    }
    if (!gameOver) this.whosMove();
  }

  tieGame () {
    this.props.changeInfoDisplay(show.TIE_GAME);
    setTimeout(this.restartGame, 3000);
  }

  whosMove () {
    this.props.updateTurnNumber(this.props.turnNumber + 1);
    if (this.props.playersTurn) {
      this.props.changeInfoDisplay(show.THINKING);
      this.props.changeWhosTurn(false);
      setTimeout(this.ComputerMove, 1000);
    } else {
      this.props.changeWhosTurn(true);
      this.props.changeInfoDisplay(show.YOUR_TURN);
    }
  }

  whoStarts () {
    if (this.props.playerStarts) {
      this.props.changeWhosTurn(false);
      this.props.whoStartsNext();
      this.props.changeInfoDisplay(show.THINKING);
      setTimeout(this.ComputerMove, 1000);
    } else {
      this.props.whoStartsNext();
      this.props.changeWhosTurn(true);
      this.props.changeInfoDisplay(show.YOUR_TURN);
    }
  }

  crownWinner (winningToken, winIdxOne, winIdxTwo, winIdxThree) {
    let winningColor = '#EFD469';
    let Colors = JSON.parse(JSON.stringify(this.props.boxColors));
    Colors[winIdxOne].backgroundColor = winningColor;
    Colors[winIdxTwo].backgroundColor = winningColor;
    Colors[winIdxThree].backgroundColor = winningColor;
    this.props.changeBoxColors(Colors);
    this.props.changeInfoDisplay(show.YOU_LOST);
    this.props.addToComputerScore();
    setTimeout(this.restartGame, 3000);
  }

  restartGame () {
    let boardCopy = _.cloneDeep(this.props.boxColors);
    let freshBoard = boardCopy.map((eachColor) => {
      eachColor.backgroundColor = '#D2D2D2';
      return eachColor;
    });
    this.props.changeBoxColors(freshBoard);
    this.props.updateTheBoard(cleanBoard);
    this.props.updateTurnNumber(1);
    this.whoStarts();
  }

  ComputerMove () {
    let turnNumber = this.props.turnNumber;
    let gameBoard = this.props.gameBoard.slice();
    let playerToken = this.props.tokens.playerToken;
    let token = this.props.tokens.computerToken;

    if (turnNumber === 1) gameBoard[0] = token;

    if (turnNumber === 2) {
      if (gameBoard[4] === '') gameBoard[4] = token;
      else gameBoard[2] = token;
    }

    if (turnNumber === 3) {
      if (gameBoard[4] === '') gameBoard[4] = token;
      else gameBoard[8] = token;
    }

    if (turnNumber === 4) {
      gameBoard = rowLogic(gameBoard, playerToken, token);

      if (gameBoard.join('').length === 3) {
        gameBoard = forkLogic(gameBoard, playerToken, token);
      }
      if (gameBoard.join('').length === 3) {
        if (gameBoard[1] !== playerToken) {
          gameBoard[1] = token;
        } else gameBoard[3] = token;
      }
    }
    if (turnNumber > 4) {
      gameBoard = rowLogic(gameBoard, token, token);

      if (gameBoard.join('').length === turnNumber - 1) {
        gameBoard = rowLogic(gameBoard, playerToken, token);
      }
      if (gameBoard.join('').length === turnNumber - 1) {
        let i = 0;
        while (gameBoard[i] !== '') i += 1;
        gameBoard[i] = token;
      }
    }
    this.props.updateTheBoard(gameBoard);
    this.checkIfWinner(gameBoard);
  }

  render () {
    console.log(this.props);
    if (this.props.introScreen) {
      return (
        <IntroScreen
          className="IntroScreen" chooseThis={this.PlayerHasChosen}
        />
      );
    } else return (
      <div className="TicTacToe">
        <InfoDisplay
         info={this.props.infoDisplay}
        />
        <GameBoard
          playersTurn={this.props.playersTurn}
          nextMove={this.NewPlayerMove}
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
  infoDisplay: PropTypes.string.isRequired,
  changeInfoDisplay: PropTypes.func.isRequired,
  introScreen: PropTypes.bool.isRequired,
  showIntroScreen: PropTypes.func.isRequired,
  computerScore: PropTypes.number.isRequired,
  addToComputerScore: PropTypes.func.isRequired,
  playersTurn: PropTypes.bool.isRequired,
  changeWhosTurn: PropTypes.func.isRequired,
  turnNumber: PropTypes.number.isRequired,
  updateTurnNumber: PropTypes.func.isRequired,
  playerStarts: PropTypes.bool.isRequired,
  whoStartsNext: PropTypes.func.isRequired,
  tokens: PropTypes.shape({
    playerToken: PropTypes.string.isRequired,
    computerToken: PropTypes.string.isRequired,
  }).isRequired,
  setTokens: PropTypes.func.isRequired,
  boxColors: PropTypes.arrayOf(PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  changeBoxColors: PropTypes.func.isRequired,
  gameBoard: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  updateTheBoard: PropTypes.func.isRequired,
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
  return bindActionCreators({
    changeInfoDisplay,
    showIntroScreen,
    addToComputerScore,
    changeWhosTurn,
    updateTurnNumber,
    whoStartsNext,
    setTokens,
    changeBoxColors,
    updateTheBoard,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
