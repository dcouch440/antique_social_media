import {
  useEffect,
  useRef,
  useState
} from 'react';
import { useHistory, useParams } from 'react-router-dom';

import AntiqueInfo from './AntiqueInfo';
import Loading from '../../Framer/LoadingModules/Loading';
import { Page } from './styles';
import PageTransition from '../../Framer/PageTransition';
import { RoomContext } from '../../context/Room';
import axios from 'axios';
import { useContext } from 'react';
import useMinimumLoadingTime from '../../hooks/useMinimumLoadingTime';

export default function Antique () {
  const { id } = useParams();
  const history = useHistory();
  const [loading, isDone] = useMinimumLoadingTime();
  const [antique, setAntique] = useState({});
  const { setRoomId }  = useContext(RoomContext);
  const directionRef = useRef('right');

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
