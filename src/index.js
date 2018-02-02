import React from 'react'
import ReactDOM from 'react-dom'
import Routers from './router/index'

import store from './store'
import { Provider } from 'react-redux'

import './index.css'
import 'antd/dist/antd.css'

// mock数据
import './mock/index'

import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./views/app/index', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Routers />
      </Provider>,
      document.getElementById('root')
    )
  })
}

registerServiceWorker()
