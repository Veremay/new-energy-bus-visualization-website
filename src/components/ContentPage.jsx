import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import "typeface-inter";
import "../styles/contentpage.css";
import data from "../assets/data/data.json";
import BusStop from "./bus_stop";

const ContentPage = () => {
  const { theme, category, setCategory } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

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

  return (
    <div className="flex-container" style={{ color: theme.fontColor }}>
      <div className="header">
        <div className="nav-back">
          <button
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
          </button>
        </div>
        <div>
          <button
            className="quotation-button"
            style={{ color: theme.fontColor, "--fill": theme.fontColor }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" />
              <path
                d="M20.645 11.792H22.053V27.5H20.249V13.992C19.259 15.004 18.027 15.708 16.553 16.148V14.344C17.257 14.146 18.005 13.838 18.753 13.398C19.501 12.914 20.117 12.386 20.645 11.792Z"
                fill="white"
              />
            </svg>
          </button>
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
        <div className="scrollable-container">
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
                    <h1 className="data-title">{pageData.title}</h1>
                    <p className="translation">{pageData.translation}</p>
                    <h2>{pageData.subtitle}</h2>

                    <div className="content-text">
                      {pageData.content.length > 0 && (
                        <div>
                          {pageData.content.map((text, idx) => (
                            <p key={idx}>{text}</p>
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
                          src={require(`../assets/images/${img}`)}
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

        <div className="bus-part">
          <div className="bus-stop">
            <BusStop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
