import { useState } from "react";
  
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';


export const Login =()=>{

 
  const [loginUser, setUser]=useState({

   
    "email":"",
    "password":"",
 });
 const navigate= useNavigate();

 const {storeTokenInLS}= useAuth();

 // handle the input information
  const handleInput=(e)=>{
 console.log(e);

 let name = e.target.name;
 let value = e.target.value;
 setUser({
  ...loginUser,
  //dynamic value name=phone=email=password
  [name]:value,

})
};
///handling for the form submission process
const handleSubmit=async(e)=>{
         e.preventDefault();
         //alert(user);
        console.log(loginUser);

//fronted connect with  database using nodejs and express

try {
  const response = await fetch(`http://localhost:3000/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginUser),
  });
    const res_data= await response.json();
    console.log("res from server", res_data.extraDetails);

  if (response.ok) {
    
     //console.log("res from server", res_data);
     //store the token in the localhost
     storeTokenInLS(res_data.token);

    toast.success("login successful");
    setUser({
  
      email: "",
      
      password: "",
    });
    navigate("/admin");
  } else{
    toast.error(res_data.extraDetails? res_data.extraDetails:res_data.message);
  }
  //console.log(response)
} catch (error) {
  console.error("Registration error:", error);
}
};
    return ( 
      <div>
        <section>
               <main>
                <div className="section-registration">
                 
                    <h1> Log in Now </h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                    
                      <div>
                      <label htmlFor="email"> email address </label>
                      <input type="email" 
                      name="email"
                      placeholder="enter your email address"
                      id="email"
                      required autoComplete="off"
                      value={loginUser.email}
                      onChange={handleInput}
                      
                      />
                      </div>


                      <div>
                      <label htmlFor="password">Password </label>
                      <input type="password" 
                      name="password"
                      placeholder="enter your password "
                      id="password"
                      required autoComplete="off"
                      value={loginUser.password}
                      onChange={handleInput}/>
                      </div>
                   <button type="submit">Submit Now</button>
                      
                   </form>
                </div>
               </main>
        </section>
      </div>
    );
}
