import React from "react";
import { ArrowRightIcon, BeakerIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  // console.log(service);
  const { _id, description, img, price, sevice_id, title } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <div className=" text-orange-600 font-bold">Price: ${price}</div>
          <div className="">
            <Link to={`/service/${_id}`}>
            <ArrowRightIcon className="h-6 w-6  text-orange-600 font-bold"></ArrowRightIcon>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
