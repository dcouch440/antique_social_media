import React, { useEffect, useRef } from 'react';
import { Page } from './styles';
import Loading from '../../Framer/LoadingModules/Loading';
import AntiqueInfo from './AntiqueInfo';
import { useHistory, useParams } from 'react-router-dom';
import PageTransition from '../../Framer/PageTransition';
import GoBackButton from './GoBackButton';
import axios from 'axios';
import loadingSequence from '../../utils/loadingSequence';

const AntiquePage = props => {
  const { id } = useParams();
  const history = useHistory()
  const [loading, setLoading] = React.useState(true);
  const sequence = useRef(false)
  const [antique, setAntique] = React.useState({});

  const handleClick = () => history.goBack();

  useEffect(() => {

    axios.get(`/antiques/${id}`, {withCredentials: true})
      .then(res => {
        setAntique(res.data);
        loadingSequence({condition: setLoading, ref: sequence, timeBeforeCheck: 1500})
      })
      .catch(err => console.error(err));

  }, [id, setAntique, setLoading]);

  return (
    <PageTransition>
      <Page>
        <GoBackButton handleClick={handleClick} text={'Back  ▶'} />
        <Loading
          loadingState={loading}
          version="MagnaGlass"
          afterLoad={ <AntiqueInfo antique={antique} /> }
        />
      </Page>
    </PageTransition>
  );

};

export default AntiquePage