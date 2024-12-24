import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Tram1 } from "../assets/svg/tram1.svg";
import { ReactComponent as Connected_line } from "../assets/svg/connected-line1.svg";
import { ReactComponent as Tram2 } from "../assets/svg/tram2.svg";
import { ReactComponent as Tram2_wheels } from "../assets/svg/tram2-wheels.svg";
import { ReactComponent as Tram3 } from "../assets/svg/tram3.svg"
import { ReactComponent as Connected_line3 } from "../assets/svg/connected-line3.svg"
import { ReactComponent as Tram3_backwheels } from "../assets/svg/tram3-backwheels.svg"
import { ReactComponent as Tram3_frontwheels } from "../assets/svg/tram3-frontwheels.svg"
import { ReactComponent as Tram4 } from "../assets/svg/tram4.svg"
import { ReactComponent as Connected_line4 } from "../assets/svg/connected-line4.svg"
import { ReactComponent as Tram4_backwheels } from "../assets/svg/tram4-backwheels.svg"
import { ReactComponent as Tram4_frontwheels } from "../assets/svg/tram4-frontwheels.svg"
import { ReactComponent as Tram5 } from "../assets/svg/tram5.svg"
import { ReactComponent as Connected_line5 } from "../assets/svg/connected-line5.svg"
import { ReactComponent as Tram5_backwheels } from "../assets/svg/tram5-backwheels.svg"
import { ReactComponent as Tram5_frontwheels } from "../assets/svg/tram5-frontwheels.svg"
import { ReactComponent as Tram2_1 } from "../assets/svg/tram2-1.svg"
import { ReactComponent as Pollution} from "../assets/svg/electric-pollution.svg"
import { ReactComponent as Pollution2} from "../assets/svg/electric-pollution2.svg"
import { ReactComponent as People} from "../assets/svg/people-in-tram.svg"
import { ReactComponent as Tooltip} from "../assets/svg/tram1-tooltip.svg"


