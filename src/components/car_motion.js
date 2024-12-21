import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Charcoal_up } from "../assets/svg/charcoal-up.svg";
import { ReactComponent as Front_wheels } from "../assets/svg/charcoal-front-wheels1.svg";
import { ReactComponent as Back_wheels } from "../assets/svg/charcoal-back-wheels1.svg";

const ScrollCar = ({ scrollContainerRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;

    const handleScroll = () => {
      if (scrollContainer) {
        setScrollPosition(scrollContainer.scrollTop);
      }
    };

    if (scrollContainer) {
      setMaxScroll(scrollContainer.scrollHeight - scrollContainer.clientHeight); // 计算最大滚动距离
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  const maxCarPosition = 1500; // 设置小车的最大移动范围
  const carPosition = Math.min((scrollPosition / maxScroll) * maxCarPosition, maxCarPosition);

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "85px",
        left: "20px",
        x: carPosition, // 绑定计算结果到x
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{ zIndex: 3 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Charcoal_up />
      </motion.div>
      <div style={{ marginTop: "-10%", zIndex: 4, marginLeft: "-18%" }}>
        <Front_wheels />
      </div>
      <div style={{ marginTop: "-13%", zIndex: 2, marginLeft: "6%" }}>
        <Back_wheels />
      </div>
    </motion.div>
  );
};

export default ScrollCar;
