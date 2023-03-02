// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Books from './pages/Books';
import { Add } from './pages/Add';
import { Update } from './pages/Update';
import 'bootstrap/dist/css/bootstrap.min.css' ;


import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/update/:id' element={<Update/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
