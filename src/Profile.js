import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

const Profile1 = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);

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
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUserData();
  }, [username]);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={userData?.avatar_url}
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  alt="profile"
                />
                <h1 className="text-xl font-bold">{userData?.name}</h1>
                <p className="text-gray-700">{userData?.location}</p>
                <div className="flex space-x-4 mt-4">
                  <div className="text-center">
                    <p className="text-lg font-bold">{userData?.followers}</p>
                    <p className="text-gray-600">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">{userData?.following}</p>
                    <p className="text-gray-600">Following</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href={userData?.html_url}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    View More
                  </a>
                  <a
                    href="#"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">{userData?.bio}</p>

              <div className="flex justify-center items-center gap-6 my-6">
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds LinkedIn"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds YouTube"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    />
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds Facebook"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="h-6"
                  >
                    <path
                      fill="currentColor"
                      d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds Instagram"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zm-48.5 224c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.1 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.1-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.1-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.1 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
              </div>

              <h2 className="text-xl font-bold mb-4">Repositories</h2>
              <ul>
                {reposData.map((repo) => (
                  <li key={repo.id} className="mb-2">
                    <div className="repo-info">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {repo.name}
                      </a>
                      <p className="text-gray-600 text-sm">
                        {repo.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {userData?.location}
                  </h3>
                  <p className="text-gray-600">XYZ Company</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Web Developer</h3>
                  <p className="text-gray-600">ABC Company</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Intern</h3>
                  <p className="text-gray-600">DEF Company</p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper.
                  </p>
                </div>
              </div> */}
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
