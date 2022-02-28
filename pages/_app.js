import '../styles/globals.scss'

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

import createAccountContent from '../reducers/createAccountContent.reducer'

const store = createStore(combineReducers({ createAccountContent }))

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
