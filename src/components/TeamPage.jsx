import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";

const teamMembers = [
  { name: "Bonnie Ryan", role: "Owner", imgSrc: team1 },
  { name: "Bonnie Ryan", role: "Owner", imgSrc: team2 },
  { name: "Bonnie Ryan", role: "Owner", imgSrc: team3 },
  { name: "Bonnie Ryan", role: "Owner", imgSrc: team4 },
  { name: "Bonnie Ryan", role: "Owner", imgSrc: team5 },
  { name: "Bonnie Ryan", role: "Owner", imgSrc: team6 },
];

const TeamPage = () => {
  return (
    <section className="team-section px-[100px] py-[90px] ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="section-header mb-6">
              <h6 className="sub-title text-lg text-gray-500 mb-2">OUR TEAM</h6>
              <h2 className="title text-3xl font-bold">
                We're Waiting For You!
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="team-member text-center">
                <div className="img relative">
                  <div className="shape absolute inline-block bg-[#71B85F] w-[10rem] h-[10rem] bottom-0 rounded-full shadow-[0px_0px_0px_15px_rgba(113,184,95,0.3),0px_0px_0px_30px_rgba(113,184,95,0.3)] transition-all ease-linear duration-300 "></div>
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="inline-block max-w-[10rem] relative"
                  />
                </div>
                <div className="relative pt-[75px]">
                  <h4 className="title text-2xl leading-8 font-semibold mb-0">
                    {member.name}
                  </h4>
                  <p className="tmb-0 text-[#8d979f]">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
