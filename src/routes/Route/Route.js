import Main from "../../layout/Main";
import Checkout from "../../pages/Checkout/Checkout";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import Orders from "../../pages/Orders/Orders";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "service/:id",
        element: <PrivateRouter><Checkout></Checkout></PrivateRouter>,
        loader: async ({ params }) => {
          return fetch(`https://genius-car-server-six-gamma.vercel.app/service/${params.id}`);
        },
      },
      {
        path: 'orders',
        element: <PrivateRouter><Orders></Orders></PrivateRouter>
      }
    ],
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'signup',
    element: <SignUp></SignUp>
  }
]);

export default router;
