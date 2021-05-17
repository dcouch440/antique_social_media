import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ApiMapper from '../../components/ApiMapper';
import PageTransition from '../../Framer/PageTransition';
import Antique from './Antique';
import Controls from './Controls';
import capitalize from '../../utils/capitalize';
import EverScroll from '../../components/EverScroll';
import bottleTyeDye from '../../img/assets/waxSealImg.png';

import {
  Grid,
  Header,
  PageContainer,
  HeaderImage
} from './styles';

export default function AntiquesPage ({ route }) {
  const { user_id } = useParams();
  const history = useHistory();
  const [slider, setSlider] = useState(4);
  const [bottomBoundaryRef, lazyRef, antiques] = EverScroll(
    { limit: 1, route: user_id ? route + user_id : route }
  );

  const getHeader = h => capitalize(h.location.pathname.split('/')[1]);

  return (
    <PageTransition>
      <PageContainer>
        <Controls setSlider={setSlider} count={slider}/>
        <Header>
          <HeaderImage src={bottleTyeDye}/>
          { getHeader(history) }
        </Header>
        <Grid columns={slider}>
          <ApiMapper callData={antiques} lazyRef={lazyRef} component={Antique} />
        </Grid>
        <div ref={bottomBoundaryRef} style={{ background: '', width: '1px', height: '200px', marginTop: '' }}></div>
      </PageContainer>
    </PageTransition>
  );
}
