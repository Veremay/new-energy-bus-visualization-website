import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Coalgas } from "../assets/svg/coalgas-up.svg";
import { ReactComponent as Frontwheels } from "../assets/svg/coalgas-frontwheels.svg";
import { ReactComponent as Backwheels } from "../assets/svg/coalgas-backwheels.svg";
import { ReactComponent as Pollution} from "../assets/svg/coalgas-pollution.svg"

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
      setScrollPosition(scrollContainer.scrollTop); // 初始化时获取滚动位置
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  const maxCarPosition = 2500; // 设置小车的最大移动范围
  const [currentCarIndex, setCurrentCarIndex] = useState(0); // 当前显示的小车索引
  const car1 = {'body': <Coalgas />, 'back_wheels': <Backwheels />, 'front_wheels': <Frontwheels />, 'pollution': <Pollution />};
  const cars = [car1];

  const speedFactor = 0.5;

  const carPosition = (() => {
    if (maxScroll === 0) {
      return 0; // 初始加载时，小车位置为起始点
    }
    return scrollPosition / maxScroll * maxCarPosition * speedFactor; 
  })();
  

  useEffect(() => {
    if (maxScroll === 0) {
      setCurrentCarIndex(0); // 设置初始小车
    }
  }, [maxScroll]);

  const handleClick = () => {
    alert("SVG clicked!");
  };


//   // 切换小车逻辑
//   useEffect(() => {
//     if (scrollPosition < (maxScroll * 3 /8)) {
//       setCurrentCarIndex(0); 
//     } else if (scrollPosition < (maxScroll * 4 /8)) {
//       setCurrentCarIndex(1); 
//     } else if (scrollPosition < (maxScroll * 5 /8)) {
//       setCurrentCarIndex(2); 
//     }else if (scrollPosition < (maxScroll * 6 /8)) {
//       setCurrentCarIndex(3); 
//     } else if (scrollPosition < (maxScroll * 7 /8)) {
//       setCurrentCarIndex(4); 
//     } else if (scrollPosition < maxScroll) {
//       setCurrentCarIndex(5); 
//     }
//   }, [scrollPosition]);

// //   const handleAnimationComplete = () => {
// //     if (currentCarIndex < trams.length - 1) {
// //       setCurrentCarIndex((prev) => prev + 1); // 跳到下一辆车
// //     }
// //   };
//   useEffect(() => {
//     if (carPosition >= maxCarPosition) {
//       if (currentCarIndex < trams.length - 1) {
//         setCurrentCarIndex((prev) => prev + 1); // 切换到下一辆小车
//       }
//     }
//   }, [carPosition]);


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
                marginTop: "-10%",
                marginLeft: "30%",
                zIndex: 2 }}>
                {currentCar.back_wheels}
              </div>
            )}
            {currentCar?.front_wheels && (
              <div style={{ 
                marginTop: "-13%",
                marginLeft: "-8%",
                zIndex: 4, }}>
                {currentCar.front_wheels}
              </div>
            )}
            {currentCar?.pollution && (
              <motion.div 
                style={{
                  marginTop: "-21%",
                  marginLeft: "-130%",
                  cursor: "pointer",
                  zIndex: "5"
                }}
                animate={{ opacity: [1, 0.3, 1]}}
                transition={{
                  duration: 1, // 动画持续时间
                  repeat: Infinity, // 无限循环
                  ease: "easeInOut", // 缓动效果
                }}
                onClick={handleClick}
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
