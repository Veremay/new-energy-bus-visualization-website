import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContentPage from "./components/ContentPage";
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
    <Router>
      <Routes>
        {/* Home 页 */}
        <Route path="/" element={<Home />} />
        {/* Body 页 */}
        <Route path="/content" element={<ContentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
