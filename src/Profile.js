import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

const Profile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!userResponse.ok) {
          throw new Error("User not found");
        }
        const userData = await userResponse.json();
        const reposResponse = await fetch(userData.repos_url);
        const reposData = await reposResponse.json();

        setUserData(userData);
        setReposData(reposData);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div className="profile-container">
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          {userData && (
            <div>
              <button onClick={() => navigate("/")}>Back</button>
              <h1>{userData.name}</h1>
              <p>{userData.bio}</p>
              <img src={userData.avatar_url} alt={userData.name} />
              <h2>Repositories</h2>
              <ul>
                {reposData.map((repo) => (
                  <li key={repo.id}>
                    <div className="repo-info">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.name}
                      </a>
                      <span className="repo-id">ID: {repo.id}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
