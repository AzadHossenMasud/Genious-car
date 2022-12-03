import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices]= useState([])
    const [isAse, setIsAse]=useState(true)
    useEffect(()=>{
        fetch(`https://genius-car-server-six-gamma.vercel.app/services?sort=${isAse? 'ase': 'des'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[isAse])
  return (
    <div className=" my-10">
      <div className=" text-center">
        <h1 className="text-xl text-orange-600 font-bold">Servcies</h1>
        <h1 className=" text-4xl font-bold">Our Service Area</h1>
        <p className="py-6 text-gray-400">
          the majority have suffered alteration in some form, by injectedn{" "}
          <br />
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button onClick={()=>setIsAse(!isAse)} className=" btn btn-primary mb-5">{isAse? 'ase': 'des'}</button>
        <div className="grid grid-cols-3 gap-4">
          {
            services.map(service => <Service key={ service._id} service={service}></Service>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
