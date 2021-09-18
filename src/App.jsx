import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Main from './containers/main/Main'
import Admin from './containers/admin/Admin'


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path='/main' component={Main}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
     
      </div>
    )
  }
}

