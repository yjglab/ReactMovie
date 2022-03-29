import { useState, useEffect } from "react";

const Hi = () => {
  useEffect(() => {
    console.log("hi rendered");
    return () => {
      console.log("bye");
    };
  }, []);
  return <h1>hi</h1>;
};
const App = () => {
  const [isShow, setIsShow] = useState(false);

  const onClickIsShow = () => setIsShow((p) => !p);

  return (
    <div>
      {isShow ? <Hi /> : null}
      <button onClick={onClickIsShow}>{isShow ? "hide" : "show"}</button>
    </div>
  );
};

export default App;
