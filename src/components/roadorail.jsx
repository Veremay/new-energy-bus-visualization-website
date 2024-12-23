import { ReactComponent as Rail } from '../assets/svg/rail.svg';
import { ReactComponent as Road } from '../assets/svg/Road.svg';
import { ReactComponent as Wire } from '../assets/svg/wire.svg';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Roadorrail = ({ scrollContainerRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  console.log(scrollPosition);

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;

    const handleScroll = () => {
      if (scrollContainer) {
        setScrollPosition(scrollContainer.scrollTop);
      }
    };

    if (scrollContainer) {
      setMaxScroll(scrollContainer.scrollHeight - scrollContainer.clientHeight);
      setScrollPosition(scrollContainer.scrollTop);
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  const isHalfway = scrollPosition >= maxScroll * 5/8;

  return (
    <div style={{ position: "fixed" }}>
      <div className="Wire"
        style={{position: "fixed", bottom: "370px", zIndex: 5}}>
        <Wire />
      </div>
      {/* Railway SVG */}
      <motion.div
        style={{
          position: "fixed",
          bottom: "20px"
        }}
        initial={{
          y: "0%", // 初始在原位
          opacity: 1, // 初始显示
        }}
        animate={{
          y: isHalfway ? "100%" : "0%", // 向下移出
          opacity: isHalfway ? 0 : 1
        }}
        transition={{ duration: 0.8 }}
      >
        <Rail />
      </motion.div>

      {/* Road SVG */}
      <motion.div
        style={{
          position: "fixed",
          bottom: "20px"
        }}
        initial={{
          y: "100%", // 初始在屏幕下方
          opacity: 0, // 初始隐藏
        }}
        animate={{
          y: isHalfway ? "0%" : "100%", // 从下方移入
          opacity: isHalfway ? 1 : 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <Road />
      </motion.div>
    </div>
  );
};

export default Roadorrail;
