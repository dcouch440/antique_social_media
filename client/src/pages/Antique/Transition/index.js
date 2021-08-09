import PropTypes from 'prop-types';
import {
  useEffect,
  useRef,
  useState
} from 'react';
import Loading from '../../../Framer/LoadingModules/Loading';
import AntiqueInfo from '..';
import { useHistory, useParams } from 'react-router-dom';
import PageTransition from '../../../Framer/PageTransition';
import GoBackButton from '../../../components/GoBackButton';
import axios from 'axios';
import loadingSequence from '../../../utils/loadingSequence';

import { Page } from './styles';

export default function AntiquePage ({ setRoomId }) {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [antique, setAntique] = useState({});
  const directionRef = useRef('right');
  const sequence = useRef(false);

  const handleClick = () => history.goBack();

  const handleRoomChange = () => {
    setRoomId(id);
    directionRef.current = 'top';
    history.push('/chat');
  };

  useEffect(() => {

    axios
      .get(`/antiques/${id}`, { withCredentials: true })
      .then(res => {
        setAntique(res.data);
        loadingSequence({ condition: setLoading, ref: sequence, timeBeforeCheck: 1500 });
      })
      .catch(err => console.error(err));

  }, [id, setAntique, setLoading]);

  return (
    <PageTransition attr={{ direction: directionRef.current, exitTime: 2 }}>
      <Page>
        <GoBackButton handleClick={handleClick} text={'Back  ▶'} />
        <Loading
          loadingState={loading}
          version="MagnaGlass"
          afterLoad={
            <AntiqueInfo
              setRoom={handleRoomChange}
              antique={antique}
            />
          }
        />
      </Page>
    </PageTransition>
  );
}
AntiquePage.propTypes = {
  setRoomId: PropTypes.func
};
