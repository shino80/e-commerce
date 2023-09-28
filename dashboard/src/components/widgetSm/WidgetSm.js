import "./widgetsm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useEffect, useState } from "react";
import { userReq } from "../../requestMethod";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userReq.get("users/?new=true");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetsmTitle">New join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user.id}>
            <img
              src={
                user.img ||
                "https://images.unsplash.com/photo-1694146146629-ba9c215a9956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              }
              className="widgetSmImg"
              alt={`Profile of ${user.name}`}
            />
            <div className="widgetSmUser">
              <span className="widgetUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
