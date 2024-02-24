import { useAuth } from "../store/auth";


export const Service =()=>{
  const{services}= useAuth();
    return ( 
      <section>
        <div className="section-service">

        
          <div className="container">
           <h1>Services</h1>

           {
            services.map((curElm,index)=>{
              const {price,description,provider,service} = curElm;
              return (
                <div key={index}>
            <p>{provider}</p>
            <p>{price}</p>
            <h2>{service}</h2>
            <p>{description}</p>
           </div>
              );
            })
           }
            
          </div>
        </div>
      </section>
    );
}
