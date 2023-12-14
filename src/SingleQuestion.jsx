import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            return setIsShowing(!isShowing);
          }}
        >
          {!isShowing ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {isShowing && <p>{info}</p>}
    </div>
  );
};

export default SingleQuestion;
