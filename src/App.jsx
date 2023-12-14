import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return <Question {...question} key={question.id} />;
        })}
      </div>
    </main>
  );
};
export default App;
