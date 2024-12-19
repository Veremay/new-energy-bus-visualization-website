import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { ThemeProvider } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";
import { ReactSVG } from "react-svg";

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { theme, category, setCategory } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.bgColor,
        color: theme.fontColor,
        minHeight: "100vh",
        transition: "all 0.5s ease",
      }}
    >
      <Header />
      <Body />
    </div>
  );
};

export default App;
