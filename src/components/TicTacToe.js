import React, { Component } from 'react';
import IntroScreen from './IntroScreen';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import InfoDisplay from './InfoDisplay';
import rowLogic from './functions/rowLogic';
import forkLogic from './functions/forkLogic';
import _ from 'lodash';

class TicTacToe extends Component {
  constructor (props) {
    super(props);

    this.state = {
      infoDisplay: 'Your Turn!',
      showIntroScreen: true,
      playerScore: 0,
      compScore: 0,
      gameBoard: ['', '', '', '', '', '', '', '', ''],
      playerChose: '',
      computerChose: '',
      playersTurn: true,
      playerStarts: true,
      turnNumber: 1,
      boxColors: [
        { backgroundColor: '#D2D2D2' },
        { backgroundColor: '#D2D2D2' },
        { backgroundColor: '#D2D2D2' },
        { backgroundColor: '#D2D2D2' },
        { backgroundColor: '#D2D2D2' },
        { backgroundColor: '#D2D2D2' },
        { backgroundColor: '#D2D2D2' },
        { backgroundColor: '#D2D2D2' },
        { backgroundColor: '#D2D2D2' },
      ],
    };

    this.PlayerHasChosen = this.PlayerHasChosen.bind(this);
    this.NewPlayerMove = this.NewPlayerMove.bind(this);
    this.crownWinner = this.crownWinner.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.ComputerMove = this.ComputerMove.bind(this);
    this.whosMove = this.whosMove.bind(this);
    this.whoStarts = this.whoStarts.bind(this);
  }

  PlayerHasChosen (choice, computerToken) {
    this.setState({ showIntroScreen: false });
    this.setState({ playerChose: choice });
    this.setState({ computerChose: computerToken });
  }

  NewPlayerMove (position) {
    let placeToken = this.state.playerChose;
    let currentBoard = this.state.gameBoard.slice();
    currentBoard[position] = placeToken;
    this.setState({ gameBoard: currentBoard });
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
    this.setState({ infoDisplay: 'Tie game!' });
    setTimeout(this.restartGame, 3000);
  }

  whosMove () {
    this.setState({ turnNumber: this.state.turnNumber + 1 });
    if (this.state.playersTurn) {
      this.setState({ infoDisplay: 'Thinking...' });
      this.setState({ playersTurn: false });
      setTimeout(this.ComputerMove, 1000);
    } else {
      this.setState({ playersTurn: true });
      this.setState({ infoDisplay: 'Your Turn!' });
    }
  }

  whoStarts () {
    if (this.state.playerStarts) {
      this.setState({ playerStarts: false });
      this.setState({ playersTurn: false });
      this.setState({ infoDisplay: 'Thinking...' });
      setTimeout(this.ComputerMove, 1000);
    } else {
      this.setState({ playerStarts: true });
      this.setState({ playersTurn: true });
      this.setState({ infoDisplay: 'Your Turn!' });
    }
  }

  crownWinner (winningToken, winIdxOne, winIdxTwo, winIdxThree) {
    let winningColor = '#EFD469';
    let Colors = JSON.parse(JSON.stringify(this.state.boxColors));
    Colors[winIdxOne].backgroundColor = winningColor;
    Colors[winIdxTwo].backgroundColor = winningColor;
    Colors[winIdxThree].backgroundColor = winningColor;
    this.setState({ boxColors: Colors });
    if (winningToken === this.state.playerChose) {
      this.setState({ infoDisplay: 'You won!' });
      this.setState({ playerScore: this.state.playerScore + 1 });
    } else {
      this.setState({ infoDisplay: 'You lost...' });
      this.setState({ compScore: this.state.compScore + 1 });
    }
    setTimeout(this.restartGame, 3000);
  }

  restartGame () {
    let boardCopy = _.cloneDeep(this.state.boxColors);
    let freshBoard = boardCopy.map((eachColor) => {
      eachColor.backgroundColor = '#D2D2D2';
      return eachColor;
    });
    this.setState({ boxColors: freshBoard });
    this.setState({ gameBoard: ['', '', '', '', '', '', '', '', ''] });
    this.setState({ turnNumber: 1 });
    this.whoStarts();
  }

  ComputerMove () {
    let turnNumber = this.state.turnNumber;
    let gameBoard = this.state.gameBoard.slice();
    let playerToken = this.state.playerChose;
    let token = this.state.computerChose;

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
    this.setState({ gameBoard });
    this.checkIfWinner(gameBoard);
  }

  render () {
    if (this.state.showIntroScreen) {
      return (
        <IntroScreen
          className="IntroScreen" chooseThis={this.PlayerHasChosen}
        />
      );
    } else return (
      <div className="TicTacToe">
        <InfoDisplay
         info={this.state.infoDisplay}
        />
        <GameBoard
          playersTurn={this.state.playersTurn}
          nextMove={this.NewPlayerMove}
          squareContains={this.state.gameBoard}
          boxColors={this.state.boxColors}
        />
        <ScoreBoard
          playerScore={this.state.playerScore}
          compScore={this.state.compScore}
        />
      </div>
    );
  }
}

export default TicTacToe;
