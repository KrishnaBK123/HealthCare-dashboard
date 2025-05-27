import React from 'react';
import '../styles/HealthStatusCard.css';

// Importing images from assets
import lungsIcon from '../assets/lungs.png';
import teethIcon from '../assets/teeth.png';
import boneIcon from '../assets/bone.png';

const HealthStatusCards = () => {
  return (
    <div className="health-status-container">
      <div className="health-card">
        <div className="card-header">
          <div className="icon-container">
            <img src={lungsIcon} alt="Lungs" className="organ-icon" />
          </div>
          <h3 className="organ-name">Lungs</h3>
        </div>
        <div className="card-details">
          <p className="date-text">Date: 26 Oct 2021</p>
          <div className="progress-bar">
            <div className="progress-fill red" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      <div className="health-card">
        <div className="card-header">
          <div className="icon-container">
            <img src={teethIcon} alt="Teeth" className="organ-icon" />
          </div>
          <h3 className="organ-name">Teeth</h3>
        </div>
        <div className="card-details">
          <p className="date-text">Date: 26 Oct 2021</p>
          <div className="progress-bar">
            <div className="progress-fill green" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      <div className="health-card">
        <div className="card-header">
          <div className="icon-container">
            <img src={boneIcon} alt="Bone" className="organ-icon" />
          </div>
          <h3 className="organ-name">Bone</h3>
        </div>
        <div className="card-details">
          <p className="date-text">Date: 26 Oct 2021</p>
          <div className="progress-bar">
            <div className="progress-fill orange" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthStatusCards;
