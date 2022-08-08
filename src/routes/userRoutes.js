import Demo from "../pages/Demo/Demo";
import OrderDetail from "../pages/OrderDetail/OrderDetail";

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
    path: "OrderDetail",
    component: OrderDetail,
  },
];

export default userRoutes;
