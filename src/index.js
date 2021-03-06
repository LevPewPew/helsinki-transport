import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

const GRAPHQL_API_URL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: GRAPHQL_API_URL
});

cache.writeData({
  data: {
    modalDisplayed: false,
    routeStops: []
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
