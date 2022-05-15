import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux";

const TaskForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    console.log("handle activé");
    event.preventDefault();

    dispatch( addTask(text)  )
    

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">sub</button>
    </form>
  );
};

export default TaskForm;
