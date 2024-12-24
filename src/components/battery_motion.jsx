import React, { useEffect, useState } from "react";
import { motion, useAnimation  } from "framer-motion";
import { ReactComponent as Battery1 } from "../assets/svg/battery-up1.svg";
import { ReactComponent as Frontwheels1 } from "../assets/svg/battery-frontwheels1.svg";
import { ReactComponent as Backwheels1 } from "../assets/svg/battery-backwheels1.svg";
import { ReactComponent as Battery2 } from "../assets/svg/battery-up2.svg";
import { ReactComponent as Frontwheels2 } from "../assets/svg/battery-frontwheels1.svg";
import { ReactComponent as Backwheels2 } from "../assets/svg/battery-backwheels1.svg";
import { ReactComponent as Battery3 } from "../assets/svg/battery-up3.svg";
import { ReactComponent as Frontwheels3 } from "../assets/svg/battery-frontwheels.svg";
import { ReactComponent as Backwheels3 } from "../assets/svg/battery-backwheels.svg";
import { ReactComponent as Pollution} from "../assets/svg/battery-pollutin.svg"

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

  const maxCarPosition = 5700; // 设置小车的最大移动范围
//   const carPosition = maxScroll / 5
//   const carPosition = Math.min((scrollPosition / maxScroll) * maxCarPosition, maxCarPosition);
  const [currentCarIndex, setCurrentCarIndex] = useState(0); // 当前显示的小车索引
  const car1 = {'body': <Battery1 />, 'back_wheels': <Backwheels1 />, 'front_wheels': <Frontwheels1 />, 'pollution': <Pollution />};
  const car2 = {'body': <Battery2 />, 'back_wheels': <Backwheels2 />, 'front_wheels': <Frontwheels2 />, 'pollution': <Pollution />};
  const car3 = {'body': <Battery3 />, 'back_wheels': <Backwheels3 />, 'front_wheels': <Frontwheels3 />, 'pollution': <Pollution />};
  const cars = [car1, car2, car3];

  const speedFactor = 0.3;

  const carPosition = (() => {
    if (maxScroll === 0) {
      return 0; // 初始加载时，小车位置为起始点
    }
    if (scrollPosition < (maxScroll * 2 / 6)) {
      return ((scrollPosition / (maxScroll * 2 / 6)) * maxCarPosition) * speedFactor;
    } else if(scrollPosition < (maxScroll * 11 / 12)){
        // const segmentStart = maxScroll * 2 / 6;
        // const segmentEnd = maxScroll * 9 / 12;
        // const progress = (scrollPosition - segmentStart) / (segmentEnd - segmentStart);
        // return progress * (maxCarPosition *9 / 12) * speedFactor + (maxCarPosition *9 / 12) * speedFactor;    
      return Math.min((((scrollPosition - (maxScroll * 2 / 6)) / (maxScroll * 6 / 12)) * maxCarPosition - 700) * speedFactor,600);
    }
    // return ((scrollPosition - (maxScroll * 9 / 12)) / (maxScroll * 3 / 12)) * (maxCarPosition *9 / 12) * speedFactor + maxCarPosition * speedFactor;
    // return ((scrollPosition - (maxScroll * 9 / 12)) / (maxScroll * 3 / 12)) * (maxCarPosition / 3) * speedFactor + maxCarPosition * speedFactor;
    return ((scrollPosition - (maxScroll * 11 / 12)) / (maxScroll * 1 / 12) * maxCarPosition - 1000)* speedFactor; // 最后一个位置
  })();
  

  useEffect(() => {
    if (maxScroll === 0) {
      setCurrentCarIndex(0); // 设置初始小车
    }
  }, [maxScroll]);

  // 切换小车逻辑
  useEffect(() => {
    if (scrollPosition < (maxScroll * 2 /6)) {
      setCurrentCarIndex(0); 
    } else if (scrollPosition < (maxScroll * 11 / 12)) {
      setCurrentCarIndex(1); 
    } else{
      setCurrentCarIndex(2); 
    }
  }, [scrollPosition, maxScroll]);

//   const handleAnimationComplete = () => {
//     if (currentCarIndex < trams.length - 1) {
//       setCurrentCarIndex((prev) => prev + 1); // 跳到下一辆车
//     }
//   };
  useEffect(() => {
    if (carPosition >= maxCarPosition) {
      if (currentCarIndex < cars.length - 1) {
        setCurrentCarIndex((prev) => prev + 1); // 切换到下一辆小车
      }
    }
  }, [carPosition]);

  const handleClick = () => {
    alert("SVG clicked!");
  };

  const controls = useAnimation(); // 用于控制 Framer Motion 动画
  const [isFadingOut, setIsFadingOut] = React.useState(false);

  useEffect(() => {
    // 检测 carPosition 是否达到触发刹车动画的位置
    if (carPosition >= 600&&currentCarIndex===1) {
      // 模拟刹车效果
      controls.start({
        scaleX: [1, 0.95, 1], // 横向缩放模拟刹车
        scaleY: [1, 1.05, 1], // 纵向拉伸模拟惯性
        rotate: [0, -2, 1, 0], // 轻微前后倾斜
        transition: {
          duration: 0.6, // 整体动画持续时间
          ease: "easeOut", // 缓动效果
          times: [0, 0.3, 0.7, 1], // 关键帧时间
        },
      }).then(() => {
        // 刹车动画完成后触发淡出动画
        setIsFadingOut(true);
      });
    }
  }, [carPosition, 600, controls]);

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "90px",
        left: currentCarIndex === 0?"290px":0,
        x: carPosition, // 绑定计算结果到x
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transformOrigin: "center bottom",
        // opacity: isFadingOut && currentCarIndex === 1 ? 0 : 1,
      }}
      animate={controls}
    >
      <motion.div
        animate={{
        opacity: isFadingOut && currentCarIndex === 1 ? 0 : 1,
        transition: {
          duration: 1, // 淡出动画持续时间
          ease: "easeOut",
        },
        }}>
        
      {
        cars.map((currentCar, carIndex) => carIndex === currentCarIndex ?(

          <React.Fragment key={carIndex}>
            <motion.div
              style={{ 
                position: "relative",
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
                marginTop: carIndex <= 0 ? "-9%": carIndex === 1 ? "-9%":"-9%",
                marginLeft: carIndex <= 0 ? "25%":carIndex === 1 ? "20%":"23%",
                zIndex: 2 }}>
                {currentCar.back_wheels}
              </div>
            )}
            {currentCar?.front_wheels && (
              <div style={{ 
                position: "absolute",
                marginTop: carIndex <= 0 ? "-12%": carIndex === 1 ? "-13%":"-14%",
                marginLeft: carIndex <= 0 ? "2%": carIndex === 1 ? "1%":"0%",
                zIndex: 5, }}>
                {currentCar.front_wheels}
              </div>
            )}
            {currentCar?.pollution && (
              <motion.div 
                style={{
                  marginTop: carIndex === 2? "-19%":"-17%",
                  marginLeft: carIndex === 2? "-32%":"-28%",
                  cursor: "pointer",
                  zIndex: "2"
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
      
    </motion.div>
    
  );
};

export default ScrollCar;
