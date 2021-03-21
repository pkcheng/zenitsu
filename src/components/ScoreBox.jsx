import React, { useState } from "react";

const ScoreBox = ({ score, level, lines }) => {
  return (
    <div className="score-box">
      <div className="score-section">
        <span>Score</span>
        <div className="box">
          <span>{score}</span>
        </div>
      </div>
      <div className="score-section">
        <span>Level</span>
        <div className="box">
          <span>{level}</span>
        </div>
      </div>
      <div className="score-section">
        <span>Lines</span>
        <div className="box">
          <span>{lines}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBox;
