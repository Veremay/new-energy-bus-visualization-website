import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "../styles/home.css";
import { ThemeContext } from "../ThemeContext";
import BusStop from "./bus_stop";
import { ReactComponent as Bbus } from "../assets/svg/bbus.svg";
import { ReactComponent as Charcoal } from "../assets/svg/charcoal.svg";
import { ReactComponent as Gasoline } from "../assets/svg/gasoline.svg";
import { ReactComponent as Diesel } from "../assets/svg/diesel.svg";
import { ReactComponent as Coalgas } from "../assets/svg/coalgas.svg";
import { ReactComponent as Naturalgas } from "../assets/svg/naturalgas.svg";
import { ReactComponent as Hydrogen } from "../assets/svg/hydrogen.svg";

const Home = () => {
  const { theme, category, setCategory } = useContext(ThemeContext);

  const location = useLocation(); // 获取当前路由
  const isContentPage = location.pathname === "/content"; // 判断是否在 /content 页面
  if (!isContentPage) {
    document.body.style.backgroundColor = "#006fff";
    document.body.style.padding = "3vh 3vw 0 3vw";
  }

  // const energySources = [
  //   {
  //     category: "electric",
  //     SVG: bbus,
  //   }, // 电能
  //   {
  //     category: "charcoal",
  //     SVG: charcoal,
  //   }, // 木炭
  //   {
  //     category: "gasoline",
  //     SVG: gasoline,
  //   }, // 汽油
  //   { category: "diesel", SVG: diesel }, // 柴油
  //   { category: "coalgas", SVG: coalgas }, // 煤气
  //   {
  //     category: "naturalgas",
  //     SVG: naturalgas,
  //   }, // 天然气
  //   {
  //     category: "hydrogen",
  //     SVG: hydrogen,
  //   }, // 氢能源
  // ];

  const renderSvgComponent = () => {
    const props = {
      width: "1000",
      height: "400",
      style: { display: "block" },
    };

    switch (category) {
      case "babybus":
      case "electric":
        return <Bbus {...props} />;
      case "charcoal":
        return <Charcoal {...props} />;
      case "diesel":
        return <Diesel {...props} />;
      case "gasoline":
        return <Gasoline {...props} />;
      case "coalgas":
        return <Coalgas {...props} />;
      case "naturalgas":
        return <Naturalgas {...props} />;
      case "hydrogen":
        return <Hydrogen {...props} />;
      default:
        return <Bbus {...props} />;
    }
  };

  return (
    <div className="grid-container">
      <h1 className="title">从“铛铛车”到“宝宝巴士”</h1>

      <h2 className="subtitle">中国公交车的绿色转型</h2>
      <div className="contents">
        <p>
          在当下的城市街头，一种被亲切称为 “宝宝巴士”
          的新能源公交车逐渐进入人们的视野，它们以小巧可爱的外形、清新的色彩搭配以及环保的能源利用方式，成为城市公共交通中一道独特的风景线。
        </p>
        <p>
          这一新颖的公交形式并非一蹴而就，其背后折射出的是中国百年公交车能源变革的漫长历程。从1899年第一条有轨电车线路的出现，到如今
          “宝宝巴士”
          等新能源公交车的广泛应用，中国公交车的能源使用经历了多次重大转变，犹如一部厚重的史书，不仅记录着不同时代的科技发展水平，也展现着社会对环保的不懈追求。
        </p>
      </div>

      <div className="bus_svg">{renderSvgComponent()}</div>
      <div className="bus_stop">
        <BusStop />
      </div>
    </div>
  );
};

export default Home;
