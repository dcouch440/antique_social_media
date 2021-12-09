import {
  BottomBoundaryDiv,
  Grid,
  GridContainer,
  Header,
  HeaderImage,
  PageContainer
} from './styles';
import { useHistory, useParams } from 'react-router';

import Antique from './Antique';
import ApiMapper from '../../components/ApiMapper';
import Controls from './Controls';
import PageTransition from '../../Framer/PageTransition';
import PropTypes from "prop-types";
import bottleTyeDye from '../../img/assets/waxSealImg.png';
import capitalize from '../../utils/capitalize';
import useEverScroll from "../../hooks/useEverScroll";
import { useState } from 'react';

export default function AntiquesPage ({ route }) {
  const { user_id } = useParams();
  const history = useHistory();
  const [slider, setSlider] = useState(3);
  const [BBRef, antiques] = useEverScroll({
    limit: 15,
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
          <HeaderImage
            data-testid='wax-seal-image'
            src={bottleTyeDye}
          />
          { getHeader(history) }
        </Header>
        <GridContainer>
          <Grid columns={slider}>
            <ApiMapper
              callData={antiques}
              component={Antique}
            />
          </Grid>
        </GridContainer>
        <BottomBoundaryDiv ref={BBRef} />
      </PageContainer>
    </PageTransition>
  );
}

AntiquesPage.propTypes = {
  route: PropTypes.string
};
