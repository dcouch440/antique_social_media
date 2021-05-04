import React, { useContext, useEffect, useState } from 'react';
import { Grid, Header, PageContainer } from './styles';
import ApiMapper from '../../components/ApiMapper'
import PageTransition from '../../Framer/PageTransition';
import axios from 'axios';
import Antique from '../../components/Antique';
import Controls from './Controls';
import { Context } from '../../Context';

const AntiquesPage = () => {
  const { currentUser } = useContext(Context);
  const [antiques, setAntiques] = useState([]);
  const [slider, setSlider] = useState(3);


  useEffect(() => {
    console.log('lol')
    axios
      .get(`/antiques?LIMIT=${15}&OFFSET=${0}`, {withCredentials: true})
      .then(resp => setAntiques(resp.data))
      .catch(err => console.error(err));
  }, [setAntiques, currentUser.id]);

  return (
    <PageTransition>
      <PageContainer>
        <Controls setSlider={setSlider} count={slider}/>
        <Header>Antiques</Header>
        <Grid columns={slider}>
          <ApiMapper callData={antiques} component={Antique} />
        </Grid>
      </PageContainer>
    </PageTransition>
  );

};

export default AntiquesPage;