import React from "react";
import { FaUser } from "react-icons/fa";
import defaultProfileImage from "./defaultProfileImage.png";
import defaultRatingGraph from "./defaultRatingGraph.jpg";
import "./MyProfiles.css"; // Import the CSS file

const Profiles = () => {
  const profiles = [
    {
      handle: "john_doe",
      profileImage: defaultProfileImage,
      level: "Pro",
      highestRating: 1800,
      currentRating: 1600,
      username: "John Doe",
      ratingGraph: defaultRatingGraph,
    },
    {
      handle: "jane_smith",
      profileImage: defaultProfileImage,
      level: "Expert",
      highestRating: 2000,
      currentRating: 1900,
      username: "Jane Smith",
      ratingGraph: defaultRatingGraph,
    },
    {
      handle: "mike_johnson",
      profileImage: defaultProfileImage,
      level: "Master",
      highestRating: 2400,
      currentRating: 2300,
      username: "Mike Johnson",
      ratingGraph: defaultRatingGraph,
    },
  ];

  return (
    <div className="MyProfiles">
      <div className="profiles-container">
        {profiles.map((profile) => (
          <div key={profile.handle} className="profile-card">
            <div className="profile-header">
              <h3>{profile.handle}</h3>
              <a
                href={`https://example.com/${profile.handle}`}
                className="profile-icon"
              >
                <FaUser size={20} />
              </a>
            </div>
            <img
              src={profile.profileImage}
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-details">
              <p>
                Level: <strong>{profile.level}</strong>
              </p>
              <p>
                Highest Rating: <strong>{profile.highestRating}</strong>
              </p>
              <p>
                Current Rating: <strong>{profile.currentRating}</strong>
              </p>
              <p>
                Username: <strong>{profile.username}</strong>
              </p>
            </div>
            <img
              src={profile.ratingGraph}
              alt="Rating Graph"
              className="rating-graph"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
