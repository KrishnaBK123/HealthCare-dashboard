import React from 'react';
import '../styles/ActivityFeed.css';
import weeklyActivityData from '../data/weeklyActivityData';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>Activity</h2>
        <span className="appointment-count">3 appointment on this week</span>
      </div>
      
      <div className="activity-chart">
        {weeklyActivityData.map((dayData, index) => (
          <div key={index} className="day-column">
            <div className="bars-container">
              {dayData.bars.map((bar, barIndex) => (
                <div 
                  key={barIndex} 
                  className="activity-bar" 
                  style={{ 
                    height: `${bar.height}px`,
                    backgroundColor: bar.color
                  }}
                ></div>
              ))}
            </div>
            <div className="day-label">{dayData.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
