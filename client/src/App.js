import { useContext, useState } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router';
import { AnimatePresence } from 'framer-motion';
import { Context } from './Context';
import GlobalStyles from './GlobalStyles';
import Antiques from './pages/Antiques';
import Antique from './pages/Antique/Transition';
import Likes from './pages/Likes';
import Navbar from './Navbar';
import Post from './pages/Post';
import Chat from './pages/Chat';
import Rooms from './pages/Rooms';
import Posts from './pages/Posts';

export default function App () {
  const location = useLocation();
  const [roomId, setRoomId] = useState('GLOBAL_CHAT');
  const { scroll } = useContext(Context);

  return (
    <>
      <GlobalStyles scroll={scroll} />
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Redirect to="/antiques" />
          </Route>
          <Route exact path="/antiques">
            <Antiques route="/antiques" />
          </Route>
          <Route exact path="/collections/:user_id">
            <Antiques route="/antiques/users/" />
          </Route>
          <Route exact path="/antiques/new">
            <Post />
          </Route>
          <Route exact path="/antiques/:id">
            <Antique setRoomId={setRoomId} />
          </Route>
          <Route exact path="/likes">
            <Likes />
          </Route>
          <Route exact path="/chat">
            <Chat roomId={roomId} />
          </Route>
          <Route exact path="/rooms">
            <Rooms setRoomId={setRoomId} />
          </Route>
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </AnimatePresence>
    </>
  );
}
