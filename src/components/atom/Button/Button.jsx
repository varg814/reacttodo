import React from "react";

const Button = ({ onClick, index, Icon, className }) => (
  <button className={className} onClick={() => onClick(index)}>
    <Icon />
  </button>
);

export default Button;
