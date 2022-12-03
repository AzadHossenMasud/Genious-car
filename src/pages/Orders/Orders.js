import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/ContextPovider/ContextProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user, logoutUser} = useContext(AuthContext)
    // console.log(user?.email);
    const [orders, setOrders]= useState([])
    useEffect(()=>{
        fetch(`https://genius-car-server-six-gamma.vercel.app/orders?email=${user?.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('geniuToken')}`
          }
        })
        .then(res => {
          if(res.status=== 401 || res.status || 403){
            return logoutUser()
          }
           return res.json()
          })
        .then(data => {
          console.log(data);
          setOrders(data)
        })
    },[user?.email])

    const handleDelete = (id)=>{
        let procced = window.confirm('Do you want to delete it?')
        // console.log(procced)
        if(procced){
            fetch(`https://genius-car-server-six-gamma.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                   const resOrders = orders.filter(odr => odr._id !== id)
                  //  console.log(resOrders);
                   setOrders(resOrders)
                }
            })
        }

       

    }

    // console.log(orders)
    return (
        <div className=' py-5 text-center'>
            <h2>You have : {orders.length} orders</h2>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map(order => <OrderRow key={order._id} order ={order} handleDelete={handleDelete}></OrderRow>)
      }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Orders;