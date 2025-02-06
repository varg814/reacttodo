import { useState, useEffect } from "react";
import CheckedIcon from "../../atom/CheckedIcon/CheckedIcon";
import UncheckedIcon from "../../atom/UncheckedIcon/UncheckedIcon";
import DeleteIcon from "../../atom/DeleteIcon/DeleteIcon";
import Form from "../Form/Form";
import Ol from "../Ol/Ol";

function ContentSection() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const newTaskWithTime = {
        text: newTask,
        isChecked: false,
        timeAdded: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      const updatedTasks = [...tasks, newTaskWithTime];
      setTasks(updatedTasks);
      setNewTask("");
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function checkTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isChecked: !task.isChecked } : task
    );
    setTasks(updatedTasks);
  }
  return (
    <>
      <div className="content">
        <Form
          className="form"
          placeholder="Note"
          value={newTask}
          onChange={handleInputChange}
          onClick={addTask}
        />
        <Ol
          tasks={tasks}
          checkTask={checkTask}
          deleteTask={deleteTask}
          CheckedIcon={CheckedIcon}
          UncheckedIcon={UncheckedIcon}
          DeleteIcon={DeleteIcon}
        />
      </div>
    </>
  );
}

export default ContentSection;
