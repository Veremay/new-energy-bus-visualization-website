import React, { useEffect, useRef } from "react";

const Ratio = () => {
  const vizContainerRef = useRef(null);

  useEffect(() => {
    if (vizContainerRef.current) {
      const vizElement = vizContainerRef.current.querySelector("object");
      if (vizElement) {
        if (vizContainerRef.current.offsetWidth > 800) {
          vizElement.style.width = "900px";
          vizElement.style.height = "727px";
        } else if (vizContainerRef.current.offsetWidth > 500) {
          vizElement.style.width = "900px";
          vizElement.style.height = "727px";
        } else {
          vizElement.style.width = "100%";
          vizElement.style.height = "777px";
        }

        const scriptElement = document.createElement("script");
        scriptElement.src =
          "https://public.tableau.com/javascripts/api/viz_v1.js";
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      }
    }
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1735030116391"
      style={{ position: "relative" }}
      ref={vizContainerRef}
    >
      <noscript>
        <img
          alt="Dashboard 1"
          src="https://public.tableau.com/static/images/_1/_17350300827350/Dashboard1/1_rss.png"
          style={{ border: "none" }}
        />
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="_17350300827350/Dashboard1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/_1/_17350300827350/Dashboard1/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
};

export default Ratio;
