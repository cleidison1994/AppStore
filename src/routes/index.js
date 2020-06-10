import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';

import List from '../pages/Employer/List';
import Edit from '../pages/Employer/Edit';
import New from '../pages/Employer/New';

function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/employer-new" component={New} />
      <Route path="/employer-edit" component={Edit} />
      <Route path="/employer-list" component={List} />
    </Switch>
  );
}

export default routes;
