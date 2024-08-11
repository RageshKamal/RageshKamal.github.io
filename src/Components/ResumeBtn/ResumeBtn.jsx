import React from "react";
import "./ResumeBtn.css";
// import Resume from "../../images/Deepak_Mane_Resume.pdf";
const ResumeBtn = () => {
  return (
    <a
      // href={Resume}
      // download="Deepak_Mane_Resume.pdf"
      className="resumebtn"
      target="_blank"
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/16_MLIf6k1t0pv3JebUaS7fHgP6YQZ9EL/view"
        )
      }
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Resume
    </a>
  );
};

export default ResumeBtn;
