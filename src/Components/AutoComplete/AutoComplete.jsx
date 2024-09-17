import { useState, useEffect } from "react";

export default function AutoComplete() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=1000")
      .then((res) => res.json())
      .then((data) => setSuggestions(data.users));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">AutoComplete</h1>

      <div className="flex flex-wrap gap-5 justify-evenly">
      <div>
        <input
          className="border-2 border-blue-500 p-2 rounded-xl  m-auto mt-5"
          list="suggestions"
          type="text"
          name="suggestion"
          id="suggestion"
          placeholder="First Name"
        />
        <datalist id="suggestions">
          {suggestions.map((suggestion) => (
            <option key={suggestion.id} value={suggestion.firstName} />
          ))}
        </datalist>
      </div>
      <div>
        <input
          className="border-2 border-blue-500 p-2 rounded-xl m-auto mt-5"
          list="suggestions"
          type="text"
          name="suggestion"
          id="suggestion"
          placeholder="Last Name"
        />
        <datalist id="suggestions">
          {suggestions.map((suggestion) => (
            <option key={suggestion.id} value={suggestion.lastName} />
          ))}
        </datalist>
      </div>
      </div>
    </div>
  );
}
