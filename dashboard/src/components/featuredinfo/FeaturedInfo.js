import React from "react";
import "./featuredinfo.css";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
const FeaturedInfo = () => {
  return (
    <div className="feature">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
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
