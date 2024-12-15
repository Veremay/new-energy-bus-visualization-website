import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { ThemeProvider } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";

// function App() {
//   const [theme, setTheme] = useState({
//     bgColor: "#f0f0f0",
//     fontColor: "#000",
//   });
//   const [category, setCategory] = useState("tram");

//   useEffect(() => {
//     if (category === "tram") {
//       setTheme({ bgColor: "#35A7FF", fontColor: "#fff" });
//     } else if (category === "trolleybus") {
//       setTheme({ bgColor: "#57EB8D", fontColor: "#fff" });
//     } else if (category === "charcoal") {
//       setTheme({ bgColor: "#000", fontColor: "#aaa" });
//     } else if (category === "diesel") {
//       setTheme({ bgColor: "#000", fontColor: "#F9CE4E" });
//     } else if (category === "gasoline") {
//       setTheme({ bgColor: "#000", fontColor: "#F1E29E" });
//     } else if (category === "coalgas") {
//       setTheme({ bgColor: "#000", fontColor: "#DDD" });
//     } else if (category === "naturalgas") {
//       setTheme({ bgColor: "#000", fontColor: "#FFC4E1" });
//     } else if (category === "electric") {
//       setTheme({ bgColor: "#9AFF6B", fontColor: "#000" });
//     } else if (category === "biodiesel") {
//       setTheme({ bgColor: "#D798FF", fontColor: "#000" });
//     } else if (category === "hydrogen") {
//       setTheme({ bgColor: "#8AE0FF", fontColor: "#000" });
//     }
//   }, [category]);

//   return (
//     <div
//       style={{
//         backgroundColor: theme.bgColor,
//         color: theme.fontColor,
//         minHeight: "100vh",
//         transition: "all 0.5s ease",
//       }}
//     >
//       <Header onSelect={setCategory} />
//       {/* <Body category={category} /> */}
//     </div>
//   );
// }
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
