import React from "react";
import Li from "../Li/Li";

export default function Ol({ tasks, checkTask, deleteTask, CheckedIcon, UncheckedIcon, DeleteIcon }) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <Li
          key={index}
          taskText={task.text}
          taskTimeAdded={task.timeAdded} 
          className="text"
          className1="buttons"
          className2="check"
          className3="delete"
          onClick1={() => checkTask(index)}
          onClick2={() => deleteTask(index)}
          Icon1={task.isChecked ? CheckedIcon : UncheckedIcon}
          Icon2={DeleteIcon}
        />
      ))}
    </ol>
  );
}
