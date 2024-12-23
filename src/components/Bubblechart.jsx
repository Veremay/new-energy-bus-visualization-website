import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BubbleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { name: "木炭", value: 99.79, color: "#b3b3b3" },
      { name: "无轨电车", value: 89.09, color: "#7ed957" },
      { name: "柴油", value: 88.0, color: "#f7ce58" },
      { name: "天然气", value: 78.87, color: "#f4c2c2" },
      { name: "汽油", value: 80.0, color: "#f4e27e" },
      { name: "氢能源", value: 16.59, color: "#a8d0e6" },
      { name: "煤气", value: 90.0, color: "#d6d6d6" },
      { name: "纯电", value: 55.68, color: "#a5f3b9" },
      { name: "有轨电车", value: 50.0, color: "#81d4fa" },
    ];

    const width = 800;
    const height = 600;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const simulation = d3
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(0.5)) // Reduce repulsion
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3.forceCollide().radius((d) => d.value / 2 + 2)
      ); // Tighter packing

    const nodes = svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", (d) => d.value / 2) // Scale the radius proportionally
      .attr("fill", (d) => d.color);

    const labels = svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => `${d.name}\n${d.value}`)
      .style("text-anchor", "middle")
      .style("font-size", "12px")
      .style("pointer-events", "none");

    simulation.on("tick", () => {
      nodes.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });

    return () => {
      d3.select(chartRef.current).select("svg").remove();
    };
  }, []);

  return <div ref={chartRef}></div>;
};

export default BubbleChart;
