import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import Antiques from './Antiques';
import axios from 'axios';
import PageTransition from '../../Framer/PageTransition';

import {
  AntiquesList,
  PostsHeader,
  Page
} from './styles';

export default function Posts () {
  const { currentUser } = useContext(Context);
  const [antiques, setAntiques] = useState([]);

  useEffect(() => {
    if (!currentUser.id) {
      return;
    }
    axios
      .get(`/antiques/users/${currentUser.id}?NOLIMIT=true`, { withCredentials: true })
      .then(res => {
        if (res.status === 200) {
          setAntiques([...res.data]);
        }
      })
      .catch(err => console.log(err));
  }, [currentUser]);

  return (
    <PageTransition>
      <Page>
        <PostsHeader>
          Posts
        </PostsHeader>
        <AntiquesList>
          { antiques.length && <Antiques antiques={ antiques } /> }
        </AntiquesList>
      </Page>
    </PageTransition>
  );
}