import React, { useEffect, useState } from 'react';
import { Grid, Header, SliderContainer } from './styles';
import Antiques from '../../components/Antiques'
import PageTransition from '../../Framer/PageTransition';
import Slider from '../../components/Slider';
import axios from 'axios';
import Antique from '../../components/Antique';

const AntiquesPage = () => {
  const [antiques, setAntiques] = useState([]);
  const [slider, setSlider] = useState(2);


  useEffect(() => {
    axios
      .get(`/antiques?LIMIT=${15}&OFFSET=${1}`, {withCredentials: true})
      .then(resp => setAntiques(resp.data))
      .catch(err => console.error(err));
  }, [setAntiques]);

  return (
    <PageTransition>
      <Header>Antiques</Header>
      <SliderContainer>
        <Slider onChange={n => setSlider(n)} min={2} max={5} />
      </SliderContainer>
      <Grid columns={slider}>
        <Antiques antiques={antiques} Component={Antique} />
      </Grid>
    </PageTransition>
  );

};

export default AntiquesPage;