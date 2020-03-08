import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Components/Nav/Nav'
import SubNav from './Components/SubNav/SubNav'
import data from './data/data'
import './css/index.css';

const AppWrapper = styled.ul`
  list-style-type: none;
`;
const App = (props) => {
  return (
    <AppWrapper>
      <Nav />
      <Route path='/:id' render={props => <SubNav {...props} data={data} />} />
    </AppWrapper >
  )
}

export default App;
