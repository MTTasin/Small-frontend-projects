import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
export default function GithubProfileFinder() {
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState({
    username: "",
    name: "",
    avatar_url: "",
    public_repos: "",
    html_url: "",
    location: "",
  });

  useEffect(() => {
      fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
      
  }, [  username]);



  function handleSearch(e) {
    
    setSearch(e.target.value);
}


  function handleSubmit(e) {
    setUsername(search);
  }

  return (
    <div>
      <div className="flex justify-center my-5">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Enter username"
          className="w-1/3 border-2 border-gray-300 p-2 rounded-l-xl"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-xl"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="flex justify-center">
        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              height="96"
              src={profile.avatar_url} 
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {profile.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Repo count : {profile.public_repos}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              From : {profile.location}
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href={profile.html_url}
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Check account
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
