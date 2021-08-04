import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const CharacterList = ({ characters }) => (

  <ListStyled>
    {characters.map(character => (
      <li key={character.id} >
        <CharacterCard {...character } />
      </li>
    ))}
  </ListStyled>
);

export default CharacterList;

const ListStyled = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  list-style: none;
`;
