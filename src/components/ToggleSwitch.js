import React, { useState } from 'react';
import './Switch.css'; // Import the CSS for styling

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="threeD-switch-container">
        <div
          className={`threeD-switch ${isChecked ? 'threeD-switch--on' : 'threeD-switch--off'}`}
          onClick={toggleSwitch}
        >
          <div className="threeD-switch-circle">
            <div className="emoji-wrapper">
              <span
                role="img"
                aria-label="emoji"
                className={`emoji-ball ${isChecked ? 'emoji-ball--happy' : 'emoji-ball--sad'}`}
              >
                {isChecked ? '😄' : '😟'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ToggleSwitch;
