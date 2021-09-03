import axios from 'axios';
import PropTypes from 'prop-types';
import {
  useEffect,
  useRef,
  useState
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import GoBackButton from '../../components/GoBackButton';
import Loading from '../../Framer/LoadingModules/Loading';
import PageTransition from '../../Framer/PageTransition';
import useMinimumLoadingTime from '../../hooks/useMinimumLoadingTime';
import AntiqueInfo from './AntiqueInfo';
import { Page } from './styles';


export default function Antique ({ setRoomId }) {
  const { id } = useParams();
  const history = useHistory();
  const [loading, isDone] = useMinimumLoadingTime();
  const [antique, setAntique] = useState({});
  const directionRef = useRef('right');

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
        isDone();
      })
      .catch(err => console.error(err));
  }, [id, isDone, setAntique]);

  return (
    <PageTransition attr={{ direction: directionRef.current, exitTime: 2 }}>
      <Page>
        <GoBackButton
          handleClick={handleClick}
          text={'Back  ▶'}
        />
        <Loading
          afterLoad={
            <AntiqueInfo
              antique={antique}
              setRoom={handleRoomChange}
            />
          }
          loadingState={loading}
          version="MagnaGlass"
        />
      </Page>
    </PageTransition>
  );
}

Antique.propTypes = {
  setRoomId: PropTypes.func
};
