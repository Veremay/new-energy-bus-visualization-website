import React, { useContext } from "react";
import "../assets/styles/bus_stop.css";
import { ThemeContext } from "../ThemeContext";
import { ReactComponent as ElectricityIcon } from "../assets/icons/electric.svg";
import { ReactComponent as CharcoalIcon } from "../assets/icons/charcoal.svg";
import { ReactComponent as GasolineIcon } from "../assets/icons/gasoline.svg";
import { ReactComponent as DieselIcon } from "../assets/icons/diesel.svg";
import { ReactComponent as GasIcon } from "../assets/icons/gas.svg";
import { ReactComponent as NaturalGasIcon } from "../assets/icons/naturalgas.svg";
import { ReactComponent as HydrogenIcon } from "../assets/icons/hydrogen.svg";

const BusStop = () => {
  const { theme, category, setCategory } = useContext(ThemeContext);

  const energySources = [
    {
      category: "electric",
      Icon: ElectricityIcon,
      text: "电能",
      color: "#9AFF6B",
    }, // 电能
    {
      category: "charcoal",
      Icon: CharcoalIcon,
      text: "木炭",
      color: "#AAA",
    }, // 木炭
    {
      category: "gasoline",
      Icon: GasolineIcon,
      text: "汽油",
      color: "#F1E29E",
    }, // 汽油
    { category: "diesel", Icon: DieselIcon, text: "柴油", color: "#F9CE4E" }, // 柴油
    { category: "coalgas", Icon: GasIcon, text: "煤气", color: "#DDD" }, // 煤气
    {
      category: "naturalgas",
      Icon: NaturalGasIcon,
      text: "天然气",
      color: "#FFC4E1",
    }, // 天然气
    {
      category: "hydrogen",
      Icon: HydrogenIcon,
      text: "氢能源",
      color: "#8AE0FF",
    }, // 氢能源
  ];
  return (
    <div className="busstop">
      <div className="start-button">
        <button className="start">
          {/* <img src="../assets/icons/button_start.png" alt="Start" /> */}
          <svg
            width="355"
            height="99"
            viewBox="0 0 355 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.36133"
              y="5"
              width="345.518"
              height="89.3385"
              rx="44.6693"
              fill="white"
            />
            <rect
              x="4.36133"
              y="5"
              width="345.518"
              height="89.3385"
              rx="44.6693"
              stroke="black"
              stroke-width="8.71595"
            />
            <path
              d="M53.6304 34.7929L79.3973 49.6694L53.6304 64.5459L53.6304 34.7929Z"
              fill="#FF02C0"
            />
            <path
              d="M113.582 41.1342C113.431 39.6118 112.783 38.4292 111.638 37.5862C110.493 36.7432 108.939 36.3217 106.976 36.3217C105.643 36.3217 104.517 36.5105 103.598 36.8879C102.68 37.2528 101.975 37.7623 101.484 38.4166C101.006 39.0708 100.767 39.8131 100.767 40.6435C100.742 41.3355 100.887 41.9394 101.201 42.4553C101.529 42.9711 101.975 43.4177 102.541 43.7952C103.107 44.1601 103.762 44.4809 104.504 44.7577C105.246 45.0219 106.039 45.2484 106.882 45.4371L110.354 46.2675C112.04 46.6449 113.588 47.1482 114.997 47.7773C116.406 48.4063 117.627 49.1801 118.658 50.0986C119.69 51.017 120.489 52.099 121.055 53.3446C121.634 54.5902 121.93 56.0182 121.942 57.6286C121.93 59.994 121.326 62.0448 120.13 63.781C118.948 65.5047 117.237 66.8446 114.997 67.8008C112.77 68.7444 110.084 69.2162 106.939 69.2162C103.818 69.2162 101.101 68.7381 98.7857 67.7819C96.4833 66.8257 94.6841 65.4103 93.3882 63.5357C92.1049 61.6484 91.4318 59.3146 91.3689 56.534H99.2764C99.3645 57.8299 99.7356 58.9119 100.39 59.7801C101.057 60.6356 101.944 61.2836 103.051 61.7239C104.171 62.1517 105.435 62.3656 106.844 62.3656C108.228 62.3656 109.43 62.1643 110.449 61.7617C111.481 61.3591 112.279 60.7992 112.846 60.082C113.412 59.3649 113.695 58.5408 113.695 57.6098C113.695 56.7416 113.437 56.0119 112.921 55.4206C112.418 54.8292 111.676 54.326 110.694 53.9108C109.725 53.4956 108.536 53.1181 107.127 52.7784L102.919 51.7216C99.6601 50.9289 97.0872 49.6897 95.2 48.0037C93.3128 46.3178 92.3754 44.0468 92.388 41.1908C92.3754 38.8506 92.9982 36.8061 94.2564 35.0573C95.5271 33.3085 97.2697 31.9434 99.484 30.962C101.698 29.9806 104.215 29.49 107.033 29.49C109.902 29.49 112.405 29.9806 114.544 30.962C116.696 31.9434 118.369 33.3085 119.564 35.0573C120.759 36.8061 121.376 38.8318 121.414 41.1342H113.582ZM125.967 36.7558V30.0184H157.71V36.7558H145.877V68.6689H137.8V36.7558H125.967ZM164.877 68.6689H156.12L169.463 30.0184H179.993L193.317 68.6689H184.561L174.879 38.8506H174.577L164.877 68.6689ZM164.329 53.4767H185.013V59.8556H164.329V53.4767ZM197.969 68.6689V30.0184H213.218C216.137 30.0184 218.628 30.5405 220.692 31.5848C222.768 32.6165 224.347 34.0822 225.429 35.982C226.523 37.8693 227.071 40.0899 227.071 42.644C227.071 45.2106 226.517 47.4187 225.41 49.2682C224.303 51.1051 222.698 52.5142 220.597 53.4956C218.509 54.4769 215.98 54.9676 213.011 54.9676H202.801V48.4H211.69C213.25 48.4 214.546 48.1862 215.577 47.7584C216.609 47.3306 217.376 46.689 217.88 45.8334C218.396 44.9779 218.653 43.9147 218.653 42.644C218.653 41.3607 218.396 40.2786 217.88 39.3979C217.376 38.5172 216.603 37.8504 215.558 37.3975C214.527 36.9319 213.224 36.6992 211.652 36.6992H206.141V68.6689H197.969ZM218.842 51.0799L228.448 68.6689H219.427L210.029 51.0799H218.842ZM231.373 36.7558V30.0184H263.117V36.7558H251.284V68.6689H243.206V36.7558H231.373Z"
              fill="black"
            />
            <path
              d="M300.611 34.7929L274.844 49.6694L300.611 64.5459L300.611 34.7929Z"
              fill="#FF02C0"
            />
          </svg>
        </button>
      </div>

      {/* Energy Source Buttons */}
      <div className="energy-list">
        {energySources.map((item) => (
          <div
            key={item.category}
            className={`energy-item ${
              item.category === "electric"
                ? "top-border"
                : item.category === "hydrogen"
            }`}
          >
            <button
              style={{ "--hover-bg": item.color }}
              onClick={() => {
                setCategory(item.category);
                console.log("item: " + item.category);
              }}
              className={`energy-button ${
                category === item.category ? "selected" : ""
              }`}
            >
              <span className="icon">
                <item.Icon className="icon-svg" />
              </span>
              <span className="text">{item.text}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Electric Pole */}
      <div className="electric-pole"></div>
    </div>
  );
};

export default BusStop;
