import React from 'react'
import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/*' element={
              <>
                <Link to="/login" title="login">LOGIN</Link>
              </>
            }/>
            <Route path='/login' element={
              <>
                <Link to="/home"title='home'>HOME</Link>
              </>
            }/>
            <Route path='/home' element={<>
            <Link to="/login" title='login'>LOGIN</Link>
            </>} />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
