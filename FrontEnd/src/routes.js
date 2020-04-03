import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorMessage from './components/ErrorMessage';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CheckinUser from './pages/CheckinUser';

export default function routes() {
   return (
      <Switch>
         <Route path="/dashboard" exact component={Dashboard} />
         <Route path="/register" exact component={Register} />
         <Route path="/checkin/user/:cell" exact component={CheckinUser} />
         <Route
            path="/"
            component={() => <ErrorMessage message="Está página não existe" />}
         />
      </Switch>
   );
}
