import React, { useEffect, useState } from 'react';
import { Grid, Header, PageContainer } from './styles';
import Antiques from '../../components/Antiques'
import PageTransition from '../../Framer/PageTransition';
import axios from 'axios';
import Antique from '../../components/Antique';
import Controls from './Controls';

const AntiquesPage = () => {
  const [antiques, setAntiques] = useState([]);
  const [slider, setSlider] = useState(3);


  useEffect(() => {
    axios
      .get(`/antiques?LIMIT=${15}&OFFSET=${0}`, {withCredentials: true})
      .then(resp => setAntiques(resp.data))
      .catch(err => console.error(err));
  }, [setAntiques]);

  return (
    <PageTransition>
      <PageContainer>
        <Controls setSlider={setSlider} count={slider}/>
        <Header>Antiques</Header>
        <Grid columns={slider}>
          <Antiques antiques={antiques} Component={Antique}/>
        </Grid>
      </PageContainer>
    </PageTransition>
  );

};

export default AntiquesPage;