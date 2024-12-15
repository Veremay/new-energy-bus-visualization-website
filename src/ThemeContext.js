import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    bgColor: "#f0f0f0",
    fontColor: "#000",
  });

  const [category, setCategory] = useState("tram"); // 默认分类

  useEffect(() => {
    // 根据当前分类设置主题
    switch (category) {
      case "tram":
        setTheme({ bgColor: "#35A7FF", fontColor: "#fff" });
        break;
      case "trolleybus":
        setTheme({ bgColor: "#57EB8D", fontColor: "#fff" });
        break;
      case "charcoal":
        setTheme({ bgColor: "#000", fontColor: "#aaa" });
        break;
      case "diesel":
        setTheme({ bgColor: "#000", fontColor: "#F9CE4E" });
        break;
      case "gasoline":
        setTheme({ bgColor: "#000", fontColor: "#F1E29E" });
        break;
      case "coalgas":
        setTheme({ bgColor: "#000", fontColor: "#DDD" });
        break;
      case "naturalgas":
        setTheme({ bgColor: "#000", fontColor: "#FFC4E1" });
        break;
      case "electric":
        setTheme({ bgColor: "#9AFF6B", fontColor: "#000" });
        break;
      case "biodiesel":
        setTheme({ bgColor: "#D798FF", fontColor: "#000" });
        break;
      case "hydrogen":
        setTheme({ bgColor: "#8AE0FF", fontColor: "#000" });
        break;
      default:
        setTheme({ bgColor: "#f0f0f0", fontColor: "#000" });
    }
  }, [category]);

  return (
    <ThemeContext.Provider value={{ theme, category, setCategory }}>
      {children}
    </ThemeContext.Provider>
  );
};
