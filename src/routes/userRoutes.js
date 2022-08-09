import Demo from "../pages/Demo/Demo";
import OrderDetail from "../pages/OrderDetail/OrderDetail";
import Bill from "../pages/Bill/Bill";

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
];

export default userRoutes;
