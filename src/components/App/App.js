import React from 'react'
import './App.css'
import LandingPage from '../../routes/LandingPage/LandingPage'
import ListingPage from '../../routes/ListingPage/ListingPage'

function App() {
  return (
    <div className='App'>
      <LandingPage />
      <ListingPage />
    </div>
  );
}

export default App;
