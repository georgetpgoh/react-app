import React from 'react';
import Chatbot from './components/ChatBot';
import NavBar from './components/NavBar'; // Import the NavBar
import './styles/App.css'; // Main styles for the App

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <NavBar /> {/* Add the NavBar here */}
      </header>
      <main className="app-main">
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
