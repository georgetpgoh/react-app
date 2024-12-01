import React from 'react';
import Chatbot from './components/ChatBot'; // Import the ChatBot
import NavBar from './components/NavBar'; // Import the NavBar
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <NavBar />
      </header>
      <main className="app-main">
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
