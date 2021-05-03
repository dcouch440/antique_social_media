import axios from 'axios';
import { useEffect, useState } from 'react';
import Antiques from '../../components/Antiques';
import Antique from './Antique';
import { AntiqueRows, Page } from './styles';

const Likes = () => {
  const [antiques, setAntiques] = useState([])

  useEffect(() =>{
    axios
      .get('/likes', {withCredentials: true})
      .then(res => {
        setAntiques(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <Page>
      <AntiqueRows>
        <Antiques antiques={antiques} Component={Antique} />
      </AntiqueRows>
    </Page>
  )

}
export default Likes;