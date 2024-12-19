import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import "../styles/contentpage.css";
import BusStop from "./bus_stop";

const ContentPage = () => {
  const { category } = useContext(ThemeContext);

  const navigate = useNavigate();

  // 定义能源内容
  const energyDescriptions = {
    electric: {
      title: "电能",
      description:
        "电能是清洁能源的代表，它无污染、效率高，是未来绿色交通的关键能源。",
    },
    charcoal: {
      title: "木炭",
      description: "木炭是最早期的能源之一，但污染严重，已逐步被替代。",
    },
    gasoline: {
      title: "汽油",
      description:
        "汽油曾经是公共交通的黄金时代能源，但环境成本高，现逐渐被新能源替代。",
    },
    diesel: {
      title: "柴油",
      description: "柴油公共汽车时代具有高效燃油经济性，但排放量较高。",
    },
    coalgas: {
      title: "煤气",
      description: "煤气能源是一种历史能源，曾用于早期工业化时期的城市交通。",
    },
    naturalgas: {
      title: "天然气",
      description: "天然气是一种清洁能源，广泛用于家庭、工业和公共交通。",
    },
    hydrogen: {
      title: "氢能源",
      description:
        "氢能源是未来的绿色能源代表，无污染、可再生，是公共交通的新选择。",
    },
  };

  const { title, description } = energyDescriptions[category] || {
    title: "未知能源",
    description: "请选择能源类型。",
  };

  return (
    <div className="flex-container">
      <div className="header">
        <div>
          <button className="nav-back">
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.585938 8.83594L8.08594 1.375C8.4375 0.984375 9.02344 0.984375 9.41406 1.375C9.76562 1.72656 9.76562 2.3125 9.41406 2.66406L2.53906 9.5L9.375 16.375C9.76562 16.7266 9.76562 17.3125 9.375 17.6641C9.02344 18.0547 8.4375 18.0547 8.08594 17.6641L0.585938 10.1641C0.195312 9.8125 0.195312 9.22656 0.585938 8.83594Z"
                fill="black"
              />
            </svg>
            <p>返回</p>
          </button>
        </div>
        <div>
          <button className="quotation-button">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="black" />
              <path
                d="M20.645 11.792H22.053V27.5H20.249V13.992C19.259 15.004 18.027 15.708 16.553 16.148V14.344C17.257 14.146 18.005 13.838 18.753 13.398C19.501 12.914 20.117 12.386 20.645 11.792Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <BusStop />
      <h1 className="content-title">{title}</h1>
      <p className="content-description">{description}</p>
    </div>
  );
};

export default ContentPage;
