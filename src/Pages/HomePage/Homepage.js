import React from "react";
import "./Homepage.css";
import { FaUserCircle } from "react-icons/fa";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="title">
        <span>O(1)</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Profiles" />
      </div>
      <div className="profile-icon">
        <FaUserCircle size={32} />
      </div>
    </div>
  );
}

export default HomePage;
