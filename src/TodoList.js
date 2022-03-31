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
    setToDoList((prevToDo) => [...prevToDo, toDo]);
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
        <button>추가</button>
      </form>
      <ul>
        {toDoList.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
