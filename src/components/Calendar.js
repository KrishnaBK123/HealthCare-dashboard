import React from 'react';
import '../styles/Calender.css';
import { month, days, scheduledAppointments } from '../data/calendarData';
import {MoveRight ,  MoveLeft } from 'lucide-react';

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>{month}</h2>
        <div className="navigation-buttons">
          <button className="nav-button prev"> <MoveLeft size={20} /></button>
          <button className="nav-button next"> <MoveRight size={20} /></button>
        </div>
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day 
              ${day.day === 'Sun' ? 'sunday' : ''} 
              ${day.day === 'Tues' ? 'tuesday-highlight' : ''}`}
          >
            <div className="day-name">{day.day}</div>
            <div className="day-number">{day.date}</div>
            <div className="appointments-list">
              {day.appointments.map((time, timeIndex) => {
                const isHighlighted =
                 
                  (day.day === 'Tues' && time === '09:00') ||
                  (day.day === 'Thurs' && time === '11:00') ||
                  ((day.day === 'Sat' && time === '12:00') || (day.day === 'Sun' && time === '09:00'));

                return (
                  <div
                    key={timeIndex}
                    className={`appointment-timeA ${isHighlighted ? 'highlighted' : ''}`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="scheduled-appointments">
        {scheduledAppointments.map((appointment, index) => (
          <div key={index} className={`appointment-card ${appointment.color}`}>
            
            <div className="appointment-details">
              <div className="appointment-header">
                <div className="appointment-type">{appointment.type}</div>
                <div className="appointment-icon">{appointment.icon}</div>
              </div>
              
                <div className="appointment-meta">
                <div className="appointment-timeB">{appointment.time}</div>
                <div className="appointment-doctor">{appointment.doctor}</div>
              </div>
            </div>
            
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
