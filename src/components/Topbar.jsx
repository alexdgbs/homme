import React from 'react';

const Topbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="topbar">
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Topbar;

