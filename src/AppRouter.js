import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Login";
import Signup from "./Signup";
import Dashbaord from "./Dashboard";
import EmailCode from "./EmailCode";
import { AuthProvider } from "./service/auth.context.service";
import ChangePassword from "./ChangePassword";


function AppRouter(){

    return (
     <AuthProvider>
         <BrowserRouter>
               <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='login' element={<App/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/dashboard' element={<Dashbaord/>}/>
                    <Route path='/emailCode' element={<EmailCode/>}/>
                    <Route path='/resetPassword' element={<ChangePassword/>}/>
                    
               </Routes>
         </BrowserRouter>     
         </AuthProvider>
    );
}

export default AppRouter;