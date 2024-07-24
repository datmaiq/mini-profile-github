import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (!userResponse.ok) {
        throw new Error("User not found");
      }
      navigate(`/profile/${username}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="form-content">
          <div className="text-center">
            <h1 className="title">Search GitHub Username</h1>
            <p className="subtitle">Enter a GitHub username to view profile.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="username" className="label">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="input"
                    value={username}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="error">{error}</p>}
              </div>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
          <p className="links">
            <a
              className="link"
              href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View Github
            </a>
            <a className="link" href="https://www.linkedin.com/in/datmaiq/">
              Contact us!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
