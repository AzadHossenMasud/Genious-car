import React, { useState } from "react";

const OrderRow = ({ order, handleDelete }) => {
  // console.log(order);
  const { _id ,customer, email, message, phone, price, service, serviceName } =
    order;
  const [orderService, setOrderService] = useState([]);
  useState(() => {
    fetch(`https://genius-car-server-six-gamma.vercel.app/service/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, []);

 
//   console.log(orderService);
  return (
    <tr>
      <th>
      <button onClick={()=>handleDelete(_id)} className="btn btn-ghost">X</button>

      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {
                orderService?.img && <img
                src= {orderService?.img}
                alt="Avatar Tailwind CSS Component"
              />
              }
              
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        $ {price}
      </td>
      <td>{message}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default OrderRow;
