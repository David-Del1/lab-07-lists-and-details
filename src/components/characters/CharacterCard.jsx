import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CharacterCard = ({ id, name, image, species }) => (
  <>
    <Link to={`/character/${id}`}>
      <CardStyled>
        <img src= {image} alt= {name} />
        <h2> {name} </h2>
        <p>species: {species} </p>
      </CardStyled>
    </Link>
  </>
);

export default CharacterCard;

const CardStyled = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: #e762d7ff;
  border: 10px solid #24325fff;
  border-radius: 15px;
  transform-style: preserve-3d;
  transition: all ease-in-out 0.2s;
  &:hover {
    transform: skew(-5deg);
    border: 3px solid #ff7a59;
    color: #ff7a59;
    background: #fff;
  }

  img {
    border: 5px solid #24325fff;
    border-radius: 15px;
    
  }
  
  h2 {
    font-weight: 800;
    text-transform: uppercase;
  }
`;
