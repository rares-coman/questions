import React, { useState } from "react";
import data from "./data";
import Question from "./Questions";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <Questions questions={questions} />
      </div>
    </main>
  );
};
export default App;
