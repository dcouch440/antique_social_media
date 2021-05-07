import { Route, Switch, useLocation, Redirect } from "react-router";
import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Context } from './Context';
import GlobalStyles from './GlobalStyles';
import Antiques from "./pages/Antiques";
import Antique from "./pages/Antique";
import Likes from './pages/Likes';
import Navbar from "./Navbar";
import Post from "./pages/Post";
import Chat from "./pages/Chat";
import { useContext } from "react";

const App = () => {
  const location = useLocation();
  const { inTransition, setInTransition } = useContext(Context);

  useEffect(() => {
    setInTransition(true);
  }, [location.key, setInTransition]);

  return (
    <>
      <GlobalStyles attr={{inTransition}} />
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
          <Route exact path='/chat'>
            <Chat />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
