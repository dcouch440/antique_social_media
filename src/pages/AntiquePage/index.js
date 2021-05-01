import React, { useEffect, useRef } from 'react';
import { Page } from './styles';
import Loading from '../../Framer/Loading';
import AntiqueInfo from './AntiqueInfo';
import { useParams , withRouter} from 'react-router-dom';
import PageTransition from '../../Framer/PageTransition';
import GoBackButton from './GoBackButton';
import axios from 'axios';
import LoadingSequence from '../../utils/loadingSequence';

const AntiquePage = props => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const sequence = useRef(false)
  const [antique, setAntique] = React.useState({});
  const handleClick = () => props.history.push('/antiques');

  useEffect(() => {
    axios.get(`/antiques/${id}`, {withCredentials: true})
    .then(res => {
      setAntique(res.data);
      LoadingSequence({condition: setLoading, ref: sequence})
    })
    .catch(err => console.error(err))
  }, [id, setAntique, setLoading]);

  return (
    <PageTransition>
      <Page>
        <Loading
          loadingState={loading}
          version="hourglass"
          render={
            <>
              <GoBackButton handleClick={handleClick} text={'Back  ▶'} />
              <AntiqueInfo antique={antique} />
            </>
          }
        />
      </Page>
    </PageTransition>
  )

}

export default withRouter(AntiquePage)