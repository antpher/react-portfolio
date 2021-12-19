import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Resume from './components/Resume';

function App() {
  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Projects':
        return <Projects />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;