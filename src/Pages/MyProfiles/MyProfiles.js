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
      noofcontests: 10,
      solvedproblems: "50",
    },
    {
      handle: "jane_smith",
      profileImage: defaultProfileImage,
      level: "Expert",
      highestRating: 2000,
      currentRating: 1900,
      username: "Jane Smith",
      ratingGraph: defaultRatingGraph,
      noofcontests: 10,
      solvedproblems: "50",
    },
    {
      handle: "mike_johnson",
      profileImage: defaultProfileImage,
      level: "Master",
      highestRating: 2400,
      currentRating: 2300,
      username: "Mike Johnson",
      ratingGraph: defaultRatingGraph,
      noofcontests: 10,
      solvedproblems: "50",
    },
  ];

  return (
    <div className="MyProfiles">
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
          <div className="profile-details-container">
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
          </div>
          <img
            src={profile.ratingGraph}
            alt="Rating Graph"
            className="rating-graph"
          />
          <div className="profile-details-container2">
            <p>
              No. of Contests: <strong>{profile.noofcontests}</strong>
            </p>
            <p>
              Solved Problems: <strong>{profile.solvedproblems}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
