import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav'
import SubNav from './Components/SubNav/SubNav'
import data from './data/data'
import './css/index.css';

const App = (props) => {
  return (
    <div>
      <Nav />
      <Route path='/:id' render={props => <SubNav {...props} data={data} />} />
    </div>
  )
}

export default App;
