import React, { useState, useEffect, useRef } from 'react';

import Sidebar from './Sidebar';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import Calendar from './Calendar';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { Search, Bell, Plus, MoveRight, Menu } from 'lucide-react';
import '../styles/DashboardMainContent.css';

const DashboardMainContent = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 768);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarVisible(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < 768 &&
        isSidebarVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarVisible]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarVisible(true);
      } else {
        setIsSidebarVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="menu-toggle-wrapper mobile-only">
        <div className="responsive-logo">
          <h1><span className="highlight">Health</span>care.</h1>
        </div>

        <div className="mobile-header-top">
          <div className="emoji-avatar">
            <span role="img" aria-label="curly-hair">👩🏻‍🦱</span>
          </div>
        </div>

        <div className="search-notification-row">
          <div className="search-input">
            <Search size={18} />
            <input type="text" placeholder="Search" />
          </div>
          <button className="icon-btn">
            <Bell size={20} />
          </button>
        </div>

        <div className="mobile-menu-actions">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <button className="icon-btn">
            <Plus size={20} />
          </button>
        </div>
      </div>

      {isSidebarVisible && (
        <>
          <div className="overlay" />
          <div ref={sidebarRef} style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '250px', zIndex: 1050 }}>
            <Sidebar isVisible={true} onMenuClick={() => setIsSidebarVisible(false)} />
          </div>
        </>
      )}

      <div className="dashboard-wrapper">
        {/* Left Panel */}
        <div className="left-panel">
          <div className="search-row desktop-visible">
            <div className="search-input">
              <Search size={18} />
              <input type="text" placeholder="Search" />
            </div>

            <div className="user-controls">
              {/* <div className="emoji-avatar">
                <span role="img" aria-label="curly-hair"></span>
              </div>
              <button className="icon-btn">
                <Plus size={20} />
              </button> */}
              <button className="icon-btn">
                <Bell size={20} />
              </button>
            </div>
          </div>

          <div className="dashboard-title">
            <h2 style={{ color: '#374151' }}>Dashboard</h2>
            <span className="time-period">This Week ▾</span>
          </div>

          <div className="anatomy-health-wrapper">
            <AnatomySection />
            <HealthStatusCards />
          </div>

          <span className="details-link">
            <MoveRight size={20} /> Details
          </span>

          <ActivityFeed />
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="user-controls desktop-visible">
            <div className="emoji-avatar">
              <span role="img" aria-label="curly-hair">👩🏻‍🦱</span>
            </div>
            <button className="icon-btn">
              <Plus size={20} />
            </button>
          </div>

          <Calendar />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
};

export default DashboardMainContent;
