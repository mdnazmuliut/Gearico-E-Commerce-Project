import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-dom";
import Header from "./Header/Header";
import GlobalStyles from "./GlobalStyles";
import SectionOne from "./Home/Sections/Sec-1";

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
      <SectionOne />
    </>
  );
};

export default App;
