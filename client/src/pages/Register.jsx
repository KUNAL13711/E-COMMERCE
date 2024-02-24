import { useState } from "react";
  
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';



export const Register =()=>{
  
  const [user, setUser]=useState({

    username:"",
    email:"",
    phone:"",
    password:"",
 })
 const navigate =  useNavigate();

 const {storeTokenInLS}= useAuth();


 // handle the input information
  const handleInput=(e)=>{
 console.log(e);

 let name = e.target.name;
 let value = e.target.value;
 setUser({
  ...user,
  //dynamic value name=phone=email=password
  [name]:value,

})
};
///handling for the form submission process
const handleSubmit=async(e)=>{
         e.preventDefault();
        // alert(user);
         console.log(user);


//connect with database using node +express
try {
  const response = await fetch(`http://localhost:3000/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const res_data= await response.json();
     console.log("res from server", res_data.extraDetails);

  if (response.ok) 
  {
     
     //store the token in the localhost
     storeTokenInLS(res_data.token);

    toast.success("Registration success");
    setUser({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
    navigate("/login");
  }else{
    toast.error(res_data.extraDetails? res_data.extraDetails:res_data.message );
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
                 
                    <h1>Registration form</h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                      <div>
                      <label htmlFor="username">  username </label>
                      <input type="text" 
                      name="username"
                      placeholder="enter your username "
                      id="username"
                      required autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                      />
                      </div>


                      <div>
                      <label htmlFor="email">email address </label>
                      <input type="email" 
                      name="email"
                      placeholder="enter your email address"
                      id="email"
                      required autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      
                      />
                      </div>


                      <div>
                      <label htmlFor="phone">Phone number </label>
                      <input type="number" 
                      name="phone"
                      placeholder="enter your phone number "
                      id="phone"
                      required autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}/>
                      </div>

                      <div>
                      <label htmlFor="password">Password </label>
                      <input type="password" 
                      name="password"
                      placeholder="enter your password "
                      id="password"
                      required autoComplete="off"
                      value={user.password}
                      onChange={handleInput}/>
                      </div>
                   <button type="submit">Register Now</button>
                      
                   </form>
                </div>
               </main>
        </section>
      </div>
    );
}
