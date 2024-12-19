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
    <div className="content-container">
      <BusStop />
      <h1 className="content-title">{title}</h1>
      <p className="content-description">{description}</p>
    </div>
  );
};

export default ContentPage;
