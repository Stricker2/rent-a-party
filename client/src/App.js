import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';

import Home from './pages/Home';
import Nav from './components/Nav';
//import About form './components/About';

import { StoreProvider } from './utils/GlobalState';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

//need token and memory caches here?
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <StoreProvider>
                        <Nav />
                        
                        <Routes>
                        Hello
                            <Route 
                                path="/"
                                elment={<Home />}
                            />

                        </Routes>
                    </StoreProvider>
                </div>
            </Router>
       </ApolloProvider>
    );
}


export default App;