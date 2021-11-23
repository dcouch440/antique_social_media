import {
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router';

import { AnimatePresence } from 'framer-motion';
import Antique from './pages/Antique';
import Antiques from './pages/Antiques';
import Chat from './pages/Chat';
import GlobalStyles from './GlobalStyles';
import Likes from './pages/Likes';
import Navbar from './Navbar';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Rooms from './pages/Rooms';
import { UIContext } from './context/UI';
import { useContext } from 'react';

export default function App () {
  const location = useLocation();
  const { scrollCSSValue } = useContext(UIContext);

  return (
    <>
      <GlobalStyles scroll={scrollCSSValue} />
      <Navbar />
      <AnimatePresence>
        <Switch
          key={location.key}
          location={location}
        >
          <Route
            exact
            path="/"
          >
            <Redirect to="/antiques" />
          </Route>
          <Route
            exact
            path="/antiques"
          >
            <Antiques route="/antiques" />
          </Route>
          <Route
            exact
            path="/collections/:user_id"
          >
            <Antiques route="/antiques/users/" />
          </Route>
          <Route
            exact
            path="/antiques/new"
          >
            <Post />
          </Route>
          <Route
            exact
            path="/antiques/:id"
          >
            <Antique />
          </Route>
          <Route
            exact
            path="/likes"
          >
            <Likes />
          </Route>
          <Route
            exact
            path="/chat"
          >
            <Chat />
          </Route>
          <Route
            exact
            path="/rooms"
          >
            <Rooms />
          </Route>
          <Route
            exact
            component={Posts}
            path="/posts"
          />
        </Switch>
      </AnimatePresence>
    </>
  );
}
