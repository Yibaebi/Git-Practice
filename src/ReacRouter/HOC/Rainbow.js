import React from "react";

const Rainbow = (WrappedComponent) => {
  const color = ["blue", "orange", "red", "grey", "pink"];
  const colorClass = color[Math.floor(Math.random() * (color.length - 1))];

  return (props) => {
    return (
      <div className={colorClass}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
