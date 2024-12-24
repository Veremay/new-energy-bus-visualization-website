import React, { useContext, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import "typeface-inter";
import "../styles/contentpage.css";
import data from "../assets/data/data.json";
import BusStop from "./bus_stop";
import { ReactComponent as Road } from "../assets/svg/Road.svg";

import Electric_car from "./electric_motion";
import Roadorail from "./roadorail";
import Charcoal from "./charcoal_motion"
import Gasoline from "./gasoline_motion"
import Diesel from "./diesel_motion"
import Coalgas from "./coalgas_motion"
import Naturalgas from "./naturalgas_motion"
import Battery from "./battery_motion"
import Hydrogen from "./hydrogen_motion"
import Popout from "./Popout";
import BubbleChart from "./Bubblechart";
import Passenger1 from "./Passenger1";
import Policy from "./policy";

const ContentPage = () => {
  const { theme, category, setCategory } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const scrollContainerRef = useRef(null); // 定义滚动容器引用
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // 记录选择的图片
  const [selectedPopoutId, setSelectedPopoutId] = useState(null); // 记录选择的Popout ID

  // Set background color
  document.body.style.backgroundColor = theme.bgColor;
  document.body.style.padding = 0;    

  const styles = {
    styleA: "styleA", // First page style
    styleB: "styleB", // Subsequent pages style
  };

  // Handle wheel events for page navigation
  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     if (event.deltaY < 0 && currentPage > 0) {
  //       // Scroll up
  //       setCurrentPage((prev) => prev - 1);
  //     } else if (event.deltaY > 0 && currentPage < data[category].length - 1) {
  //       // Scroll down
  //       setCurrentPage((prev) => prev + 1);
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel);
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, [currentPage, category]);

  // Get current page data
  // const currentData = data[category][currentPage];

  const categoryData = data[category];
  console.log(categoryData);

  const getWrapperComponent = (category) => {
    switch (category) {
      case "electric":
        return <Electric_car scrollContainerRef={scrollContainerRef} setSelectedPopoutId={setSelectedPopoutId} setIsModalVisible={setIsModalVisible}/>;
      case "charcoal":
        return <Charcoal scrollContainerRef={scrollContainerRef} setSelectedPopoutId={setSelectedPopoutId} setIsModalVisible={setIsModalVisible}/>;
      case "gasoline":
        return <Gasoline scrollContainerRef={scrollContainerRef} setSelectedPopoutId={setSelectedPopoutId} setIsModalVisible={setIsModalVisible}/>;
      case "diesel":
        return <Diesel scrollContainerRef={scrollContainerRef} setSelectedPopoutId={setSelectedPopoutId} setIsModalVisible={setIsModalVisible}/>;
      case "coalgas":
        return <Coalgas scrollContainerRef={scrollContainerRef} setSelectedPopoutId={setSelectedPopoutId} setIsModalVisible={setIsModalVisible}/>;
      case "naturalgas":
        return <Naturalgas scrollContainerRef={scrollContainerRef} setSelectedPopoutId={setSelectedPopoutId} setIsModalVisible={setIsModalVisible}/>;
      case "battery":
        return <Battery scrollContainerRef={scrollContainerRef} setSelectedPopoutId={setSelectedPopoutId} setIsModalVisible={setIsModalVisible}/>;
      case "hydrogen":
        return <Hydrogen scrollContainerRef={scrollContainerRef} setSelectedPopoutId={setSelectedPopoutId} setIsModalVisible={setIsModalVisible}/>;
      default:
        return;
    }
  };

  const getBaseComponent = (category) => {
    if (category === "electric") {
      return <Roadorail scrollContainerRef={scrollContainerRef} />;
    } else if(category === "charcoal"){
      
    }
    else {
      return (
        <div className="Road" style={{ position: "fixed", bottom: "20px" }}>
          <Road />
        </div>
      );
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [category]);

  useEffect(() => {
    // Reset current page and scroll position on category change
    setCurrentPage(0);
    const scrollableContainer = document.querySelector(".scrollable-container");
    if (scrollableContainer) {
      scrollableContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto", // Ensure no scrolling animation
      });
    }
  }, [category]);

  const handleButtonClick = (popoutId) => {
    setSelectedPopoutId(popoutId); // Set selected Popout ID
    setIsModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedPopoutId(null); // Clear selected Popout ID
  };

  const handleStatClick = (imageSrc) => {
    setSelectedImage(imageSrc); // 更新选择的图片
  };

  return (
    <div className="flex-container" style={{ color: theme.fontColor }}>
      <div className="header">
        <div className="nav-back">
          {/* <button
            className="arrow-button"
            style={{ color: theme.fontColor, "--fill": theme.fontColor }}
          >
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.585938 8.83594L8.08594 1.375C8.4375 0.984375 9.02344 0.984375 9.41406 1.375C9.76562 1.72656 9.76562 2.3125 9.41406 2.66406L2.53906 9.5L9.375 16.375C9.76562 16.7266 9.76562 17.3125 9.375 17.6641C9.02344 18.0547 8.4375 18.0547 8.08594 17.6641L0.585938 10.1641C0.195312 9.8125 0.195312 9.22656 0.585938 8.83594Z" />
            </svg>

            <p>返回</p>
          </button> */}
          <p style={{ fontWeight: "bold" }}>从“铛铛车”到“宝宝巴士”</p>
        </div>

        <div>
          <button
            className="quotation-button"
            style={{ color: theme.fontColor, "--fill": theme.fontColor }}
            onClick={() => handleButtonClick("popout1")}
          >
            <svg
              t="1734679850423"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5083"
              width="42"
              height="42"
            >
              <path
                d="M512 85.333333C276.736 85.333333 85.333333 276.736 85.333333 512c0 69.888 18.389333 135.168 48.213334 193.408l-46.208 165.589333c-10.794667 38.485333 27.264 76.501333 65.706666 65.749334l165.76-46.250667C376.96 920.32 442.197333 938.666667 512 938.666667c235.264 0 426.666667-191.402667 426.666667-426.666667S747.264 85.333333 512 85.333333zM384 362.709333a85.333333 85.333333 0 0 1 85.333333 85.333334c0 1.834667-0.426667 3.541333-0.554666 5.376a31.146667 31.146667 0 0 1 0.554666 5.333333c0 5.845333-1.109333 144.810667-98.133333 217.6a31.914667 31.914667 0 0 1-44.8-6.4 32 32 0 0 1 6.4-44.8c32.170667-24.149333 50.005333-60.202667 59.946667-92.629333-2.901333 0.298667-5.76 0.853333-8.746667 0.853333a85.333333 85.333333 0 0 1 0-170.666667z m256 0a85.333333 85.333333 0 0 1 85.333333 85.333334c0 1.834667-0.426667 3.541333-0.554666 5.376a31.146667 31.146667 0 0 1 0.554666 5.333333c0 5.845333-1.109333 144.810667-98.133333 217.6a31.914667 31.914667 0 0 1-44.8-6.4 32 32 0 0 1 6.4-44.8c32.170667-24.149333 50.005333-60.202667 59.946667-92.629333-2.901333 0.298667-5.76 0.853333-8.746667 0.853333a85.333333 85.333333 0 0 1 0-170.666667z"
                p-id="5084"
              ></path>
            </svg>
          </button>

          {isModalVisible && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "2rem",
                  borderRadius: "8px",
                  width: "80%",
                  maxWidth: "800px",
                  position: "relative",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <button
                  onClick={closeModal}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  &times;
                </button>

                {/* 根据选择的Popout ID 渲染不同的Popout内容 */}
                {selectedPopoutId === "popout1" && <Popout id="1" />}
                {selectedPopoutId === "popout2" && <Passenger1 id="2" />}
                {selectedPopoutId === "popout3" && <Policy id="3" />}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="main-body">
        {/* <div className="content-container">
          <div className="text-part">
            <div className={styleClass}>
              <h1 className="data-title">{currentData.title}</h1>
              <p className="translation">{currentData.translation}</p>
              <h2>{currentData.subtitle}</h2>

              <div className="content-text">
                {currentData.content.length > 0 && (
                  <div>
                    {currentData.content.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="image-part">
            {currentData.image.length > 0 && (
              <div>
                {currentData.image.map((img, idx) => (
                  <img key={idx} src={img} alt={`image-${idx}`} />
                ))}
              </div>
            )}
          </div>
        </div> */}

        {/* v2.0 */}
        <div className="scrollable-container" ref={scrollContainerRef}>
          {categoryData.map((pageData, pageIndex) => (
            <div
              key={pageIndex}
              className={`content-section ${
                pageIndex === 0 ? styles.styleA : styles.styleB
              }`}
            >
              <div className="content-container">
                <div className="text-part">
                  <div>
                    <div className="data-title">
                      <h1 className="large-title">{pageData.title}</h1>
                      <p className="translation">{pageData.translation}</p>
                    </div>

                    <h2>{pageData.subtitle}</h2>

                    <div className="content-text">
                      {pageData.content.length > 0 && (
                        <div>
                          {pageData.content.map((text, idx) => (
                            <p key={idx}>
                              {text}
                              {/* 在category="battery"和page=4时，末尾加按钮 */}
                              {category === "battery" && pageIndex === 4 && (
                                <button
                                  style={{
                                    backgroundColor: "rgba(0,0,0,0)",
                                    border: "none",
                                    margin: 0,
                                    paddingTop: "0.1rem",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    // handleStatClick(`statistic_${idx + 1}.png`)
                                    handleButtonClick(`popout${idx + 2}`)
                                  } // 根据图片索引选择不同图片
                                >
                                  <svg
                                    t="1734945717887"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="5628"
                                    width="20"
                                    height="20"
                                  >
                                    <path
                                      d="M900.7 812.3H271c-52.8 0-95.6-42.8-95.6-95.6V168.2c0-26.6-21.5-48.1-48.1-48.1s-48.1 21.5-48.1 48.1v548.6c0 105.9 85.8 191.7 191.7 191.7h629.7c26.6 0 48.1-21.5 48.1-48.1 0.1-26.5-21.5-48.1-48-48.1z"
                                      fill="#000000"
                                      p-id="5629"
                                    ></path>
                                    <path
                                      d="M285.5 720.9h101.4c20.9 0 37.9-17 37.9-37.9V407.8c0-20.9-17-37.9-37.9-37.9H285.5c-20.9 0-37.9 17-37.9 37.9V683c0 20.9 17 37.9 37.9 37.9z m267.7 0H631c27.4 0 49.7-22.3 49.7-49.7V167.6c0-27.4-22.3-49.7-49.7-49.7h-77.8c-27.5 0-49.7 22.3-49.7 49.7v503.6c0 27.4 22.3 49.7 49.7 49.7z m248.8 0h92.1c23.5 0 42.6-19.1 42.6-42.6V321.2c0-23.5-19.1-42.6-42.6-42.6H802c-23.5 0-42.6 19.1-42.6 42.6v357.1c0 23.5 19.1 42.6 42.6 42.6z"
                                      fill="#000000"
                                      p-id="5630"
                                    ></path>
                                  </svg>
                                </button>
                              )}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="image-part">
                  {pageData.image.length > 0 && (
                    <div>
                      {pageData.image.map((img, idx) => (
                        <img
                          key={idx}
                          src={
                            // // 条件判断，根据category和page决定图片来源
                            // category === "battery" && pageIndex === 4
                            //   ? require(`../assets/images/${selectedImage}`) // category="battery"且page=4时的图片路径
                            //   : require(`../assets/images/${img}`) // 默认路径
                            require(`../assets/images/${img}`)
                          }
                          alt={`image-${idx}`}
                          className="content-image"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {getBaseComponent(category)}
        {getWrapperComponent(category)}
        <div className="bus-part" animate={{}}>
          <div className="bus-stop">
            <BusStop />
          </div>
        </div>
        {/* <div
          style={{
            transform: "scale(0.5)", // 缩小到 50%
            transformOrigin: "center", // 缩放的中心点
            zIndex: 5
          }}>
          <BusStop />
        </div> */}
      </div>
    </div>
  );
};

export default ContentPage;
