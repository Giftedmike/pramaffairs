import React from "react";
import "./sideBar.css";

const SideBar = () => {
  return (
    <div>
      <div className="social-sidebar">
        <a href="#banner" rel="noopener noreferrer" className="social youtube">
          <i className="fas fa-home"></i>
        </a>
        <a href="#samples" rel="noopener noreferrer" className="social facebook">
          <i className="fas fa-briefcase"></i>
        </a>
        <a href="#pricing" rel="noopener noreferrer" className="social instagram">
          <i className="fas fa-hand-holding-dollar"></i>
        </a>
        <a href="#contact" rel="noopener noreferrer" className="social twitter">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
