import { Route, Switch, useLocation, Redirect } from "react-router";
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './GlobalStyles';
import Antiques from "./pages/Antiques";
import Antique from "./pages/Antique";
import Likes from './pages/Likes';
import Navbar from "./Navbar";
import Socket from './Socket';
import Post from "./pages/Post";

const App = () => {
  const location = useLocation();
  Socket();

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <Redirect to='/antiques'/>
          </Route>
          <Route exact path='/antiques'>
            <Antiques />
          </Route>
          <Route exact path='/antiques/new'>
            <Post />
          </Route>
          <Route exact path='/antiques/:id'>
            <Antique />
          </Route>
          <Route exact path='/likes'>
            <Likes />
          </Route>

        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
