import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import asyncComponent from './asyncComponent'

// const App = asyncComponent(() => import('../views/app/index'))
// const Home = asyncComponent(() => import('../views/home/index'))
// const Login = asyncComponent(() => import('../views/login/index'))
// const DashBoard = asyncComponent(() => import('../views/dashBoard/index'))
// const NoMatch = asyncComponent(() => import('../components/nomatch/index'))

// import Cards from '../views/cards/index'
// import Home from '../views/home/index'
import Page2 from '../views/page2/index'
import DashBoard from '../views/dashBoard/index'

import Layout from '../views/app/index'
import Login from '../views/login/index'
import NoMatch from '../components/nomatch/index'
import Card from '../components/card/index'
import Table from '../components/table/index'

export const childRoutes = [
  {
    key: '0',
    name: '首页',
    icon: 'laptop',
    url: '/dashboard',
    component: DashBoard,
    exactly: true
  },
  {
    key: 'sub1',
    name: 'Components',
    icon: 'user',
    child: [
      {
        key: '1',
        name: 'Card',
        url: '/components/card',
        component: Card
      },
      {
        key: '2',
        name: 'Table',
        url: '/components/table',
        component: Table
      }
    ]
  },
  {
    key: '3',
    name: 'Page2',
    icon: 'file',
    url: '/page2',
    component: Page2
  },
  {
    key: 'sub3',
    name: 'Team',
    icon: 'team',
    child: [
      {
        key: '4',
        name: 'team1',
        url: '/team/team1',
        component: Page2
      },
      {
        key: '5',
        name: 'team2',
        url: '/team/team2',
        component: Page2
      }
    ]
  }
]

export const breadcrumbNameMap = {
    '/dashboard': '首页',
    
    '/components': 'Components',
    '/components/card': 'Card',
    '/components/table': 'Table',

    '/page2': 'Page2',
    
    '/team': 'Team',
    '/team/team1': 'Team1',
    '/team/team2': 'Team2',
  };


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
