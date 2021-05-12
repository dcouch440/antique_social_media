import { Route, Switch, useLocation, Redirect } from 'react-router';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from './GlobalStyles';
import Antiques from './pages/Antiques';
import Antique from './pages/Antique/Transition';
import Likes from './pages/Likes';
import Navbar from './Navbar';
import Post from './pages/Post';
import Chat from './pages/Chat';
import Rooms from './pages/Rooms';

export default function App () {
  const location = useLocation();
  const [roomId, setRoomId] = useState('GLOBAL_CHAT');

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Redirect to="/antiques"/>
          </Route>
          <Route exact path="/antiques">
            <Antiques />
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
        </Switch>
      </AnimatePresence>
    </>
  );
}
