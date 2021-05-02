import React, { useEffect, useState } from 'react';
import { Grid, Header } from './styles';
import Antiques from './Antiques'
import PageTransition from '../../Framer/PageTransition';
import axios from 'axios';

const AntiquesPage = () => {
  const [antiques, setAntiques] = useState([]);

  useEffect(() => {
    axios
      .get('/antiques', {withCredentials: true})
      .then(resp => setAntiques(resp.data))
      .catch(err => console.error(err));
  }, [setAntiques]);

  return (
    <PageTransition>
      <Header>Antiques</Header>
      <Grid>
        <Antiques antiques={antiques} />
      </Grid>
    </PageTransition>
  );

};

export default AntiquesPage;