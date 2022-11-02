import React from 'react';
import './App.css';
import ContactCard from './ContactCard';


function App() {
  return (
    <div>
      <ContactCard
        avatarUrl='https://via.placeholder.com/150'      
        name='Jenny Han' 
        email='Jenny@gmail.com'
        age={25}
      />
      <ContactCard
        avatarUrl='https://via.placeholder.com/150'      
        name='Paul Pan' 
        email='Paul@gmail.com'
        age={25}
      />
      <ContactCard
        avatarUrl='https://via.placeholder.com/150'      
        name='Kiky Adr' 
        email='Kiky@gmail.com'
        age={25}
      />
    </div>
  );
}

export default App;
