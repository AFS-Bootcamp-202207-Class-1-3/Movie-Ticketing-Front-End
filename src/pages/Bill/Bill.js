import { getBill } from "../../api/BillApi";

import "./Bill.css";
import QRCode from "qrcode.react";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";

export default function Bill() {
  //   const {
  //     state: { id },
  //   } = useLocation();
  const orderId = "1";
  const [bill, setBill] = useState({});
  useEffect(() => {
    getBill(orderId).then((response) => {
      setBill(response.data);
    });
  }, [orderId]);
  return (
    <div className="main">
      <div className="order-info">
        <h1>Order Information</h1>
        <ul>
          <li>Cinema Name: {bill.cinemaName}</li>
          <li>Name: {bill.movieName}</li>
          <li>Movie schedule: {bill.movieSchedule}</li>
          <li>Seating arrangement: {bill.seating}</li>
          <li>Payment Amount: {bill.price} rmb</li>
        </ul>
      </div>

      <div>
        <div className="partner-info">
          <h1>Partner Information</h1>
          <ul>
            <li>Partner: {bill.partnerName}</li>
            <li>Gender: {bill.partnerGender}</li>
            <li>Partner Telephone: {bill.partnerTelephone}</li>
          </ul>
        </div>
        <div className="ticket-code">
          <QRCode value={bill.ticketCode} size={100} />
        </div>
      </div>
    </div>
  );
}
