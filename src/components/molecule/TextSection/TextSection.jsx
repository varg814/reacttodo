import React from "react";

export default function TextSection({ taskText, taskTimeAdded, className }) {
  return (
    <div className={className}>
      <h1>{taskText}</h1>
      <p> at {taskTimeAdded}</p>
    </div>
  );
}
