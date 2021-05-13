import axios from 'axios';
import { useEffect, useState } from 'react';
import ApiMapper from '../../components/ApiMapper';
import PageTransition from '../../Framer/PageTransition';
import Antique from './Antique';
import { AntiqueRows, LikesHeader, Page } from './styles';

export default function Likes () {
  const [antiques, setAntiques] = useState([]);

  console.log(antiques);
  useEffect(() => {
    axios
      .get('/likes', { withCredentials: true })
      .then(res => {
        console.log(res);
        setAntiques([...res.data]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <PageTransition>
      <Page>
        <LikesHeader>
          Likes
        </LikesHeader>
        <AntiqueRows>
          {
            antiques.length >= 1 ?
              <ApiMapper callData={antiques} component={Antique} />:
              <h1>No Antiques?  Get liking..</h1>
          }
        </AntiqueRows>
      </Page>
    </PageTransition>
  );
}