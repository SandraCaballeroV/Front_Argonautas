import React, { useState } from "react";
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateLayout from "layouts/PrivateLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "context/authContext";
import { UserContext } from "context/userContext";
import Index from "pages/Index";
import Usuarios from "pages/usuarios/index";
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import EditarUsuario from "pages/usuarios/editar";
import "styles/globals.css";
import "styles/table.css";
import AuthLayout from "layouts/AuthLayouth";
import Register from "pages/auth/register";
import Login from "pages/auth/login";
import { setContext } from '@apollo/client/link/context';



function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain='misiontic-concesionario.us.auth0.com'
      clientId='WsdhjjQzDLIZEHA6ouuxXGxFONFGAQ4g'
      redirectUri='http://localhost:3000/admin'
      audience='api-autenticacion-concesionario-mintic'
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='' element={<Index />} />
              <Route path='usuarios' element={<Usuarios />} />
              <Route path='category1' element={<IndexCategory1 />} />
              <Route path='category1/page1' element={<Category1 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;