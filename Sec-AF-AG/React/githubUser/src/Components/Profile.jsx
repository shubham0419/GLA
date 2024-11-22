import { Building2, MapPin } from "lucide-react";
import React from "react";
import Repos from "./Repos";

const Profile = ({ userData }) => {
  return (
    <div className="px-5 flex gap-2">
      <div className="max-w-[30%]">
        <img
          src={userData.avatar_url}
          alt="profile.png"
          className="h-72 w-72 rounded-full border border-black"
        />
        <h2 className="text-xl font-bold">{userData.name}</h2>
        <p>{userData.bio}</p>
        <p>{userData.followers} followers , {userData.following} following</p>
        {userData.company && <p> <Building2/>{userData.company}</p>}
        {userData.location && <p><MapPin/> {userData.location}</p>}
      </div>
      <div className="border w-full mt-4 p-4 rounded-md shadow-inner">
        <h2 className="text-2xl font-bold">Repositories</h2>
        <Repos repoUrl={userData.repos_url}/>
      </div>
    </div>
  );
};

export default Profile;
