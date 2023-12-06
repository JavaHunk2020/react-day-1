import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./Login";
import Signup from "./Signup";


function AppRouter(){

    return (
         <BrowserRouter>
               <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='login' element={<App/>}/>
                    <Route path='/signup' element={<Signup/>}/>
               </Routes>
         </BrowserRouter>     
    );
}

export default AppRouter;