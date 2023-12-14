import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChangePassword() {

  
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
                  <input  type='text'  name="newPassword" className="form-control" style={{width:"50%"}}/>
            </div>
             <div className="form-group">
                <label style={{fontWeight:"bold"}}>Confirm Password</label>
                      <input   type='text'  name="code" className="form-control" style={{width:"50%"}}/>
                </div>
           
            <div className="form-group">
             <br/>  
                <button  type="button"  className="btn btn-warning">Change Password!</button>
            
            </div>
       
       </div>
     
    </div>
  );
}

export default ChangePassword;
