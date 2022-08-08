import { useLocation, useNavigate } from "react-router-dom";
import { Descriptions, Button, Spin, message } from "antd";
import { useState, useEffect, useRef } from "react";
import { getOrderDetail } from "../../api/OrderDetailApi";
import "./OrderDetail.css";

export default function OrderDetail() {
  const [orderInfo, setOrderInfo] = useState({
    orderId: "",
    movieName: "",
    movieSchedule: "",
    seatingArrangement: "",
    isPay: false,
    Price: 0.0,
    userName: "",
  });
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  const {
    state: { orderId },
  } = useLocation();

  //const orderId = "xxx";

  const orderIdRef = useRef(orderId);

  useEffect(() => {
    orderIdRef.current = orderId;
  }, [orderId]);

  useEffect(() => {
    getOrderDetail(orderIdRef.current)
      .then((response) => {
        setOrderInfo(response.data);
        setLoading(false);
      })
      .catch((response) => {
        message.error("获取订单信息失败，请重试");
        setLoading(false);
      });
  }, []);

  const ButtonTo = (path) => {
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
      <Button type="primary" onClick={() => {}} style={{ margin: "10px" }}>
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
            width: "50%",
            marginLeft: "25%",
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
            <font className="OrderDetail-Item"> {orderInfo.Price}</font>
          </Descriptions.Item>
        </Descriptions>
        {payButton()}
      </Spin>
    </div>
  );
}
