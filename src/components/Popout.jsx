import React, { useEffect, useRef } from "react";

const Popout = () => {
  const vizContainerRef = useRef(null);

  useEffect(() => {
    const vizElement = vizContainerRef.current.querySelector("object");
    if (vizElement) {
      vizElement.style.width = "100%";
      vizElement.style.height = `${
        vizContainerRef.current.offsetWidth * 0.75
      }px`;

      const scriptElement = document.createElement("script");
      scriptElement.src =
        "https://public.tableau.com/javascripts/api/viz_v1.js";
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1734936703490"
      style={{
        position: "relative",
      }}
      ref={vizContainerRef}
    >
      <noscript>
        <img
          alt="百公里碳排放"
          src="https://public.tableau.com/static/images/bb/bbbus/Sheet1/1_rss.png"
          style={{ border: "none" }}
        />
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="bbbus/Sheet1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="no" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/bb/bbbus/Sheet1/1.png"
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

export default Popout;
