import React from 'react'
import { store } from './store';
import { Provider } from 'react-redux';
import AplicationRouter from './components/Aplication'

import './App.css';


const App = () => {

  return (
    <Provider store={store}>
      <AplicationRouter/>
    </Provider>
  );
}

export default App;
