import React, {useState} from 'react'
import store from './store';
import { Provider } from 'react-redux';



import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {
          <Routes>
            <Route path='/' element={<>LOGIN</>} />
            <Route path='/' element={<>HOME</>} />
          </Routes>
        }
      </BrowserRouter>
    </Provider>
  );
}

export default App;
