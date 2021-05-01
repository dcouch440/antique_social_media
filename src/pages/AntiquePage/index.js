import React, { useEffect, useRef } from 'react';
import { Page } from './styles';
import Loading from '../../Framer/Loading';
import AntiqueInfo from './AntiqueInfo';
import { useParams , withRouter} from 'react-router-dom';
import PageTransition from '../../Framer/PageTransition';
import GoBackButton from './GoBackButton';
import axios from 'axios';

const AntiquePage = props => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const sequence = useRef(false)
  const [antique, setAntique] = React.useState({});
  const handleClick = () => props.history.push('/antiques');

  setTimeout(() => {
    sequence.current = true;
  }, 1000)

  useEffect(() => {
    axios.get(`/antiques/${id}`, {withCredentials: true})
    .then(res => {

      setAntique(res.data);

      if(sequence.current === false)
      {
        const interval = setInterval(() => {
          if (sequence.current === true) {
            clearInterval(interval);
            setLoading(false)
          }
        }, 300);
      }
      else setLoading(false);

    })
    .catch(err => console.error(err))
  }, [id, setAntique, setLoading]);

  return (
    <PageTransition>
      <Page>
        <Loading
          loadingState={loading}
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