import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Login";
import Signup from "./Signup";
import Dashbaord from "./Dashboard";
import EmailCode from "./EmailCode";


function AppRouter(){

    return (
         <BrowserRouter>
               <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='login' element={<App/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/dashboard' element={<Dashbaord/>}/>
                    <Route path='/emailCode' element={<EmailCode/>}/>
                    
               </Routes>
         </BrowserRouter>     
    );
}

export default AppRouter;