import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  return (
    <>
       <BrowserRouter>
          <Switch>
            <Route component = { Home }  path="/" exact />
            <Route component = { Login }  path="/Login" />
          </Switch>
       </BrowserRouter>
    </>
  );
}

export default App;
