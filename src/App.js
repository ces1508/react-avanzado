import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
// styles
import { GlobalStyle } from './styles/GlobalStyles'
// components
import { Logo } from './components/Logo'
// config
import { GRAPH_ENDPOINT } from './constants/api'
import { Navbar } from './components/Navbar'
import { AppRouter } from './Router'

const client = new ApolloClient({
  uri: GRAPH_ENDPOINT,
  cache: new InMemoryCache()
})

export default function App () {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Logo />
        <AppRouter />
        <Navbar />
      </ApolloProvider>
    </BrowserRouter>
  )
}
