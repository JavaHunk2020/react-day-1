import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HelloEmail from './HelloEmail';

function Dashbaord() {

    const baseURI="http://localhost:4206/v1";
    const navigate = useNavigate();

    const [email,setEmail]=useState('');

    const [signups,setSignups]=useState([]);

    //WHEN WE WANTED TO PERFORM SOME ACTION AT THE TIME OF LOADING PAGE
    useEffect(()=> {
        let userToken=localStorage.getItem('userToken');
        const config = {
            headers: { Authorization: `Bearer ${userToken}` }
        };
        axios.get(`${baseURI}/signups`,config).then(res => {
            setSignups(res.data);
          }).catch((error)=>{
                localStorage.setItem("emessage","Sorry you are not authorized to access the dashboard");
                navigate('/login');
          });
      },[]);
    
    useEffect(()=> {
          let email = localStorage.getItem('email');
          setEmail(email);
      });

      const logout = ()=>{
        localStorage.clear('userToken');
        localStorage.clear('email');
        navigate('/login');
      }
  

   //JSX - JavaScript XML  - class -> className
  return (
    <div>
       <header className="CHeader">
       </header>
       <div className="container">
           <h2>Dashboard Page!!!!!!!!!!!</h2>

           <img id="img1" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <img id="img2" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <img id="img3" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
         <HelloEmail/>

         <img style={{height:"50px"}} onClick={logout} src="https://tse2.mm.bing.net/th?id=OIP.s3aN_mL8rWu0uyCEbKeNuwHaHa&pid=Api&P=0&h=220"/> 

       <hr/>
       <h2>Signups</h2>
 
  <table className="table table-bordered">
    <thead>
     
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>DOE</th>
      </tr>
    </thead>
    <tbody>
      {
    
      signups.map((signup,index)=>(  
      <tr key={index}>
        <td>{signup.name}</td>
        <td>{signup.email}</td>
        <td>{signup.role}</td>
        <td>{signup.doe}</td>
      </tr>
      ))

     }
      
    </tbody>
  </table>
                
       </div>
     
    </div>
  );
}

export default Dashbaord;
