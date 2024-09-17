import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0);

  function handleScrollPercent() {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (totalScroll / windowHeight) * 100;
    setScrollPercent(scrollPercent);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);
    return () => {
      window.removeEventListener("scroll", handleScrollPercent);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="top-container">
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar bg-blue-500 h-2 fixed z-50"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
