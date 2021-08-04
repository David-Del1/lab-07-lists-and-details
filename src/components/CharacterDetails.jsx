import React from 'react';


const DetailsPage = ({ name, species, image }) => {


  

  return (
    <>
      <img src={image} alt={name} />
      <h1> {name} </h1>
      <h2> {species} </h2>
    </>

  );
};

export default DetailsPage;
