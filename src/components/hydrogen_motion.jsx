import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Hydrogen } from "../assets/svg/hydrogen-up.svg";
import { ReactComponent as Frontwheels } from "../assets/svg/hydrogen-frontwheels.svg";
import { ReactComponent as Backwheels } from "../assets/svg/hydrogen-backwheels.svg";
import { ReactComponent as Pollution} from "../assets/svg/hydrogen-pollution.svg"
import Popout from "./Popout";

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

  const maxCarPosition = 2500; // 设置小车的最大移动范围
  const [currentCarIndex, setCurrentCarIndex] = useState(0); // 当前显示的小车索引
  const car1 = {'body': <Hydrogen />, 'back_wheels': <Backwheels />, 'front_wheels': <Frontwheels />, 'pollution': <Pollution />};
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
 
//   const handleClick = () => {
//     alert("SVG clicked!");
//   };
//   const [selectedPopoutId, setSelectedPopoutId] = useState(null); // 记录选择的Popout IDconst [selectedPopoutId, setSelectedPopoutId] = useState(null); // 记录选择的Popout ID
//   const [isModalVisible, setIsModalVisible] = useState(false);
//     const [selectedImage, setSelectedImage] = useState(null); // 记录选择的图片
//     const clickContainerRef = useRef(null); // 定义滚动容器引用
//   const handleClick = (popoutId) => {
//     if (clickContainerRef.current) {
//         setSelectedPopoutId(popoutId);
//         setIsModalVisible(true);
//       }
//     // setSelectedPopoutId(popoutId); // Set selected Popout ID
//     // setIsModalVisible(true); // Show the modal
//   };
//   const closeModal = () => {
//     setIsModalVisible(false);
//     setSelectedPopoutId(null); // Clear selected Popout ID
//   };
const handleClick = (popoutId) => {
    setSelectedPopoutId(popoutId); // 更新父组件状态
    setIsModalVisible(true); // 显示模态框
  };

  return (
    <>
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
                marginTop: "-7%",
                marginLeft: "26%",
                zIndex: 2 }}>
                {currentCar.back_wheels}
              </div>
            )}
            {currentCar?.front_wheels && (
              <div style={{ 
                marginTop: "-12.5%",
                marginLeft: "-12%",
                zIndex: 4, }}>
                {currentCar.front_wheels}
              </div>
            )}
            {currentCar?.pollution && (
              <motion.div 
                style={{
                  marginTop: "-11%",
                  marginLeft: "-115%",
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
      
      
      </motion.div></>
    
    
  );
};

export default ScrollCar;
