'use strict'
import React from 'react'
import ReactDom from 'react-dom'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import { Root } from './components'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDom.render (
  <Provider store={store}>
    <Router>
    <Root/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
