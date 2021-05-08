import { useState } from 'react';
import { Grid, Header, PageContainer } from './styles';
import ApiMapper from '../../components/ApiMapper';
import PageTransition from '../../Framer/PageTransition';
import Antique from './Antique';
import Controls from './Controls';
import useEverScroll from '../../hooks/useEverScroll';

export default function AntiquesPage ()
{
  const [bottomBoundaryRef, lazyRef, antiques] = useEverScroll(
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
          <div ref={bottomBoundaryRef} style={{ background: 'red', width: '200px', height: '500px' }}></div>
        </Grid>
      </PageContainer>
    </PageTransition>
  );
}
