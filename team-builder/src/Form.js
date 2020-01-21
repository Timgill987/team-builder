import React, { useState } from "react";

const NewMemberForm = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(teamMember);
    setTeamMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter Member name"
        name="name"
        onChange={handleChanges}
        value={teamMember.name}
      />

      <label htmlFor="email">email</label>
      <input
        id="email"
        type="text"
        placeholder="Enter Member email"
        name="email"
        onChange={handleChanges}
        value={teamMember.email}
      />
      <label htmlFor="team-role">Team role</label>
      <input
        id="role"
        type="text"
        placeholder="Enter Team role"
        name="role"
        onChange={handleChanges}
        value={teamMember.role}
      />

      <button type="submit">Add Member</button>
    </form>
  );
};

export default NewMemberForm;