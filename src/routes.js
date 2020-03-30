import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SendSMS from './pages/SendSMS';

export default function routes() {
   return (
      <Switch>
         <Route path="/" exact component={SendSMS} />
      </Switch>
   );
}
