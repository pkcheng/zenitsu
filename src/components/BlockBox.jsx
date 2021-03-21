import React, { useState } from "react";

const BlockBox = ({ title, tetrominos }) => {
  return (
    <div className="block-box">
      <span>{title}</span>
      <div className="block"></div>
    </div>
  );
};

export default BlockBox;
