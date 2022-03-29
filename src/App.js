import styles from "./App.module.css";
import { useState, useEffect } from "react";

const App = () => {
  const [cnt, setCnt] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCnt((p) => p + 1);
  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log("rendered All time");
  useEffect(() => console.log("rendered one time"), []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) console.log("keyboard on");
  }, [keyword]);
  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search..."
      />
      <h1 className={styles.title}>home</h1>
      <span>{cnt}</span>
      <button onClick={onClick}>click</button>
    </div>
  );
};

export default App;
