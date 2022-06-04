import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import Rotas from './rotas';

function App() {
  return (
    <div className="App">
        <Rotas></Rotas>
        <ToastContainer autoClose={1000}/>
    </div>
  );
}

export default App;
