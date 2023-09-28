import React, { useEffect, useState } from "react";
import "./featuredinfo.css";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { userReq } from "../../requestMethod";
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userReq.get("orders/total-order");
        setIncome(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);

  return (
    <div className="feature">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">${income[1]?.total}</span>
          <span className="featureMoneyRate">
            %{Math.floor(percentage)}
            {percentage < 0 ? (
              <ArrowDownwardRoundedIcon className="featureIcon nagative" />
            ) : (
              <ArrowUpwardRoundedIcon className="featureIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">$7.433</span>
          <span className="featureMoneyRate">
            -11.4
            <ArrowDownwardRoundedIcon className="featureIcon nagative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featureMoney">$7.433</span>
          <span className="featureMoneyRate">
            +11.4
            <ArrowUpwardRoundedIcon className="featureIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
