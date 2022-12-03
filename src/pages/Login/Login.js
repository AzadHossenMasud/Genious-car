import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/ContextPovider/ContextProvider";
import Header from "../Shared/Header/Header";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    // console.log(loginUser);
    let navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
        loginUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const currentUser = {
              email: user.email
            }
            // console.log(currentUser)
            

            fetch('https://genius-car-server-six-gamma.vercel.app/jwt',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              localStorage.setItem('geniuToken', data.token)
              navigate(from, { replace: true });

            })
            // console.log(user);

            form.reset()
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }

  return (
    <div>
        <Header></Header>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div>
              <img src={loginImage} alt="" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <Link to='/signup' className="label-text-alt link link-hover">
                      Haven't you account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
