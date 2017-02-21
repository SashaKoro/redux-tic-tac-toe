import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Board = styled.div`
  background-color: #F26D21;
  max-width: 455px;
  height: 455px;
  margin-auto;
  margin-top: 25px;
`;

const Button = styled.button`
  font-size: 65px;
  font-family: Futura, Arial;
  vertical-align: top;
  margin: auto;
  margin-right: 10px;
  height: 145px;
  width: 145px;
  border: none;
`;

const FirstRow = styled.div`
  margin-left: -15px;
  width: 500px;
  padding-bottom: 10px;
`;

const SecondRow = styled.div`
  margin-left: -15px;
  width: 500px;
  padding-bottom: 10px;
`;

const ThirdRow = styled.div`
  width: 500px;
  margin-left: -15px;
`;

const GameBoard = ({ squareContains, nextMove, boxColors, playersTurn }) => {
  let [zero, one, two, three, four, five, six, seven, eight] = squareContains;
  let [color0, color1, color2, color3, color4, color5, color6, color7, color8] = boxColors;

  const chosenBox = (position) => nextMove(position);

  GameBoard.propTypes = {
    squareContains: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    nextMove: PropTypes.func.isRequired,
    boxColors: PropTypes.arrayOf(PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    playersTurn: PropTypes.bool.isRequired,
  };

/* eslint-disable react/jsx-no-bind */
  return (
    <Board className="GameBoard container">
      <FirstRow>
        <Button
          className="btn0"
          style={color0}
          disabled={zero !== '' || !playersTurn}
          onClick={() => chosenBox(0)}
        >{zero}
        </Button>
        <Button
          className="btn1"
          style={color1}
          disabled={one !== '' || !playersTurn}
          onClick={() => chosenBox(1)}
        >{one}
        </Button>
        <Button
          className="btn2"
          style={color2}
          disabled={two !== '' || !playersTurn}
          onClick={() => chosenBox(2)}
        >{two}
        </Button>
      </FirstRow>
      <SecondRow>
        <Button
          className="btn3"
          style={color3}
          disabled={three !== '' || !playersTurn}
          onClick={() => chosenBox(3)}
        >{three}
        </Button>
        <Button
          className="btn4"
          style={color4}
          disabled={four !== '' || !playersTurn}
          onClick={() => chosenBox(4)}
        >{four}
        </Button>
        <Button
          className="btn5"
          style={color5}
          disabled={five !== '' || !playersTurn}
          onClick={() => chosenBox(5)}
        >{five}
        </Button>
      </SecondRow>
      <ThirdRow>
        <Button
          className="btn6"
          style={color6}
          disabled={six !== '' || !playersTurn}
          onClick={() => chosenBox(6)}
        >{six}
        </Button>
        <Button
          className="btn7"
          style={color7}
          disabled={seven !== '' || !playersTurn}
          onClick={() => chosenBox(7)}
        >{seven}
        </Button>
        <Button
          className="btn8"
          style={color8}
          disabled={eight !== '' || !playersTurn}
          onClick={() => chosenBox(8)}
        >{eight}
        </Button>
      </ThirdRow>
    </Board>
  );
};

export default GameBoard;
