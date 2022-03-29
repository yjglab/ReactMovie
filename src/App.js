import styles from "./App.module.css";
import { useState, useEffect } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!toDo) return;
    setToDoList((p) => [...p, toDo]);

    setToDo("");
  };
  useEffect(() => console.log(toDoList), [toDoList]);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="작성..."
        />
        <button className={styles.test}>추가</button>
      </form>
    </div>
  );
};

export default App;
