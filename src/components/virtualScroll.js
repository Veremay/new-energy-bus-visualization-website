import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

export default function VirtualScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref, // 自定义滚动容器
  });

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div
        ref={ref}
        style={{
          height: "300px", // 模拟滚动区域
          overflowY: "scroll",
          backgroundColor: "#f0f0f0",
          position: "absolute",
        }}
      >
        <div style={{ height: "auto" }}></div>
      </div>
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: scrollYProgress, // 动画绑定滚动进度
          scale: scrollYProgress,
          background: "red",
          width: 100,
          height: 100,
        }}
      />
    </div>
  );
}
