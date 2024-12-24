import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/ending.css";
import "typeface-inter";
import Ratio from "./ratio";
import Quotes from "./quotes";
import { ReactComponent as Overview } from "../assets/svg/overview.svg";
import { ThemeContext } from "../ThemeContext";

const EndingPage = () => {
  const location = useLocation(); // 获取当前路由
  const navigate = useNavigate();
  const { theme, category, setCategory } = useContext(ThemeContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPopoutId, setSelectedPopoutId] = useState(null); // 记录选择的Popout ID

  const isContentPage = location.pathname === "/content"; // 判断是否在 /content 页面
  if (!isContentPage) {
    document.body.style.backgroundColor = "#006fff";
    document.body.style.padding = 0;
  }

  const isEndingPage = location.pathname === "/ending";

  const handleButtonClick = (popoutId) => {
    setSelectedPopoutId(popoutId); // Set selected Popout ID
    setIsModalVisible(true); // Show the modal
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedPopoutId(null); // Clear selected Popout ID
  };

  return (
    <div className="flex-container">
      <div className="header">
        <div className="nav-back">
          <button
            className="arrow-button"
            onClick={() => {
              if (isEndingPage) navigate("/");
            }}
          >
            <p style={{ color: "#fff" }}>中国公交“源”来如此</p>
          </button>
          <p style={{ fontWeight: "bold" }}></p>
        </div>

        <div>
          <button
            className="quotation-button"
            onClick={() => handleButtonClick("popout4")}
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
        </div>
      </div>

      <div className="content-container">
        <div className="text-block">
          <p>
            在当下的城市街头，
            “宝宝巴士”新能源公交车以小巧可爱的外形、清新的色彩搭配以及环保的能源利用方式，成为城市公共交通中一道独特的风景线。
          </p>
          <p>
            从1899年第一条有轨电车线路的出现，到如今 “宝宝巴士”
            等新能源公交车的广泛应用，其背后折射出的是中国百年公交车能源变革的漫长历程。中国公交车的能源使用经历了多次重大转变，犹如一部厚重的史书，不仅记录着不同时代的科技发展水平，也展现着社会对环保的不懈追求。
          </p>
          <p
            style={{
              display: "inline-block",
            }}
          >
            历年中国公交车能源类型占比
            <button
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                border: "none",
                margin: 0,
                paddingTop: "0.1rem",
                cursor: "pointer",
                display: "inline-block",
                width: "20px",
                height: "20px",
              }}
              onClick={() => handleButtonClick("popout5")}
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
                  fill="#fff"
                  p-id="5629"
                ></path>
                <path
                  d="M285.5 720.9h101.4c20.9 0 37.9-17 37.9-37.9V407.8c0-20.9-17-37.9-37.9-37.9H285.5c-20.9 0-37.9 17-37.9 37.9V683c0 20.9 17 37.9 37.9 37.9z m267.7 0H631c27.4 0 49.7-22.3 49.7-49.7V167.6c0-27.4-22.3-49.7-49.7-49.7h-77.8c-27.5 0-49.7 22.3-49.7 49.7v503.6c0 27.4 22.3 49.7 49.7 49.7z m248.8 0h92.1c23.5 0 42.6-19.1 42.6-42.6V321.2c0-23.5-19.1-42.6-42.6-42.6H802c-23.5 0-42.6 19.1-42.6 42.6v357.1c0 23.5 19.1 42.6 42.6 42.6z"
                  fill="#fff"
                  p-id="5630"
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
                    width: "52%",
                    height: "85%",
                    // maxWidth: "1000px",
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

                  {selectedPopoutId === "popout4" && <Quotes id="4" />}
                  {selectedPopoutId === "popout5" && <Ratio id="5" />}
                </div>
              </div>
            )}
          </p>
        </div>

        <div></div>
      </div>

      <div className="buses">
        <Overview />
      </div>
    </div>
  );
};

export default EndingPage;
