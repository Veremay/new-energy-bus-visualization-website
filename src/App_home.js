import React, { useState, useEffect, useContext } from "react";
import Home from "./components/Home";
import { ThemeProvider } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";
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
    // style={{
    //   backgroundColor: theme.bgColor,
    //   color: theme.fontColor,
    //   minHeight: "100vh",
    //   transition: "all 0.5s ease",
    // }}
    >
      <Home />
    </div>
  );
};

export default App;
