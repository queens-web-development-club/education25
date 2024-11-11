import React, { useState } from 'react';
import Login from './Login';
import ContentEditor from './ContentEditor';
import ContactManager from './ContactManager';
import './index.css';

function Frontend_app() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentTab, setCurrentTab] = useState('content');

  const handleAuthentication = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };

  if (!authenticated) {
    return <Login onAuthenticated={handleAuthentication} />;
  }

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button onClick={() => setCurrentTab('content')}>Content</button>
        <button onClick={() => setCurrentTab('contacts')}>Contacts</button>
      </nav>
      <div className="dashboard-content">
        {currentTab === 'content' ? <ContentEditor /> : <ContactManager />}
      </div>
    </div>
  );
}

export default Frontend_app;
