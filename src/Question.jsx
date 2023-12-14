import React, { useState } from "react";

const Question = ({ info, title }) => {
  const [isShowing, setIsShowing] = useState(true);

  const toggleHandler = () => {
    setIsShowing(!isShowing);
  };

  return (
    <header>
      <div className="question">
        <header>
          <h5>{title}</h5>
          <button className="question-btn" onClick={toggleHandler}>
            <span>{isShowing ? "+" : "-"}</span>
          </button>
        </header>
        {!isShowing && <p>{info}</p>}
      </div>
    </header>
  );
};

export default Question;
