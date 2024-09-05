import React, { useState } from 'react';
import './Switch.css'; // Import the CSS for styling

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="switch-container">
      <div
        className={`switch ${isChecked ? 'switch--on' : 'switch--off'}`}
        onClick={toggleSwitch}
      >
        <div className="switch-circle">
          <div className="icon-wrapper">
            <span role="img" aria-label="emoji" className={`icon ${isChecked ? 'icon--happy' : 'icon--sad'}`}>
              {isChecked ? '😄' : '😟'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
