import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom';
import {appRouter} from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <RouterProvider router={appRouter}>
        <App />
    </RouterProvider>
  </ChakraProvider>

);


reportWebVitals();
