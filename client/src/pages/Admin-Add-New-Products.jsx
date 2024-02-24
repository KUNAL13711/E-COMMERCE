import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
 
//sob jaygay use hochhe bole bole ai function ta likhlam

const defaultContactFormData={
  date:"",
  name: "",
  price: "",
  description:"",
}
export const AdminAddProducts=()=>{

  const [member, setMember]=useState(defaultContactFormData)
  const { authorizationToken } = useAuth();


 // handle the input information
  const handleInput=(e)=>{
 //console.log(e);

 let name = e.target.name;
 let value = e.target.value;
 setMember({
  ...member,
  //dynamic value name=phone=email=password
  [name]:value,

})
//for inspect
//console.log(name,value);
};
///handling for the form submission process
const handleSubmit=async(e)=>{
         e.preventDefault();
         //alert(user);
         //console.log(member);

         try {
          const response = await fetch("http://localhost:3000/api/admin/adminAddProducts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken,
            },
         body: JSON.stringify(member),
          });
        
          if (response.ok) 
          {
             
            setMember (defaultContactFormData);
          
            const data = await response.json();
            console.log(data);
            toast.success("Products Added successful");
          }
        } catch (error) {
          toast.error("Products Not Added", error);
          
        }




};
    return ( 
      <div>
        <section>
               <main>
                <div className="section-registration">
                 
                    <h1>Product Editor</h1>
                    <br/>
                    <form onSubmit={handleSubmit}>
                   

                    <div>
                      <label htmlFor="date">Select Date</label>
                      <input type="date" 
                      name="date"
                      placeholder="enter the date "
                      id="date"
                      required autoComplete="off"
                      value={member.date}
                      onChange={handleInput}
                      
                      />
                      </div>
                    <div>
                      <label htmlFor="name"> Product Name</label>
                      <input type="text" 
                      name="name"
                      placeholder="enter products name "
                      id="name"
                      required autoComplete="off"
                      value={member.name}
                      onChange={handleInput}
                      
                      />
                      </div>


                      <div>
                      <label htmlFor="price"> Price </label>
                      <input type="number" 
                      name="price"
                      placeholder="enter products price"
                      id="price"
                      required autoComplete="off"
                      value={member.price}
                      onChange={handleInput}
                      
                      />
                      </div>

                      <div>
                      <label htmlFor="description">Description</label>
                      <input type="text" 
                      name="description"
                      placeholder="add details "
                      id="description"
                      required autoComplete="off"
                      value={member.description}
                      onChange={handleInput}/>
                      </div>

                   <button type="submit">Add Products</button>
                      
                   </form>
                </div>
               </main>
              
        </section>
      </div>
    );
}