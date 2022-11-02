import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  // const contacts = [
  //   {
  //     avatarUrl: 'https://via.placeholder.com/150',
  //     name: "Jenny Han",
  //     email: "Jenny@gmail.com",
  //     age: 25,
  //   },
  //   {
  //     avatarUrl: 'https://via.placeholder.com/150',
  //     name: "Paul Pan",
  //     email: "Paul@gmail.com",
  //     age: 25,
  //   },
  //   {
  //     avatarUrl: 'https://via.placeholder.com/150',
  //     name: "Kiky Adr",
  //     email: "Kiky@gmail.com",
  //     age: 25,
  //   },
  // ];

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
      setResults(data.results)
    });
  }, [])

  return (
    <div>
      {results.map((results, index)=>{
        return (
          <ContactCard
            key={index}
            avatarUrl={results.picture.large }     
            name={results.name.first} 
            email={results.email}
            age={results.dob.age}
          />
        )
      })}
    </div>
  );
}

export default App;
