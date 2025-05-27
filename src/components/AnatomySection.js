// import React, { useState } from 'react';
// import '../styles/Anatomy.css';
// import { ZoomIn, Phone } from 'lucide-react';
// import bodyImage from '../assets/body.webp'; // 👈 Correct way to import

// const AnatomyViewer = () => {
//   const [zoomLevel, setZoomLevel] = useState(50);
  
//   const handleZoomChange = (e) => {
//     setZoomLevel(e.target.value);
//   };
  
//   return (
//     <div className="anatomy-viewer-container">
//       <div className="anatomy-image-container">
//         <img 
//           src={bodyImage} // 👈 use the imported image here
//           alt="Human anatomy model" 
//           className="anatomy-image"
//           style={{ transform: `scale(${0.8 + (zoomLevel / 100) * 0.4})` }}
//         />
        
//         <div className="zoom-button">
//           <ZoomIn size={20} color="#555" />
//         </div>
        
//         <div className="health-button healthy-heart">
//           <span className="heart-icon">❤️</span>
//           <span>Healthy Heart</span>
//         </div>
        
//         <div className="health-button healthy-leg">
//           <Phone size={16} />
//           <span>Healthy Leg</span>
//         </div>
//       </div>
      
//       <div className="zoom-control">
//         <input 
//           type="range" 
//           min="0" 
//           max="100" 
//           value={zoomLevel} 
//           onChange={handleZoomChange} 
//           className="zoom-slider"
//         />
//         <div className="zoom-handle"></div>
//       </div>
//     </div>
//   );
// };

// export default AnatomyViewer;



import React from 'react';
import '../styles/Anatomy.css';
import anatomyImage from '../assets/body.webp';
import { ZoomIn } from 'lucide-react';

const AnatomyViewer = () => {
  return (
    <div className="anatomy-viewer-container">
    <div className="scanner-wrapper">
      <div className="scanner-container">
        <img src={anatomyImage} alt="Anatomy Model" className="anatomy-img" />
         <div className="zoom-icon">
          <ZoomIn size={20} />
        </div>

        <div className="health-tag heart">
          <span className="icon">❤️</span>
          <span>Healthy Heart</span>
        </div>

        <div className="health-tag leg">
          <span className="icon">⚡</span>
          <span>Healthy Leg</span>
        </div>

        {/* Scan boxes */}
        <div className="scan-box heart-scan">
          <div className="scan-corners"></div>
        </div>

        <div className="scan-box leg-scan">
          <div className="scan-corners"></div>
        </div>

       <div className="arc-shape"></div>
          <div className="arc-icon">
          <div className="inner-circle"></div>
      </div>

      </div>
  </div>
  </div>
  );
};

export default AnatomyViewer;
