import React, { useEffect } from 'react';
import * as styles from './styles';
import Loading from '../../Framer/Loading';
import AntiqueInfo from './AntiqueInfo';
import { useParams , withRouter} from 'react-router-dom';
import PageTransition from '../../Framer/PageTransition';
import GoBackButton from './GoBackButton';
import axios from 'axios';

const AntiquePage = props => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [antique, setAntique] = React.useState({});
  const handleClick = () => props.history.push('/antiques');

  useEffect(() => {
    axios.get(`/antiques/${id}`, {withCredentials: true})
    .then(res => {
      setAntique(res.data)
      setLoading(false);
    })
    .catch(err => console.error(err))
  }, [id]);



  return (
    <PageTransition>
      <styles.Page>
        <Loading
          loadingState={loading}
          render={
            <>
              <GoBackButton handleClick={handleClick} text={'Back  ▶'} />
              <AntiqueInfo antique={antique} />
            </>
          }
        />
      </styles.Page>
    </PageTransition>
  )

}

export default withRouter(AntiquePage)