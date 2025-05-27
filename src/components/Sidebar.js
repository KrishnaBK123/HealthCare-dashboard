import React, { useState } from 'react';
import '../styles/Sidebar.css';
import {
  LayoutGrid, History, Calendar, ClipboardList, BarChart2,
  MessageCircle, PhoneCall, Settings
} from 'lucide-react';

const Sidebar = ({ isVisible, onMenuClick }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutGrid size={18} /> },
    { name: 'History', icon: <History size={18} /> },
    { name: 'Calendar', icon: <Calendar size={18} /> },
    { name: 'Appointments', icon: <ClipboardList size={18} /> },
    { name: 'Statistics', icon: <BarChart2 size={18} /> },
  ];

  const toolItems = [
    { name: 'Chat', icon: <MessageCircle size={18} /> },
    { name: 'Support', icon: <PhoneCall size={18} /> },
  ];

  const handleClick = (name) => {
    setActiveItem(name);
    if (window.innerWidth < 768 && onMenuClick) onMenuClick();
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <h1><span className="highlight">Health</span>care.</h1>
      </div>

      <div className="sidebar-section">
        <p className="section-title">General</p>
        <ul className="menu-items">
          {menuItems.map(({ name, icon }) => (
            <li key={name}
                className={`menu-item ${activeItem === name ? 'active' : ''}`}
                onClick={() => handleClick(name)}>
              <div className="icon">{icon}</div>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Tools</p>
        <ul className="menu-items">
          {toolItems.map(({ name, icon }) => (
            <li key={name}
                className={`menu-item ${activeItem === name ? 'active' : ''}`}
                onClick={() => handleClick(name)}>
              <div className="icon">{icon}</div>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <li className={`menu-item ${activeItem === 'Setting' ? 'active' : ''}`}
            onClick={() => handleClick('Setting')}>
          <div className="icon"><Settings size={18} /></div>
          <span>Setting</span>
        </li>
      </div>
    </div>
  );
};


export default Sidebar;
