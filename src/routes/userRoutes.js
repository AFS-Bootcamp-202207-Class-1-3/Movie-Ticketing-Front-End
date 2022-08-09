import Demo from "../pages/Demo/Demo";
import OrderDetail from "../pages/OrderDetail/OrderDetail"
import Bill from "../pages/Bill/Bill";
import Home from "../pages/Home/Home";
import SelectCinemaAndViewingTime from "../pages/SelectCinemaAndViewingTime/SelectCinemaAndViewingTime"
/*用法: 
添加到userRoutes里,格式:
{
  path: "xxx",
  component: xxx,
}
注意: path中不需要添加 /
*/
const userRoutes = [
  {
    path: "Demo",
    component: Demo,
  },
  {
    path: 'Bill',
    component: Bill,
  },
  {
    path: "OrderDetail",
    component: OrderDetail,
  },
  {
    path: "Home",
    component: Home,
  },
  {
    path: "SelectCinemaAndViewingTime",
    component: SelectCinemaAndViewingTime,
  }
];

export default userRoutes;
