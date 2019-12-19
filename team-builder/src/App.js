import React, {useState} from 'react';
import ReactDOM from "react-dom";
import NewMemberForm from "./Form"
import Team from "./SavedTeam";
import './App.css';
console.log(App)
function App() {
  const [teamMember, setTeamMember] = useState([
    
    {
      id: 1,
      name: "Mario",
      email: "redplumber@gmail.com",
      role: "plumber"
        
    },
    {
      id: 2,
      name: "Pikachu",
      email: "ilikeketchup@gmail.com",
      role: "Dangerous Electrical Component"
        
    } , 
    {
      id: 3,
      name: "Kirby",
      email: "pinkpit@gmail.com",
      role: "Jack of all trades"
        
    }
    
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
     <NewMemberForm addNewMember ={addNewMember}/>
     <Team teamMember={teamMember} />
    </div>
  );
}
export default App;