import Demo from "../pages/Demo/Demo";
import OrderDetail from "../pages/OrderDetail/OrderDetail"
import MovieDetail from "../pages/MovieDetail/MovieDetail"
import Bill from "../pages/Bill/Bill";

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
    path: "MovieDetail",
    component: MovieDetail,
  },
];

export default userRoutes;
