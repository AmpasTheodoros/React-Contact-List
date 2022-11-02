import React from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  const contacts = [
    {
      avatarUrl: 'https://via.placeholder.com/150',
      name: "Jenny Han",
      email: "Jenny@gmail.com",
      age: 25,
    },
    {
      avatarUrl: 'https://via.placeholder.com/150',
      name: "Paul Pan",
      email: "Paul@gmail.com",
      age: 25,
    },
    {
      avatarUrl: 'https://via.placeholder.com/150',
      name: "Kiky Adr",
      email: "Kiky@gmail.com",
      age: 25,
    },
    
  ]
  return (
    <div>
      {contacts.map((contact, index)=>{
        return (
          <ContactCard
            key={index}
            avatarUrl={contact.avatarUrl }     
            name={contact.name} 
            email={contact.email}
            age={contact.age}
          />
        )
      })}
    </div>
  );
}

export default App;
