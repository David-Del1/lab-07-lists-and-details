import React from 'react';
import RickAndMorty from '../../containers/RickAndMorty';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import DetailsPage from '../CharacterDetails';
import logo from '../../assets/rm.png';
import styled from 'styled-components';
import DetailsContainer from '../../containers/DetailsContainer';

export default function App() {
  return (
    <MainStyled>
      <img src={logo} alt=""
        className="logo"/>
      <Router>
        <Switch>

          <Route path="/" exact={true}>
            <RickAndMorty />
          </Route>

          <Route path="/character/:id" exact={true}>
            <DetailsContainer />
          </Route>

        </Switch>
      </Router>
    </MainStyled>
  );
}

const MainStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  .logo {
    height: 200px;
    width: auto;
    padding: 1rem;
  }
`;
