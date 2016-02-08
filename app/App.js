import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import routes from './config/routes'

import './main.css'

render((
  <Router history={browserHistory}>
    {routes}
  </Router>
), document.getElementById('app'))
