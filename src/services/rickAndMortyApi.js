
const URL = 'https://rickandmortyapi.com/api/character';
export const fetchCharacters = async () => {
  const res = await fetch(URL);
  const json = await res.json();

  return json.results.map(({ id, name, species, image }) => ({
    id,
    name,
    species,
    image
  })); 
  
};

export const getCharacterById = async (id) => {
  const res = await fetch(`${URL}/${id}`);
  const json = await res.json();
  console.log(json);
  return json;
};
