import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    // ApolloClient,
    // InMemoryCache,
    // ApolloProvider,
    createHttpLink,
  } from '@apollo/client';

import Home from './pages/Home';
import Nav from './components/Nav';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

//need token and memory caches here?


function App() {
    return (
        //<ApolloProvider client={client}>
            <Router>
                <div>
                <Nav />
                    <Routes>
                    {/* <StoreProvider> */}
                        
                    <Route 
                path="/" 
                element={<Home />} 
              />
              
                    {/* </StoreProvider> */}
                    </Routes>
                </div>
            </Router>
       // </ApolloProvider>
    );
}


export default App;