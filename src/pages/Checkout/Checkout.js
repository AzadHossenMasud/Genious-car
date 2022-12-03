import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkoutImg from "../../assets/images/checkout/checkout.png";
import { AuthContext } from "../../context/ContextPovider/ContextProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData()
const {_id, description, img, price, title} = service
  //  console.log(service);
  // console.log(user);
  const { email } = user;

  const handleSubmit = e =>{
    e.preventDefault()
    const form = e.target
    // console.log(form)
    const fname = form.fname.value
    const lname = form.lname.value
    const fullName = fname+" "+ lname
    const phone = form.phone.value
    const email = form.email.value
    const message = form.message.value

    const order = {
      service: _id,
      serviceName : title,
      price : price,
      customer : fullName,
      email: email,
      phone: phone,
      message: message
    }
    // console.log(fullName, phone, email, message);


    fetch('https://genius-car-server-six-gamma.vercel.app/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.acknowledged){
        alert('Order Successfull')
        form.reset()
      }
    })
  }
 


  return (
    <div className=" py-5">
      <div
        className="hero my-5 rounded-lg "
        style={{ backgroundImage: `url(${checkoutImg})` }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg my-5 py-24"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Check Out</h1>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="  w-3/4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control w-full ">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full "
                name="fname"
              />
            </div>
            <div className="form-control w-full ">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full "
                name="lname"
              />
            </div>
            <div className="form-control w-full">
              <input
                type="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full "
                name="phone"
              />
            </div>
            <div className="form-control w-full ">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full "
                name="email"
                defaultValue={email}
                readOnly
              />
            </div>
          </div>
          <div className="form-control w-full my-5">
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>
          <div className="mx-auto">
          <button type=" submit" className="btn btn-active btn-primary block mx-auto">Place To Order</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
