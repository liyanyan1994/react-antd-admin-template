import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import asyncComponent from './asyncComponent'

// const App = asyncComponent(() => import('../views/app/index'))
// const Home = asyncComponent(() => import('../views/home/index'))
// const Login = asyncComponent(() => import('../views/login/index'))
// const DashBoard = asyncComponent(() => import('../views/dashBoard/index'))
// const NoMatch = asyncComponent(() => import('../components/nomatch/index'))

// import Cards from '../views/cards/index'
import Home from '../views/home/index'
import Page2 from '../views/page2/index'
import DashBoard from '../views/dashBoard/index'

import Layout from '../views/app/index'
import Login from '../views/login/index'
import NoMatch from '../components/nomatch/index'
import Card from '../components/card/index'
import Table from '../components/table/index'

export const childRoutes = [
  {
    path: '/home',
    component: Home,
    exactly: true
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/dashboard',
    component: DashBoard
  },
  {
    path: '/card',
    component: Card
  },
  {
    path: '/table',
    component: Table
  }
]

export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Redirect exact path="/" to="/login" />
          <Route component={Layout} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}
