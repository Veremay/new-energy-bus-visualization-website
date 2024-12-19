import React, { useState, useEffect, useRef } from "react";
import { motion, px, useScroll, useTransform } from "framer-motion";
import { ReactComponent as Charcoal_up } from '../assets/svg/charcoal-up.svg';
import { ReactComponent as Front_wheels } from '../assets/svg/charcoal-front-wheels1.svg';
import { ReactComponent as Back_wheels } from '../assets/svg/charcoal-back-wheels1.svg';
import { ReactSVG } from "react-svg";

const ScrollCar = () => {
  const ref = useRef(null);

  // 获取页面滚动的进度
  const { scrollYProgress } = useScroll({
    container: ref, // 自定义监听滚动的容器
  });

  // 根据滚动进度，将小车向右移动
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, 880]); // 0 到 500px 向右移动

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
          bottom: "85px",
          left: "20px",
          x: xTransform, // 随滚动向右移动
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <motion.div
            style={{
              zIndex: 3,
            }}
            animate={{
              y: [0, -8, 0], // 实现上下跳动的关键帧
            }}
            transition={{
              duration: 0.3, // 跳动的频率
              repeat: Infinity, // 无限循环
              ease: "easeInOut", // 缓动效果
            }}
          >
            <Charcoal_up />
          </motion.div>
          <div
            style={{
              marginTop: "-10%", 
              // position: "relative",
              zIndex: 4,
              marginLeft: "-18%"
            }}>
            <Front_wheels />
          </div>
          <div
            style={{
              marginTop: "-13%", 
              position: "relative",
              zIndex: 2,
              marginLeft: "6%"
              // bottom: "20px", // 小车距离底部一定距离
              // left: "90px",   // 小车初始位置
              // zIndex: 1000,
            }}
            // animate={{ x: carPosition }}  // 动画属性，x坐标随滚动位置变化
            // transition={{ type: "spring", stiffness: 100, damping: 20 }}  // 弹簧动画效果
          >
            <Back_wheels />
          </div>
      </motion.div>
    </div>
  );
};

export default ScrollCar;