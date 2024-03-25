import React from "react";
import "./Homepage.css";
import { FaUserCircle } from "react-icons/fa";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="title">
        <span>&lt;/&gt; AlgoAlley</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="profile-icon">
        <FaUserCircle size={32} />
      </div>
    </div>
  );
}

export default HomePage;
