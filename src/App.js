import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css'; // Import the main CSS file

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
