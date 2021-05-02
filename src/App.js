import { Route, Switch, useLocation, Redirect } from "react-router";
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './GlobalStyles';
import AntiquesPage from "./pages/AntiquesPage";
import AntiquePage from "./pages/AntiquePage";
import Navbar from "./Navbar";
import Socket from './Socket';

const App = () => {
  const location = useLocation();
  Socket();

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
            <AntiquesPage />
          </Route>
          <Route exact path='/antiques/:id'>
            <AntiquePage />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
