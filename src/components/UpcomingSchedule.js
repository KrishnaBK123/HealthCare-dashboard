import React from 'react';
import '../styles/UpcomingSchedule.css';
import scheduleData from '../data/upcomingScheduleData';

const UpcomingSchedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">The Upcoming Schedule</h2>

      <div className="schedule-day">
        <h3 className="day-title">On Thursday</h3>
        <div className="appointments-row">
          {scheduleData.thursday.map((appointment, index) => (
            <div key={index} className="appointment-card">
              <div className="appointment-content">
                <div className="appointment-title">{appointment.title}</div>
                <div className="appointment-time">{appointment.time}</div>
              </div>
              <div className="appointment-icon">
                {appointment.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="schedule-day">
        <h3 className="day-title">On Saturday</h3>
        <div className="appointments-row">
          {scheduleData.saturday.map((appointment, index) => (
            <div key={index} className="appointment-card">
              <div className="appointment-content">
                <div className="appointment-title">{appointment.title}</div>
                <div className="appointment-time">{appointment.time}</div>
              </div>
              <div className="appointment-icon">
                {appointment.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
