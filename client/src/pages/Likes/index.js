import {
  AntiqueRows,
  LikesHeader,
  Page
} from './styles';
import {
  useContext,
  useEffect,
  useState
} from 'react';

import Antique from './Antique';
import ApiMapper from '../../components/ApiMapper';
import { Context } from '../../Context';
import PageTransition from '../../Framer/PageTransition';
import axios from 'axios';

export default function Likes () {
  const [antiques, setAntiques] = useState([]);
  const { currentUser } = useContext(Context);

  useEffect(() => {
    if (!currentUser.id) {
      return;
    }
    axios
      .get('/likes', { withCredentials: true })
      .then(res => {
        setAntiques([...res.data]);
      })
      .catch(err => console.log(err));
  }, [currentUser]);

  return (
    <PageTransition>
      <Page>
        <LikesHeader>
          Likes
        </LikesHeader>
        <AntiqueRows>
          {
            antiques.length >= 1 ?
              <ApiMapper
                callData={antiques}
                component={Antique}
              />:
              <h2 style={{ color: 'white', fontFamily: 'sans-serif' }}>No Antiques?  Get liking..</h2>
          }
        </AntiqueRows>
      </Page>
    </PageTransition>
  );
}