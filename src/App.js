import logo from './logo.svg';
import './App.css';
import Background from './componant/Background';
import Navbar from './componant/Navbar';
import RecipesList from './componant/RecipesList';
import React, { useState } from 'react'
import Footer from './componant/Footer';

export default function App() {

  return (
    <div className="App">
      <Navbar />
    <Background />

    <div>
      <br />
        <RecipesList />
    </div>
    <Footer />
    </div>
  );
}

