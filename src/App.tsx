import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Title } from './pages/Title';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/title/:id' element={<Title />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
