import React,{ useState,ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () =>{

    const navigate = useNavigate();

    const [signupData,setSignupData]=useState({username:'',password:'',email:''});

    //General method to update the fields
    const updateFormData = (event)=> {
          const {name,value}= event.target;
          setSignupData({...signupData,[name]:value});
    }

    const submitData = (event)=>{
          event.preventDefault();
          console.log(signupData);  
    }


    return (<div>
        <header className="SHeader">
        </header>
        <div className="container">
            <h2>Signup Page!!!!!!!!!!!</h2>
            <img id="img1" style={{height: "120px"}} src="https://tse2.mm.bing.net/th?id=OIP.kKIoNZb1w8VL4H0aDiF5uwHaHs&pid=Api&P=0&h=180"/>
        <img id="img2" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
        <img id="img3" style={{height: "120px"}} src="https://tse2.mm.bing.net/th?id=OIP.kKIoNZb1w8VL4H0aDiF5uwHaHs&pid=Api&P=0&h=180"/>
        <hr/>
          <form onSubmit={submitData}>
             <div className="form-group">
                   <label style={{fontWeight:"bold"}}>Username</label>
                   <input  onChange={updateFormData}  type='text'  name="username" className="form-control" style={{width:"50%"}}/>
             </div>
              <br/>
             <div className="form-group">
             <label style={{fontWeight:"bold"}}>Password</label>
                   <input onChange={updateFormData}  type='password' name="password" className="form-control" style={{width:"50%"}}/>
             </div>

             <div className="form-group">
             <label style={{fontWeight:"bold"}}>Email</label>
                   <input  onChange={updateFormData} type='email' name="email" className="form-control" style={{width:"50%"}}/>
             </div>
             <div className="form-group">
              <br/> 
             <button  type="submit"  className="btn btn-primary">Singup</button>
             <button id="tclear"   type="reset"  className="btn btn-info mx-2">Clear</button>
             
             <button onClick={()=>navigate('/login')}  type="button"  className="btn btn-danger mx-2">Login</button>
 
             </div>
          </form>
        
        </div>
      
     </div>);
}


export default Signup;