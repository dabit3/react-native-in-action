import React from 'react'

import Books from './src/Books'
import rootReducer from './src/reducers'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Books />
      </Provider>
    )
  }
}
