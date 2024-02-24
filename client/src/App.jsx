//import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";

import {Home} from "./pages/Home"; // Import your Home component or replace it with the correct component import.

import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Service} from "./pages/Service";

import NavBar from "./components/NavBar";
import{Error} from "./pages/Error";
import { Logout } from "./pages/Logout";


//Admin Control Pages
import { AdminLayout } from "./components/Layout/Admin-layout";
//admin add product route
import{AdminAddProducts} from "./pages/Admin-Add-New-Products";
import {AdminUsers} from "./pages/Admin-Users";
import {AdminUpdate} from "./pages/Admin-Update";

const App = () => {
  return (
    <div>
 
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />

        

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
       
        <Route path="/Service" element={<Service />} />
        
        
       
        <Route path="/Logout" element={<Logout />} />
        <Route path="*" element={<Error />} />

        <Route path="/admin" element={<AdminLayout/>}>
               <Route path="users" element={<AdminUsers/>}/>      
               <Route path="productsEditor" element={<AdminAddProducts/>}/>
               <Route path="users/:id/edit" element={<AdminUpdate/>}/>    
               </Route>
             



        
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
