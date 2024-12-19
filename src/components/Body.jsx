import React, { useContext } from "react";
import "../styles/body.css";
import { ThemeContext } from "../ThemeContext";
import ScrollCar from "./car_motion";

const Body = () => {
  const { theme, category, setCategory } = useContext(ThemeContext);

  let content;
  // if (category === "tram") content = <p>有轨电车的相关信息</p>;
  if (category === "electric") content = <p>有轨电车的相关信息</p>;
  // else if (category === "trolleybus") content = <p>无轨电车的相关信息</p>;
  else if (category === "charcoal") content = <ScrollCar />;
  else if (category === "diesel") content = <p>柴油车的相关信息</p>;
  else if (category === "gasoline") content = <p>汽油车的相关信息</p>;
  else if (category === "coalgas") content = <p>煤气车的相关信息</p>;
  else if (category === "naturalgas") content = <p>天然气车的相关信息</p>;
  else if (category === "electric") content = <p>纯电动车的相关信息</p>;
  else if (category === "biodiesel") content = <p>生物柴油车的相关信息</p>;
  else if (category === "hydrogen") content = <p>氢能源车的相关信息</p>;

  return <div className="body">{content}</div>;
};

export default Body;
