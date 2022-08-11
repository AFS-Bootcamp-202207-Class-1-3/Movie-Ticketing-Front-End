import { useNavigate, useLocation } from "react-router-dom";
import { Descriptions, Button, Spin, message } from "antd";
import { useState, useEffect, useRef } from "react";
import { getOrderDetail } from "../../api/OrderDetailApi";
import { putOrder } from "../../api/PayApi";
import "./OrderDetail.css";

export default function OrderDetail() {
  const [orderInfo, setOrderInfo] = useState({
    orderId: "",
    movieName: "",
    movieSchedule: "",
    seatingArrangement: "",
    pay: false,
    price: 0.0,
    userName: ""
  });
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  const {
    state: { orderId }
  } = useLocation();

  const handlePutPay = function() {
    putOrder(orderInfo.orderId)
      .then(response => {
        message.success("支付成功");
        nav("/User/Bill", {
          replace: false,
          state: { orderId: response.data.id }
        });
      })
      .catch(response => {
        message.error("支付失败");
        setLoading(false);
      });
  };

  const orderIdRef = useRef(orderId);

  useEffect(() => {
    orderIdRef.current = orderId;
  }, [orderId]);

  useEffect(() => {
    getOrderDetail(orderIdRef.current)
      .then(response => {
        setOrderInfo(response.data);
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
    return orderInfo.pay ? (
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
      <Button
        type="primary"
        onClick={handlePutPay}
        style={{ margin: "10px", width: "200px" }}
      >
        马上支付
      </Button>
    );
  };

  return (
    <div className="OrderDetail">
      <Spin spinning={loading}>
        <Descriptions
          title={<b style={{ fontSize: "200%" }}>订单详情</b>}
          column={1}
          style={{
            width: "40%",
            marginLeft: "30%"
          }}
        >
          <Descriptions.Item
            label={<font className="OrderDetail-Item">订单号：</font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.orderId}</font>
          </Descriptions.Item>
          <Descriptions.Item
            label={<font className="OrderDetail-Item">姓名：</font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.userName}</font>
          </Descriptions.Item>
          <Descriptions.Item
            label={<font className="OrderDetail-Item">电影名：</font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.movieName}</font>
          </Descriptions.Item>
          <Descriptions.Item
            label={<font className="OrderDetail-Item">电影播放时间：</font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.movieSchedule}</font>
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <font className="OrderDetail-Item">座位：</font>
            }
          >
            <font className="OrderDetail-Item">
              {orderInfo.seatingArrangement}
            </font>
          </Descriptions.Item>
          <Descriptions.Item
            label={<font className="OrderDetail-Item">价格： </font>}
          >
            <font className="OrderDetail-Item"> {orderInfo.price}</font>
          </Descriptions.Item>
        </Descriptions>
        {payButton()}
      </Spin>
    </div>
  );
}
