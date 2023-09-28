import React from "react";
import { useState, useEffect } from "react";
import { userReq } from "../../requestMethod";
import {format} from 'timeago.js'
import "./widgetlg.css";
const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userReq.get("orders");
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetlgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetlgTitle">Latest Transactions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetlgTr" key={order._id}>
            <td className="widgetlgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetlgDate">{format(order.createdAt)}</td>
            <td className="widgetlgAmount">${order.amount}</td>
            <td className="widgetlgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
