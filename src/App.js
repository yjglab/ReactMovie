import Main from "./routes/Main";
import Detail from "./routes/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/movie/:id"} element={<Detail />} />
        <Route path={"/"} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
// :id는 변수명.
export default App;
