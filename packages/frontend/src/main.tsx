import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './GlobalStyles'
import { SpinnerContextProvider } from './Spinner/context'

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  DefaultOptions
} from '@apollo/client'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
} as DefaultOptions

const apoloClient = new ApolloClient({
  link: new HttpLink({
    uri: '/graphql'
  }),
  cache: new InMemoryCache(),
  defaultOptions
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apoloClient}>
      <SpinnerContextProvider>
        <App />
        <GlobalStyles />
      </SpinnerContextProvider>
    </ApolloProvider>
  </React.StrictMode>
)
