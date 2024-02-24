import { NavLink ,Outlet} from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

export const AdminLayout =()=>{

   return (

 <header>
 <div className="container">
  <nav>
    <ul>
      <li>
        <NavLink to="users"> <FaUser />Users</NavLink>
        </li>

        <li >
      <NavLink to="productsEditor"> <FaHome />Products Editor</NavLink>
        
        </li>
            
    </ul>
    </nav>
 </div>
 <Outlet/>
 </header>
   
   );



}