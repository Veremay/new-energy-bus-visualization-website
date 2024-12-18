import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Svg1 } from '../assets/svg/charcoal.svg';
import { ReactSVG } from "react-svg";

const ScrollCar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 监听滚动事件，计算滚动位置
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
  };

  useEffect(() => {
    // 添加滚动事件监听
    window.addEventListener("scroll", handleScroll);

    // 清理滚动事件监听
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 计算小车的位置
  const carPosition = scrollPosition * 0.5; // 设置移动的速度，调整比例值来控制移动速度

  return (
    <div style={{ height: "2000px" }}> {/* 模拟大页面高度以触发滚动 */}
      {/* 小车动画 */}
      <motion.div
        style={{
          position: "fixed",
          bottom: "20px", // 小车距离底部一定距离
          left: "20px",   // 小车初始位置
          zIndex: 1000,
        }}
        animate={{ x: carPosition }}  // 动画属性，x坐标随滚动位置变化
        transition={{ type: "spring", stiffness: 100, damping: 20 }}  // 弹簧动画效果
      >
        <Svg1 />
      </motion.div>
    </div>
  );
};

export default ScrollCar;
