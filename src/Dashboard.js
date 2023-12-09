import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HelloEmail from './HelloEmail';

function Dashbaord() {

    const navigate = useNavigate();

    const [email,setEmail]=useState('');

    /**useEffect(()=> {
        axios.get(`${baseURl}/signups`).then(res => {
            setTableData(res.data);
            //navigate('/auth');
          });
      });*/
    
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
       <h2>Bordered Table</h2>
  <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>            
  <table className="table table-bordered">
    <thead>
      <tr >
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
                
       </div>
     
    </div>
  );
}

export default Dashbaord;
