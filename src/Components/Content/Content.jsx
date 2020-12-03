import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Ideas from './Ideas/Ideas.jsx';
import Idea from './Ideas/Idea.jsx';

const Content = () => (
  <Router>
    <Switch>
      <Route
        path="/ideas/:id"
        render={({ match: { params: { id } } }) => <Idea id={id} />}
      />
      <Route path="/ideas" component={Ideas} />
    </Switch>
  </Router>
);

export default Content;
