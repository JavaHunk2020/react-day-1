import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    
  const navigate = useNavigate();
  
  const [inputData, setInputData]=useState({username:'',password:''});

  //errorMessage = {message:'Oh!'}
  const [errorMessage,setErrorMessage]=useState({message:'Oh!'});

   const setUsername= (event)=> {
            //Reading value from text field 
            let value=event.target.value;
            console.log("value  = "+value);
            setInputData({...inputData, username:value});
   }

   const clearText=()=>{
         setInputData({username:'',password:''});
         setErrorMessage({message:''});
   }

   const setPassword= (event)=>{
    //Reading value from text field 
    let value=event.target.value;
    console.log("value  = "+value);
    setInputData({...inputData, password:value});
}
 
  const processData=(event)=> {
      event.preventDefault();
      console.log("username = "+inputData.username);
      console.log("password = "+inputData.password);
      if(inputData.username=='Ameya' && inputData.password=='test'){
        setErrorMessage({message:'Username and password are correct!!!!!!!!!!'});
      }else{
        setErrorMessage({message:'Sorry Username and password are not correct!!!!!!!!!!'});
      }
      console.log(inputData);
      //API Call ->> 
  }

   const callFake = ()=>{
         alert("Hey I am not fake!!!!!!!!!!");
         console.log(this);  ///window
         document.getElementById("tclear").innerHTML="Hey I am changed now";
   };
         

   //JSX - JavaScript XML  - class -> className
  return (
    <div>
       <header className="CHeader">
       </header>
       <div className="container">
           <h2>Login Page!!!!!!!!!!!</h2>
           <img id="img1" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <img id="img2" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <img id="img3" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <hr/>
       <span className="Message">{errorMessage.message}</span>

         <form onSubmit={processData}>
            <div className="form-group">
                  <label style={{fontWeight:"bold"}}>Username</label>
                  <input  value={inputData.username} type='text' onChange={setUsername}  name="username" className="form-control" style={{width:"50%"}}/>
            </div>
             <br/>
            <div className="form-group">
                  <input value={inputData.password} type='password' onChange={setPassword} name="password" className="form-control" style={{width:"50%"}}/>
            </div>
            <div className="form-group">
             <br/> 
            <button  type="submit"  className="btn btn-primary">Login</button>
            <button id="tclear" onClick={clearText}  type="reset"  className="btn btn-info mx-2">Clear</button>
            <button  onClick={callFake} type="button"  className="btn btn-warning mx-2">Fake!!!!</button>

            <button onClick={()=>{navigate('/signup')}}  type="button"  className="btn btn-danger mx-2">Signup</button>

            </div>
         </form>
       
       </div>
     
    </div>
  );
}

export default Login;
