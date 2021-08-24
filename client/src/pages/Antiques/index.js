import PropTypes from "prop-types";
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ApiMapper from '../../components/ApiMapper';
import EverScroll from '../../components/EverScroll';
import PageTransition from '../../Framer/PageTransition';
import bottleTyeDye from '../../img/assets/waxSealImg.png';
import capitalize from '../../utils/capitalize';
import Antique from './Antique';
import Controls from './Controls';
import {
  Grid,
  GridContainer,
  Header,
  HeaderImage,
  PageContainer
} from './styles';


export default function AntiquesPage ({ route }) {
  const { user_id } = useParams();
  const history = useHistory();
  const [slider, setSlider] = useState(3);
  const [bottomBoundaryRef, lazyRef, antiques] = EverScroll({
    limit: 25,
    route: user_id ? route + user_id : route
  });

  const getHeader = h => capitalize(h.location.pathname.split('/')[1]);

  return (
    <PageTransition>
      <PageContainer>
        <Controls
          count={slider}
          setSlider={setSlider}
        />
        <Header>
          <HeaderImage src={bottleTyeDye} />
          { getHeader(history) }
        </Header>
        <GridContainer>
          <Grid columns={slider}>
            <ApiMapper
              callData={antiques}
              component={Antique}
              lazyRef={lazyRef}
            />
          </Grid>
        </GridContainer>
        <div
          ref={bottomBoundaryRef}
          style={{
            background: '',
            width: '1px',
            height: '250px',
            marginTop: ''
          }}
        />
      </PageContainer>
    </PageTransition>
  );
}

AntiquesPage.propTypes = {
  route: PropTypes.string
};
