import './App.css';
import { useEffect, useState } from 'react';

function HelloEmail() {

    const [email,setEmail]=useState('');
    
    useEffect(()=> {
          let email = localStorage.getItem('email');
          setEmail(email);
      });


      return <h1 style={{color:"blue"}}>Hello!!!!! {email}!</h1>;
     
}

export default HelloEmail;