import React from "react";
import "../styles/divider.css";

interface DividerProps {
  icon?: string;
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ icon = "🌿", text = "" }) => {
  return (
    <div className="divider-wrapper">
      <hr className="divider-line" />
      <span className="divider-icon">
        {icon} {text}
      </span>
      <hr className="divider-line" />
    </div>
  );
};

export default Divider;
