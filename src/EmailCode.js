import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmailCode() {

  const baseURI="http://localhost:4206/v1";

  const navigate = useNavigate();

  const [showCodeText, setShowCodeText]=useState(false);
  const [email, setEmail]=useState('');
  const [code, setCode]=useState('');
  const [errorMessage, setErrorMessage]=useState('');

  
  const updateEmail= (event)=> {
    //Reading value from text field 
    let value=event.target.value;
    setEmail(value);
  }

  const updateCode= (event)=> {
    //Reading value from text field 
    let value=event.target.value;
    setCode(value);
  }

  const validateCodeEmail=(event)=>{
    const queryData=`?email=${email}&code=${code}`;
    axios.get(`${baseURI}/verify/email/code${queryData}`).then(res => {
      if(res.data.status==='success'){
          localStorage.setItem('code',code);
          localStorage.setItem('email',email);
          navigate('/resetPassword');
      } else{
          setErrorMessage('Sorry your code is not valid');
      }
      
    }).catch((error)=>{
         
    });


    event.preventDefault();
  }

  const generateCode=(event)=>{
       setErrorMessage('');
        //MAKE A REST API CALL TO VALIDATE THE EMAIL AND GENERATE CODE AND SEND BACK OVER HERE
        //verifyemail/{email}
        axios.get(`${baseURI}/verifyemail/${email}`).then(res => {
            if(res.data.status==='success'){
                setShowCodeText(true);
            } else{
                setErrorMessage('Sorry your email does not exist in our database');
            }
            
          }).catch((error)=>{
               
          });
        event.preventDefault();
  };
   //JSX - JavaScript XML  - class -> className
  return (
    <div>
       <header className="CHeader">
       </header>
       <div className="container">
           <h2>Email Password Reset Page!!!!!!!!!!!</h2>
           <img id="img1" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/6434/6434880.png"/>
       <img id="img2" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <img id="img3" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/6434/6434880.png"/>
       <hr/>
       <span className="RedMessage">{errorMessage}</span>
       <br/>
         <form onSubmit={generateCode}>
            <div className="form-group">
                  <label style={{fontWeight:"bold"}}>Email</label>
                  <input  onChange={updateEmail}  type='text'  name="email" className="form-control" style={{width:"50%"}}/>
            </div>
             <br/>

            {
                showCodeText && (<div className="form-group">
                <label style={{fontWeight:"bold"}}>Code</label>
                      <input   onChange={updateCode} type='text'  name="code" className="form-control" style={{width:"50%"}}/>
                </div>)
            } 
           
            <div className="form-group">
             <br/> 
             {
                showCodeText ?(<button  type="button" onClick={validateCodeEmail}  className="btn btn-success">Validate Code</button>):(<button  type="submit"  className="btn btn-primary">Send Code</button>)
             }
            
            </div>
         </form>
       
       </div>
     
    </div>
  );
}

export default EmailCode;
