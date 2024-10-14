import React from "react";

import { siteContents } from "../constants/sitecontent";
import ProfileCard from "./TeamCard";

const MeetTheTeam = () => {
  return (
    <div className='bg-black min-h-screen text-white flex flex-col items-center justify-evenly'>
        <h1 className='text-lightBlue text-2xl md:text-4xl  font-display my-6 md:my-0'>
        {siteContents.section.team.title}
      </h1>
      <div className='w-full flex flex-col md:flex-row justify-evenly items-center '>
      {siteContents.section.team.teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg bg-dark-gray transition-all duration-300 ease-in-out hover:translate-y-[-5px] p-4"
          >
            <ProfileCard
            name={member.name}
            title={member.role}
            institution={member.education}
            imageUrl={member.image}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MeetTheTeam;
