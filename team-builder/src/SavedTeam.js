import React from "react";

const Team = props => {
  console.log(props.teamMember)
  return (
    <div className="team-list">
      {props.teamMember.map(member => (
           <div className="team" key={member.id}>
              <h2>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
          </div>
      ))}
      </div>
  );
};

export default Team;

