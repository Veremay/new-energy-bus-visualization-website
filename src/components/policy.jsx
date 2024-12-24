import React, { useEffect, useRef } from "react";

const Policy = () => {
  const vizContainerRef = useRef(null);

  useEffect(() => {
    if (vizContainerRef.current) {
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
    }
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1734960881954"
      style={{ position: "relative" }}
      ref={vizContainerRef}
    >
      <noscript>
        <img
          alt="政策扶持下的新能源公交车发展"
          src="https://public.tableau.com/static/images/_1/_17349607484700/Sheet1/1_rss.png"
          style={{ border: "none" }}
        />
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="_17349607484700/Sheet1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/_1/_17349607484700/Sheet1/1.png"
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

export default Policy;
