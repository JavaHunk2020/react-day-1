import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChangePassword() {
    const baseURI="http://localhost:4206/v1";

    const navigate = useNavigate();

    const [newPassword, setNewPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    
    const updatePassword= (event)=> {
      //Reading value from text field 
      let value=event.target.value;
      setNewPassword(value);
    }
  
    const updateConfirmPassword= (event)=> {
      //Reading value from text field 
      let value=event.target.value;
      setConfirmPassword(value);
    }
  
    const changePassword=(event)=> {
        axios.put(`${baseURI}/change/password`,{newPassword:newPassword,confirmPassword:confirmPassword,email:localStorage.getItem('email'),code:localStorage.getItem('code')}).then(res => {
          if(res.data.code==='100'){
              localStorage.removeItem('code');
              localStorage.removeItem('email');
              localStorage.setItem('emessage',"You password has been reset succesfully!");
              navigate('/login');
          } else{
              //setErrorMessage('Something went wrong!');
          }
          
        }).catch((error)=>{
           // setErrorMessage('Something went wrong!');
        });
    
        event.preventDefault();
    }
  
   //JSX - JavaScript XML  - class -> className
  return (
    <div>
       <header className="CHeader">
       </header>
       <div className="container">
           <h2>Change Reset Password  Page!!!!!!!!!!!</h2>
           <img id="img1" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/6434/6434880.png"/>
       <img id="img2" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <img id="img3" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/6434/6434880.png"/>
       <hr/>
       <br/>
            <div className="form-group">
                  <label style={{fontWeight:"bold"}}>New Password</label>
                  <input  type='text' onChange={updatePassword}  name="newPassword" className="form-control" style={{width:"50%"}}/>
            </div>
             <div className="form-group">
                <label style={{fontWeight:"bold"}}>Confirm Password</label>
                      <input  onChange={updateConfirmPassword}   type='text'  name="confirmPassword" className="form-control" style={{width:"50%"}}/>
                </div>
           
            <div className="form-group">
             <br/>  
                <button onClick={changePassword}  type="button"  className="btn btn-warning">Change Password!</button>
            
            </div>
       
       </div>
     
    </div>
  );
}

export default ChangePassword;
