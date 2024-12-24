import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Naturalgas1 } from "../assets/svg/naturalgas-up.svg";
import { ReactComponent as Frontwheels1 } from "../assets/svg/naturalgas-frontwheels.svg";
import { ReactComponent as Backwheels1 } from "../assets/svg/naturalgas-backwheels.svg";
import { ReactComponent as Naturalgas2 } from "../assets/svg/naturalgas-up2.svg";
import { ReactComponent as Frontwheels2 } from "../assets/svg/naturalgas-frontwheels2.svg";
import { ReactComponent as Backwheels2 } from "../assets/svg/naturalgas-backwheels2.svg";
import { ReactComponent as Pollution} from "../assets/svg/naturalgas-pollution.svg"

const ScrollCar = ({ scrollContainerRef, setSelectedPopoutId, setIsModalVisible }) => {
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

  const maxCarPosition = 3500; // 设置小车的最大移动范围
//   const carPosition = maxScroll / 5
//   const carPosition = Math.min((scrollPosition / maxScroll) * maxCarPosition, maxCarPosition);
  const [currentCarIndex, setCurrentCarIndex] = useState(0); // 当前显示的小车索引
  const car1 = {'body': <Naturalgas1 />, 'back_wheels': <Backwheels1 />, 'front_wheels': <Frontwheels1 />, 'pollution': <Pollution />};
  const car2 = {'body': <Naturalgas2 />, 'back_wheels': <Backwheels2 />, 'front_wheels': <Frontwheels2 />, 'pollution': <Pollution />};
  const cars = [car1, car2];

  const speedFactor = 0.5;

  const carPosition = (() => {
    if (maxScroll === 0) {
      return 0; // 初始加载时，小车位置为起始点
    }
    if (scrollPosition < (maxScroll * 2 / 3)) {
      return ((scrollPosition / (maxScroll * 2 / 3)) * maxCarPosition) * 0.4;
    } 
      return (((scrollPosition - (maxScroll * 2 / 3)) / (maxScroll * 1 / 3)) * maxCarPosition - 500) * speedFactor;
    
    
  })();
  

  useEffect(() => {
    if (maxScroll === 0) {
      setCurrentCarIndex(0); // 设置初始小车
    }
  }, [maxScroll]);

  // 切换小车逻辑
  useEffect(() => {
    if (scrollPosition < (maxScroll * 2 /3)) {
      setCurrentCarIndex(0); 
    } else if (scrollPosition < maxScroll) {
      setCurrentCarIndex(1); 
    } 
  }, [scrollPosition]);

  useEffect(() => {
    if (carPosition >= maxCarPosition) {
      if (currentCarIndex < cars.length - 1) {
        setCurrentCarIndex((prev) => prev + 1); // 切换到下一辆小车
      }
    }
  }, [carPosition]);

  const handleClick = (popoutId) => {
    setSelectedPopoutId(popoutId); // 更新父组件状态
    setIsModalVisible(true); // 显示模态框
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "85px",
        left: currentCarIndex === 0?"290px":0,
        x: carPosition, // 绑定计算结果到x
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {
        cars.map((currentCar, carIndex) => carIndex === currentCarIndex ?(

          <React.Fragment key={carIndex}>
            <motion.div
              animate={{
                scaleY: [1, 0.95, 1], 
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ 
                transformOrigin: "top",
                marginBottom: "-3%",
              }} >
              {currentCar?.connected_line}
            </motion.div>
            <motion.div
              style={{ 
                zIndex: 3,
                left: "-10%"
               }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              {currentCar?.body}
            </motion.div>
            {currentCar?.back_wheels && (
              <div style={{ 
                marginTop: carIndex === 0 ? "-9%":"-8%",
                marginLeft: carIndex === 0 ? "28%":"25%",
                zIndex: 2 }}>
                {currentCar.back_wheels}
              </div>
            )}
            {currentCar?.front_wheels && (
              <div style={{ 
                marginTop: carIndex === 0 ? "-12%": "-12%",
                marginLeft: carIndex === 0 ? "-16%": "-12%",
                zIndex: 4, }}>
                {currentCar.front_wheels}
              </div>
            )}
            {currentCar?.pollution && (
              <motion.div 
                style={{
                  marginTop: "-17%",
                  marginLeft: "-120%",
                  cursor: "pointer",
                  zIndex: "2"
                }}
                animate={{ opacity: [1, 0.3, 1]}}
                transition={{
                  duration: 1, // 动画持续时间
                  repeat: Infinity, // 无限循环
                  ease: "easeInOut", // 缓动效果
                }}
                onClick={() => handleClick("popout1")}
              >
                <motion.div 
                  animate={{y: [0, -4, 0]}}
                  transition={{
                    duration: 0.3, // 动画持续时间
                    repeat: Infinity, // 无限循环
                    ease: "easeInOut", // 缓动效果
                  }}>
                  <Pollution />
                </motion.div></motion.div>)}
            
          </React.Fragment>
          
        ):null)
      }
      
    </motion.div>
    
  );
};

export default ScrollCar;
