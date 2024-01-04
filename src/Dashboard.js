import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HelloEmail from './HelloEmail';
import { API_SERVER } from './config/constant';

function Dashbaord() {

    const navigate = useNavigate();

    const [email,setEmail]=useState('');

    const [nmessage,setNmessage]=useState('');
    

    const [signups,setSignups]=useState([]);

    //WHEN WE WANTED TO PERFORM SOME ACTION AT THE TIME OF LOADING PAGE
    useEffect(()=> {
         fetchDashboard();
      },[]);
    
    useEffect(()=> {
          let email = localStorage.getItem('email');
          setEmail(email);
      },[email]);

      const logout = ()=>{
        localStorage.clear('userToken');
        localStorage.clear('email');
        navigate('/login');
      }


      const fetchDashboard = ()=>{
        let userToken=localStorage.getItem('userToken');
        const config = {
            headers: { Authorization: `Bearer ${userToken}` }
        };
        axios.get(`${API_SERVER}/signups`,config).then(res => {
            setSignups(res.data);
          }).catch((error)=>{
                localStorage.setItem("emessage","Sorry you are not authorized to access the dashboard");
                navigate('/login');
          });
      }


      const updateSelectedRole=(signup)=> {
            console.log(signup); 
            //I am selecting drop down
            let crole =document.getElementById(signup.email).value;
            const request={email:signup.email,role:crole};
            console.log(request);
            let userToken=localStorage.getItem('userToken');
            const config = {
                 headers: { Authorization: `Bearer ${userToken}` }
            };
            axios.patch(`${API_SERVER}/customers/role`,request,config).then(res => {
                 setNmessage(`!!!!!!!!!!!Role has been updated - ${signup.email}`);
                 fetchDashboard();
            }).catch((error)=>{
                  navigate('/login');
            });
      }


      const deleteSignup =(email)=> {

        let userToken=localStorage.getItem('userToken');
        const config = {
             headers: { Authorization: `Bearer ${userToken}` }
        };

        axios.delete(`${API_SERVER}/signups/${email}`,config).then(res => {
                 setNmessage(`!!!!!!!!!!!data is deleted - ${email}`);
                 fetchDashboard();
            }).catch((error)=>{
                setNmessage(`!!!!!!!!!!!data could not deleted - ${email}`);
            });
      }


  
      const myStyle = {
        color: 'blue',
        fontSize: '16px',
        // Add more CSS properties as needed
      };

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
       <span className="Message">{nmessage}</span>

  <table className="table table-striped">
    <thead>
     
      <tr className="headerColor">
        <th>Name</th>
        <th>Email</th>
        <th>Current Role</th>
        <th>Update Role</th>
        <th>DOE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {
    
      signups.map((signup,index)=>(  

      <tr key={index} style={{backgroundColor:"red"}}>
        <td>{signup.name}</td>
        <td>{signup.email}</td>
        <td><b>{signup.role}</b></td>
        <td>
          <select value={signup.role} id={signup.email} onChange={()=>{updateSelectedRole(signup);}} className='form-control' style={{"backgroundColor":"#e4f1f7"}}>
             <option>CUSTOMER</option>
             <option>EMPLOYEE</option>
             <option>ADMIN</option>
          </select>
        </td>
        <td><b>{signup.doe}</b></td>
        <td>
        <button onClick={()=>deleteSignup(signup.email)} type="button"  className="btn btn-danger btn-sm">DELETE</button>
           &nbsp; &nbsp;
             <button  type="button"  className="btn btn-success btn-sm">History</button>

        </td>
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
