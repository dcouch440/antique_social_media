import { Route, Switch, useLocation, Redirect } from "react-router";
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './GlobalStyles';
import AntiqueMock from './antiques-mock/antiques';
import AntiquesPage from "./pages/AntiquesPage";
import AntiquePage from "./pages/AntiquePage";
import Navbar from "./Nav/Navbar";

const App = () => {
  const location = useLocation();
  const antiqueData = AntiqueMock
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Redirect to="/antiques" />
          </Route>
          <Route exact path='/antiques'>
            <AntiquesPage antiques={antiqueData} />
          </Route>
          <Route exact path='/antiques/:id'>
            <AntiquePage antique={antiqueData}/>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
