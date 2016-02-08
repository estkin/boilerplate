import React from 'react';
import App from '../components/App';
import Home from '../components/Home';
import Test from '../components/Test';
import NotFound from '../components/NotFound';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="test" component={Test} />
    <Route path="*" component={NotFound} />
  </Route>
);
