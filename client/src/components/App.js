import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-dom";
import Header from "./Header/Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home/Home";

const App = () => {
  // return (
  //   <>
  //     <BrowserRouter>
  //       <Switch>
  //         <Route exact path="/"></Route>
  //       </Switch>
  //     </BrowserRouter>
  //   </>
  // );

  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
    </>
  );
};

export default App;
