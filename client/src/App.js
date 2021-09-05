import { AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router';
import { Context } from './Context';
import GlobalStyles from './GlobalStyles';
import Navbar from './Navbar';
import Antique from './pages/Antique';
import Antiques from './pages/Antiques';
import Chat from './pages/Chat';
import Likes from './pages/Likes';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Rooms from './pages/Rooms';

export default function App () {
  const location = useLocation();
  const [roomId, setRoomId] = useState('GLOBAL_CHAT');
  const { scrollCSSValue } = useContext(Context);

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
            <Antique setRoomId={setRoomId} />
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
            <Chat roomId={roomId} />
          </Route>
          <Route
            exact
            path="/rooms"
          >
            <Rooms setRoomId={setRoomId} />
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
