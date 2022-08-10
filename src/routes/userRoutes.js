import Demo from "../pages/Demo/Demo";
import OrderDetail from "../pages/OrderDetail/OrderDetail";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Bill from "../pages/Bill/Bill";
import Home from "../pages/Home/Home";
import SelectCinemaAndViewingTime from "../pages/SelectCinemaAndViewingTime/SelectCinemaAndViewingTime";
import Pairing from "../pages/Pairing/Pairing";
/*用法: 
添加到userRoutes里,格式:
{
  path: "xxx",
  element: <xxx/>,
}
注意: path中不需要添加 /
*/
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
  {
    path: "SelectCinemaAndViewingTime",
    element: <SelectCinemaAndViewingTime />,
  },
  {
    path: "Pairing",
    element: <Pairing />,
  },
];

export default userRoutes;
