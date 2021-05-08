import axios from 'axios';
import { useEffect, useState } from 'react';
import ApiMapper from '../../components/ApiMapper';
import PageTransition from '../../Framer/PageTransition';
import Antique from './Antique';
import { AntiqueRows, Page } from './styles';

export default function Likes ()
{
  const [antiques, setAntiques] = useState([]);

  useEffect(() => {
    axios
      .get('/likes', {withCredentials: true})
      .then(res => setAntiques(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <PageTransition>
      <Page>
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