import React from "react";
import "./sidebar.css";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaidIcon from "@mui/icons-material/Paid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MailIcon from "@mui/icons-material/Mail";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MessageIcon from "@mui/icons-material/Message";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import CreateIcon from "@mui/icons-material/Create";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              {" "}
              <li className="sidebarListItem ">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">
            <Link className="link" to="/users">
              <li className="sidebarListItem">
                <PersonIcon className="sidebarIcon" />
                Mange Users
              </li>
            </Link>

            <Link to="/new-user" className="link">
              {" "}
              <li className="sidebarListItem">
                <CreateIcon className="sidebarIcon" />
                Create User
              </li>
            </Link>
            <li className="sidebarListItem">
              <AssessmentIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Mange Products</h3>
          <ul className="sidebarList">
            <Link className="link" to='/products'>
              <li className="sidebarListItem">
                <InventoryIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/new-product" className="link">
              {" "}
              <li className="sidebarListItem">
                <CreateIcon className="sidebarIcon" />
                Create Product
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <ManageSearchIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <AssessmentIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
