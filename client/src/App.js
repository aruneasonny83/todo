

import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from './components/auth/Home.js';
import SignUp from './components/auth/SignUp.jsx';
import SignIn from './components/auth/SignIn.jsx';
import NotFound from './components/auth/notfound.js';

function App() {
  return (
    <Routes>
         <Route index element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}

export default App;
