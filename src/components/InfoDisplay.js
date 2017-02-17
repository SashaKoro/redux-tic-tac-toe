import React, { PropTypes } from 'react';
import styled from 'styled-components';

const P = styled.p`
  margin-top: 75px;
  text-align: center;
  font-family: Futura, Arial;
  font-size: 25px;
`;

const InfoDisplay = ({ info }) => {
  InfoDisplay.propTypes = {
    info: PropTypes.string.isRequired,
  };

  return (
    <P className="InfoDisplay" >{info}</P>
  );
};

export default InfoDisplay;
