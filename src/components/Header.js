import React from 'react';
import '../styles/Header.css';
import { Search, Bell, Plus } from 'lucide-react'; 

const Header = () => {
   return (
  <header className="header">

        
 <div className="responsive-logo">
    <h1><span className="highlight">Health</span>care.</h1>
  </div>

  <div className="header-left">
    <div className="search-row">
      <div className="search-input">
        <Search size={18} />
        <input type="text" placeholder="Search" />
      </div>
      <button className="icon-btn">
        <Bell size={20} />
      </button>
    </div>
  </div>

  <div className="header-right">
    <div className="avatar orange-avatar">
      <span role="img" aria-label="smile">😊</span>
    </div>
    <button className="add-btn">
      <Plus size={20} />
    </button>
  </div>
</header>


  );
};

export default Header;
