import { useState } from 'react';
import { Grid, Header, PageContainer } from './styles';
import ApiMapper from '../../components/ApiMapper';
import PageTransition from '../../Framer/PageTransition';
import Antique from './Antique';
import Controls from './Controls';
import EverScroll from '../../components/EverScroll';

export default function AntiquesPage () {
  const [bottomBoundaryRef, lazyRef, antiques] = EverScroll(
    { limit: 15, route: '/antiques' }
  );
  const [slider, setSlider] = useState(3);

  return (
    <PageTransition>
      <PageContainer>
        <Controls setSlider={setSlider} count={slider}/>
        <Header>Antiques</Header>
        <Grid columns={slider}>
          <ApiMapper callData={antiques} lazyRef={lazyRef} component={Antique} />
        </Grid>
        <div ref={bottomBoundaryRef} style={{ background: '', width: '1px', height: '50px' }}></div>
      </PageContainer>
    </PageTransition>
  );
}
