import React from "react";
import "./widgetlg.css";
const WidgetLg = () => {
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
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.unsplash.com/photo-1693850310514-13f160be0bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Will</span>
          </td>
          <td className="widgetlgDate">2 Jun 2023</td>
          <td className="widgetlgAmount">$2000</td>
          <td className="widgetlgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.unsplash.com/photo-1693850310514-13f160be0bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Will</span>
          </td>
          <td className="widgetlgDate">2 Jun 2023</td>
          <td className="widgetlgAmount">$2000</td>
          <td className="widgetlgStatus">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.unsplash.com/photo-1693850310514-13f160be0bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Will</span>
          </td>
          <td className="widgetlgDate">2 Jun 2023</td>
          <td className="widgetlgAmount">$2000</td>
          <td className="widgetlgStatus">
            <Button type="Pending"/>
          </td>
        </tr>

      </table>
    </div>
  );
};

export default WidgetLg;
