import React from "react";

import "./Todos.css";

const Todos = (props) => {
  const options = [
    {
      text: "1 ⭐",
      handler: props.actionProvider.handleFeedback,
      id: 1,
    },
    {
      text: "2 ⭐⭐",
      handler: props.actionProvider.handleFeedback,
      id: 2,
    },
    {
      text: "3 ⭐⭐⭐",
      handler: props.actionProvider.handleFeedback,
      id: 3,
    },
    {
      text: "4 ⭐⭐⭐⭐",
      handler: props.actionProvider.handleFeedback,
      id: 4,
    },
    {
      text: "5 ⭐⭐⭐⭐⭐",
      handler: props.actionProvider.handleFeedback,
      id: 5,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Todos;
