import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Provider } from "react-redux";


import RouteSwitch from './RouteSwitch';

import { configureStore } from '@reduxjs/toolkit'

import animalReducer from './reducers/animalReducer';

import sessionReducer from './reducers/sessionReducer';

import resultReducer from './reducers/resultReducer';

import filterReducer from './reducers/filterReducer';

import breedReducer from './reducers/breedReducer';

import pageReducer from './reducers/pageReducer';

const store = configureStore({
  reducer: {
    animalType: animalReducer,
    session: sessionReducer,
    results: resultReducer,
    filter: filterReducer,
    breed:breedReducer,
    page: pageReducer
  },
devTools:true
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>

  <RouteSwitch />

  </Provider>


);

