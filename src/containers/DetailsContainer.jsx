import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsPage from '../components/CharacterDetails';
import { getCharacterById } from '../services/rickAndMortyApi';

function DetailsContainer() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(async () => {
    const characterMatch = await getCharacterById(id);
    setCharacter(characterMatch);
    setLoading(false);
  }, [id]);

  if(loading) return <h1>Loading...</h1>;
  return (
    <DetailsPage {...character} />
  );
}

export default DetailsContainer;
