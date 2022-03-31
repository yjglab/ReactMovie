import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./routes/Main";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/movie/:id"}>
          <Detail />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};
// :id는 변수명.
export default App;
