import React from "react";
import "./App.css";
import Greeting from "./Greeting";
import Card from "./Card";
import Button from "./Button";
import profilePics from "./assets/images/pic12.jpeg";
import Counter from "./Counter";
import Accordion from "./Accordion";
//import { useState } from "react";
//import { useFetch } from "./fetch";

function App() {
  // useFetch()

  // useState()
  // useEffect()
  // useRef()
  // useReduser()
  // useContext()
  // useMemo()

  //const [state, setState] = useState('Initial Value');
  // const [val, setVal] = useState("Helloo");
  // const [input, setInput] = useState("name");

  //console.log(state, val, input);
  const data = [
    {
      id: 1,
      pic: profilePics,
      name: "Markay",
      role: "FullStack Developer",
      hobby: "Listening to music",
      bio: "Music",
    },
    {
      id: 2,
      pic: profilePics,
      name: "Yomi",
      role: "Data Analyst",
      hobby: "Clubbing",
      bio: "Just be on motion",
    },
    {
      id: 3,
      pic: profilePics,
      name: "Bori",
      role: "AL/ML",
      hobby: "Making Research",
      bio: "A Machinary Engineer",
    },
    {
      id: 4,
      pic: profilePics,
      name: "Feranmi",
      role: "Backend Developer",
      hobby: "Listening to music",
      bio: "Passionate about solving real world problems",
    },
    {
      id: 5,
      pic: profilePics,
      name: "Mayowa",
      role: "Web Developer",
      hobby: "Reading",
      bio: "Passionate about building E-commence",
    },
    {
      id: 6,
      pic: profilePics,
      name: "Bright",
      role: "Frondend Developer",
      hobby: "Coding",
      bio: "Building beautiful user interfaces",
    },
  ];

  const techSkills = ["HTML", "CSS", "REACT", "JAVASCRIPT"];

  return (
    <div>
      <Button>Load Users</Button>

      <ol>
        {techSkills.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ol>

      <Counter />

      {/* {data.map((userCard) => (
        <Card
          key={userCard.id}
          pic={userCard.pic}
          name={userCard.name}
          role={userCard.role}
          hobby={userCard.hobby}
          bio={userCard.bio}
        /> 
      ))} */}

      {/* {data.map((user) => {
        return <Card key={user.id} name={user.name} pic={user.pic} {...user} />;
      })} */}

      <Accordion title="What is React" content="JavaScript library for UIs." />

      <Accordion
        title="What is JSX"
        content="A syntax extension for JavaScript."
      />

      <Button>Click Me</Button>
    </div>
  );
}

export default App;
