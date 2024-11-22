import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";

const SearchForm = () => {
  let [search, setSearch] = useState("shubham0419");
  let [data, setData] = useState({});

  const getUser = async () => {
    let data = await axios.get(`https://api.github.com/users/${search}`);
    setData(data.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="flex gap-2 justify-end px-5">
        <input type="text" className="border-2 rounded-md" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => {getUser()}}>Search</button>
      </div>
      <Profile userData={data}/>
    </>
  );
};

export default SearchForm;
