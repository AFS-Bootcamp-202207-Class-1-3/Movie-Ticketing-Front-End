import { useNavigate } from "react-router-dom";
import { Descriptions, Button, Spin, message } from "antd";
import { useState, useEffect, useRef } from "react";
import { getOrderDetail } from "../../api/OrderDetailApi";
import { putPay } from "../../api/PayApi";
import "./OrderDetail.css";

export default function OrderDetail() {
  const [orderInfo, setOrderInfo] = useState({
    orderId: "",
    movieName: "",
    movieSchedule: "",
    seatingArrangement: "",
    isPay: false,
    price: 0.0,
    userName: ""
  });
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  /* const {
    state: { orderId },
  } = useLocation();
  */

  const handlePutPay = function() {
    putPay({
      // ordersIds: orderInfo.orderId,
      // totalPrice: orderInfo.price,
      // status: orderInfo.pay?1:0
        "totalPrice": 100,
        "ordersIds": "1",
        "status": 1
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(response => {
        message.error("支付失败");
        setLoading(false);
      });
  };

  const orderId = "1";

  const orderIdRef = useRef(orderId);

  useEffect(() => {
    orderIdRef.current = orderId;
  }, [orderId]);

  useEffect(() => {
    getOrderDetail(orderIdRef.current)
      .then(response => {
        setOrderInfo(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(response => {
        message.error("获取订单信息失败，请重试");
        setLoading(false);
      });
  }, []);

  const ButtonTo = path => {
    nav(path, { replace: true, state: { orderId: orderId } });
  };

  const payButton = () => {
    return orderInfo.isPay ? (
      <Button
        type="primary"
        onClick={() => {
          ButtonTo("/User/Bill");
        }}
        style={{ margin: "10px" }}
      >
        Check Bill
      </Button>
    ) : (
      <Button type="primary" onClick={handlePutPay} style={{ margin: "10px" }}>
        Pay now
      </Button>
    );
  };

  return (
    <div className="OrderDetail">
      <Spin spinning={loading}>
        <Descriptions
          title={<b style={{ fontSize: "200%" }}>Order Information</b>}
          column={1}
          style={{
            width: "40%",
            marginLeft: "30%"
          }}
        >
          <Descriptions.Item
            label={<font className="OrderDetail-Item">OrderId</font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.orderId}</font>
          </Descriptions.Item>
          <Descriptions.Item
            label={<font className="OrderDetail-Item">UserName</font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.userName}</font>
          </Descriptions.Item>
          <Descriptions.Item
            label={<font className="OrderDetail-Item">Movie Name</font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.movieName}</font>
          </Descriptions.Item>
          <Descriptions.Item
            label={<font className="OrderDetail-Item">Movie Schedule</font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.movieSchedule}</font>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <font className="OrderDetail-Item">Seating Arrangement </font>
            }
          >
            <font className="OrderDetail-Item">
              {orderInfo.seatingArrangement}
            </font>
          </Descriptions.Item>
          <Descriptions.Item
            label={<font className="OrderDetail-Item">Price </font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.price}</font>
          </Descriptions.Item>
        </Descriptions>
        {payButton()}
      </Spin>
    </div>
  );
}
