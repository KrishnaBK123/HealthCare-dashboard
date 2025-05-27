import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/Sidebar.css';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
