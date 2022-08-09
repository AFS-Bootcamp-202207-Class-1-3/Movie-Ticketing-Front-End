import Demo from "../pages/Demo/Demo";
import OrderDetail from "../pages/OrderDetail/OrderDetail";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Bill from "../pages/Bill/Bill";
import Home from "../pages/Home/Home"


const userRoutes = [
  {
    path: "Demo",
    element: <Demo />,
  },
  {
    path: "Bill",
    element: <Bill />,
  },
  {
    path: "OrderDetail",
    element: <OrderDetail />,
  },
  {
    path: "MovieDetail",
    element: <MovieDetail />,
  },
  {
    path: "Home",
    element: <Home />,
  },
];

export default userRoutes;