const ScrollCar = ({
  scrollContainerRef,
  setSelectedPopoutId,
  setIsModalVisible,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
  const tram1 = {
    body: <Tram1 />,
    connected_line: <Connected_line />,
    pollution: <Pollution />,
  };
  const tram2 = {
    body: <Tram2 />,
    connected_line: <Connected_line />,
    back_wheels: <Tram2_wheels />,
    pollution: <Pollution />,
  };
  const tram2_1 = { body: <Tram2_1 />, pollution: <Pollution /> };
  const tram3 = {
    body: <Tram3 />,
    connected_line: <Connected_line3 />,
    back_wheels: <Tram3_backwheels />,
    front_wheels: <Tram3_frontwheels />,
    pollution: <Pollution2 />,
  };
  const tram4 = {
    body: <Tram4 />,
    connected_line: <Connected_line4 />,
    back_wheels: <Tram4_backwheels />,
    front_wheels: <Tram4_frontwheels />,
    pollution: <Pollution2 />,
  };
  const tram5 = {
    body: <Tram5 />,
    connected_line: <Connected_line5 />,
    back_wheels: <Tram5_backwheels />,
    front_wheels: <Tram5_frontwheels />,
    pollution: <Pollution2 />,
  };
  const trams = [tram1, tram2, tram2_1, tram3, tram4, tram5];

  const speedFactor = 0.5;

  const carPosition = (() => {
    if (maxScroll === 0) {
      return 0; // 初始加载时，小车位置为起始点
    }
    if (scrollPosition < (maxScroll * 3) / 8) {
      return (
        (scrollPosition / ((maxScroll * 3) / 8)) * maxCarPosition * speedFactor
      );
    } else if (scrollPosition < (maxScroll * 4) / 8) {
      return (
        (((scrollPosition - (maxScroll * 3) / 8) / ((maxScroll * 1) / 8)) *
          maxCarPosition -
          500) *
        speedFactor
      );
    } else if (scrollPosition < (maxScroll * 5) / 8) {
      return (
        (((scrollPosition - (maxScroll * 4) / 8) / ((maxScroll * 1) / 8)) *
          maxCarPosition -
          500) *
        speedFactor
      );
    } else if (scrollPosition < (maxScroll * 6) / 8) {
      return (
        (((scrollPosition - (maxScroll * 5) / 8) / ((maxScroll * 1) / 8)) *
          maxCarPosition -
          500) *
        speedFactor
      );
    } else if (scrollPosition < (maxScroll * 7) / 8) {
      return (
        (((scrollPosition - (maxScroll * 6) / 8) / ((maxScroll * 1) / 8)) *
          maxCarPosition -
          500) *
        speedFactor
      );
    } else if (scrollPosition < maxScroll) {
      return (
        (((scrollPosition - (maxScroll * 7) / 8) / ((maxScroll * 1) / 8)) *
          maxCarPosition -
          500) *
        speedFactor
      );
    }

    return (maxCarPosition - 500) * speedFactor; // 最后一个位置
  })();

  useEffect(() => {
    if (maxScroll === 0) {
      setCurrentCarIndex(0); // 设置初始小车
    }
  }, [maxScroll]);

  // 切换小车逻辑
  useEffect(() => {
    if (scrollPosition < (maxScroll * 3) / 8) {
      setCurrentCarIndex(0);
    } else if (scrollPosition < (maxScroll * 4) / 8) {
      setCurrentCarIndex(1);
    } else if (scrollPosition < (maxScroll * 5) / 8) {
      setCurrentCarIndex(2);
    } else if (scrollPosition < (maxScroll * 6) / 8) {
      setCurrentCarIndex(3);
    } else if (scrollPosition < (maxScroll * 7) / 8) {
      setCurrentCarIndex(4);
    } else if (scrollPosition < maxScroll) {
      setCurrentCarIndex(5);
    }
  }, [scrollPosition]);

  //   const handleAnimationComplete = () => {
  //     if (currentCarIndex < trams.length - 1) {
  //       setCurrentCarIndex((prev) => prev + 1); // 跳到下一辆车
  //     }
  //   };
  useEffect(() => {
    if (carPosition >= maxCarPosition) {
      if (currentCarIndex < trams.length - 1) {
        setCurrentCarIndex((prev) => prev + 1); // 切换到下一辆小车
      }
    }
  }, [carPosition]);

  const handleClick = (popoutId) => {
    setSelectedPopoutId(popoutId); // 更新父组件状态
    setIsModalVisible(true); // 显示模态框
  };

  const handleMouseEnter = () => {
    console.log("hhhhhhhh");
    setIsHovered(true);
  };

  const [isVisible, setIsVisible] = useState(false); // 控制组件显示/隐藏

  // 切换显示状态
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);}
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "65px",
        left: currentCarIndex === 0 ? "280px" : 0,
        x: carPosition, // 绑定计算结果到x
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {trams.map((currentTram, tramIndex) =>
        tramIndex === currentCarIndex ? (
          <React.Fragment key={tramIndex}>
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
                marginLeft: tramIndex === 3 ? "-10%" : 0,
              }}
            >
              {currentTram?.connected_line}
            </motion.div>
            <motion.div
              style={{
                zIndex: 3,
                left: "-10%",
                // marginTop: tramIndex === 0 ? "19%" : 0
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {currentTram?.body}
            </motion.div>
            {tramIndex === 0 ? (
              <motion.div
                style={{ marginTop: "-28%", cursor: "pointer", zIndex: 4 }}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onClick={toggleVisibility}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} >
              <People stroke={isHovered ? "white" : "black"} stroke-width={isHovered ? 3 : 0}/>
              </motion.div>):null
            }
            
            {currentTram?.back_wheels && (
              <div
                style={{
                  marginTop:
                    tramIndex === 3
                      ? "-8%"
                      : tramIndex === 4
                      ? "-10%"
                      : tramIndex === 5
                      ? "-9%"
                      : "-6%",
                  marginLeft:
                    tramIndex === 3
                      ? "25%"
                      : tramIndex === 4
                      ? "30%"
                      : tramIndex === 5
                      ? "30%"
                      : "6%",
                  zIndex: 2,
                }}
              >
                {currentTram.back_wheels}
              </div>
            )}
            {currentTram?.front_wheels && (
              <div
                style={{
                  marginTop:
                    tramIndex === 3
                      ? "-13%"
                      : tramIndex === 4
                      ? "-13%"
                      : tramIndex === 5
                      ? "-13%"
                      : "-6%",
                  marginLeft:
                    tramIndex === 3
                      ? "-13%"
                      : tramIndex === 4
                      ? "-13%"
                      : tramIndex === 5
                      ? "-8%"
                      : "6%",
                  zIndex: 4,
                }}
              >
                {currentTram.front_wheels}
              </div>
            )}
            {currentTram?.pollution && (
              <motion.div
                style={{
                  marginTop:
                    tramIndex === 0
                      ? "6%"
                      : tramIndex === 1
                      ? "-10%"
                      : tramIndex === 2
                      ? "-6%"
                      : tramIndex === 3
                      ? "-19%"
                      : "-17%",
                  marginLeft:
                    tramIndex === 0
                      ? "-120%"
                      : tramIndex === 1
                      ? "-115%"
                      : tramIndex === 2
                      ? "-110%"
                      : tramIndex === 3
                      ? "-125%"
                      : "-120%",
                  cursor: "pointer",
                  zIndex: "2",
                }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1, // 动画持续时间
                  repeat: Infinity, // 无限循环
                  ease: "easeInOut", // 缓动效果
                }}
                // onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick("popout1")}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.3, // 动画持续时间
                    repeat: Infinity, // 无限循环
                    ease: "easeInOut", // 缓动效果
                  }}
                >
                  {tramIndex <= 2 ? <Pollution /> : <Pollution2 />}
                </motion.div>
              </motion.div>
            )}
          </React.Fragment>
          
        ):null)
      }
      {isVisible && currentCarIndex === 0 &&(
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: "absolute",
            top: "20px",
            left: "600px",
            zIndex: 7
          }}
        >
          <Tooltip />
        </motion.div>

      )}
    </motion.div>
  );
};

export default ScrollCar;
