import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/rickAndMortyApi';

const RickAndMorty = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters} />;
};

export default RickAndMorty;
