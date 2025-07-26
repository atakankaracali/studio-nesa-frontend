import React from "react";
import "../styles/backgroundGlow.css";

const BackgroundGlow: React.FC = () => {
  return (
    <div className="glow-background">
      <div className="glow-circle glow-top-left"></div>
      <div className="glow-circle glow-bottom-right"></div>
      <div className="sparkle sparkle1"></div>
      <div className="sparkle sparkle2"></div>
    </div>
  );
};

export default BackgroundGlow;
