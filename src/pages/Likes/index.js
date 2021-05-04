import axios from 'axios';
import { useEffect, useState } from 'react';
import Antiques from '../../components/Antiques';
import PageTransition from '../../Framer/PageTransition';
import Antique from './Antique';
import { AntiqueRows, Page } from './styles';

const Likes = () => {
  const [antiques, setAntiques] = useState([])

  useEffect(() =>{
    axios
      .get('/likes', {withCredentials: true})
      .then(res => setAntiques(res.data))
      .catch(err => console.log(err));
  }, [])

  console.log(antiques);

  return (
    <PageTransition>
      <Page>
        <AntiqueRows>
          {
            antiques.length >= 1 ?
              <Antiques antiques={antiques} Component={Antique} />:
              <h1>No Antiques?  Get liking..</h1>
          }
        </AntiqueRows>
      </Page>
    </PageTransition>
  )

}
export default Likes;