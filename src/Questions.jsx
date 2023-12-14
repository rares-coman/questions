import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <article>
      {questions.map((question) => {
        return <SingleQuestion {...question} key={question.id} />;
      })}
    </article>
  );
};

export default Questions;
