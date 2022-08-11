import { getBill } from "../../api/BillApi";
import { useLocation } from "react-router-dom";
import "./Bill.css";
import QRCode from "qrcode.react";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";

export default function Bill() {
  const {
    state: { orderId }
  } = useLocation();

  const [bill, setBill] = useState({});
  useEffect(() => {
    getBill(orderId).then(response => {
      setBill(response.data);
    });
  }, [orderId]);
  return (
    <div className="bill-main">
      <div className="bill-message">
        <div className="order-info">
          <h1>订单详情</h1>
          <div className="info-partner">
            <ul>
              <li>电影院名：{bill.cinemaName}</li>
              <li>电影名: {bill.movieName}</li>
              <li>场次: {bill.movieSchedule}</li>
              <li>座位: {bill.seating}</li>
              <li>支付费用: {bill.price} 元</li>
            </ul>
          </div>
        </div>
        <div className="partner-info">
          <h1>同伴信息</h1>
          <div className="info-partner">
            <ul>
              <li>同伴名: {bill.partnerName}</li>
              <li>性别: {bill.partnerGender}</li>
              <li>同伴电话: {bill.partnerTelephone}</li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="ticket-code-box">
        <div className="ticket-code">
          <h1>取票码</h1>
          <QRCode value={bill.ticketCode} size={150} />
        </div>
      </div>
    </div>
  );
}
