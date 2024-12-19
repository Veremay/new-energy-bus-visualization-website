import React, { useContext } from "react";
import "../styles/header.css";
import { ThemeContext } from "../ThemeContext";

const Header = () => {
  const { theme, category, setCategory } = useContext(ThemeContext);

  const navItems = [
    { category: "tram", label: "有轨电车" },
    { category: "trolleybus", label: "无轨电车" },
    { category: "charcoal", label: "木炭" },
    { category: "diesel", label: "柴油" },
    { category: "gasoline", label: "汽油" },
    { category: "coalgas", label: "煤气" },
    { category: "naturalgas", label: "天然气" },
    { category: "electric", label: "纯电动" },
    { category: "biodiesel", label: "生物柴油" },
    { category: "hydrogen", label: "氢能源" },
  ];

  return (
    <header className="header">
      <div className="header_logo" style={{ color: theme.fontColor }}>
        <p>从“铛铛车”到“宝宝巴士”</p>
      </div>
      <nav>
        <ul className="nav">
          {navItems.map((item) => (
            <div
              key={item.category}
              className="nav_item"
              onClick={() => setCategory(item.category)}
            >
              <p>{item.label}</p>
              {/* 下划线 */}
              {category === item.category && (
                <div
                  className="bar"
                  style={{
                    backgroundColor: theme.fontColor,
                  }}
                ></div>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
