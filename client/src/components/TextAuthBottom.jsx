import React from "react";
import { Link } from "react-router-dom";

const TextAuthBottom = ({ text, linkText, href }) => {
  return (
    <div className="flex gap-2 mt-5">
      <p>{text}</p>
      <Link to={href}>
        <span className="text-[#0496ff]">{linkText}</span>
      </Link>
    </div>
  );
};

export default TextAuthBottom;
