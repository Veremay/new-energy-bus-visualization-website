import { ReactComponent as Road } from '../assets/svg/longroad.svg';
import { ReactComponent as Wire } from '../assets/svg/wire.svg';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Longroad } from "../assets/svg/longroad.svg";

const Roadorrail = ({ scrollContainerRef }) => {
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
      setScrollPosition(scrollContainer.scrollTop); // 初始化时获取滚动位置
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  const carPosition = (() => {
    if (maxScroll === 0) {
        return 0; // 初始加载时，小车位置为起始点
      }
      return null;
    //   return -scrollPosition / 2500 * maxCarPosition * 0.5; 
  })();

  return (
      <motion.div
        style={{
          position: "fixed", bottom: "20px",
          left: carPosition, // 绑定计算结果到x
        }}
      >
        <Longroad />
      </motion.div>)
};

export default Roadorrail;
