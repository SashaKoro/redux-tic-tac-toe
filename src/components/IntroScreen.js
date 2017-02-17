import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: #E5E6E4;
  font-family: Futura, Arial;
  background-color: #F26D21;
  height: 360px;
  max-width: 460px;
  margin: auto;
  margin-top: 100px;
  border-radius: 10px;
`;

const P = styled.div`
  font-size: 80px;
  padding-top: 5%;
`;

const ButtonDiv = styled.div`
  text-align: center;
  padding-top: 50px;
`;

const Button = styled.button`
  color: #E5E6E4;
  font-family: Futura, Arial;
  font-size: 66px;
  display: inline-block;
  height: 120px;
  width: 120px;
  border-radius: 5px;
  border: 7px solid #107896;
  background-color: #1287A8;

  &:hover {
    cursor: pointer;
    background-color: #1496BB;
    border: 7px solid #1496BB;
  }

  &:focus {
    outline: 2px solid black;
  }

  &:active {
    background-color: #43ABC9;
    border: 7px solid #43ABC9;
    transform: translateY(3px);
  }
`;

const Or = styled.p`
  display: inline-block;
  margin-right: 30px;
  margin-left: 30px;
  font-size: 60px;
`;

const IntroScreen = ({ chooseThis }) => {
  IntroScreen.propTypes = {
    chooseThis: PropTypes.func.isRequired,
  };

  const X = () => chooseThis('X', 'O');
  const O = () => chooseThis('O', 'X');

  return (
    <Div className="IntroScreen container">
      <P className="text-center">Tic Tac Toe</P>
      <ButtonDiv>
        <Button className="xButton" onClick={X}>X</Button>
        <Or>or</Or>
        <Button className="oButton" onClick={O}>O</Button>
      </ButtonDiv>
    </Div>
  );
};

export default IntroScreen;
