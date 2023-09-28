import React, { useEffect, useMemo, useState } from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../data";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/widgetLg";
import { userReq } from "../../requestMethod";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userReq.get("/users/stats");
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              "Active User": item.total,
            },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
