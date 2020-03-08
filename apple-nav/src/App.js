import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Components/Nav/Nav'
import SubNav from './Components/SubNav/SubNav'
import './css/index.css';

const AppWrapper = styled.ul`
  list-style-type: none;
`;
const App = () => {
  return (
    <AppWrapper>
      <Nav />
      <Route path='/imac' component={SubNav} />
    </AppWrapper >
  )
}

export default App;
