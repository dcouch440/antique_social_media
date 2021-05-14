import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import PageTransition from '../../Framer/PageTransition';
import Antiques from './Antiques';
import { AntiquesList, PostsHeader, Page } from './styles';

export default function Posts () {
  const { currentUser } = useContext(Context);
  const [antiques, setAntiques] = useState([]);

  useEffect(() => {
    if (!currentUser.id) {
      return;
    }
    axios
      .get(`users/${currentUser.id}/antiques`, { withCredentials: true })
      .then(res => {
        console.log(res.data);
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