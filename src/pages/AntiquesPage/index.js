import React from 'react';
import * as styled from './styles';
import Antiques from './Antiques'
import PageTransition from '../../Framer/PageTransition';
const AntiquesPage = ({antiques}) => {

  return (
    <>
      <PageTransition>
        <styled.Grid>
          <Antiques antiques={antiques} />
        </styled.Grid>
      </PageTransition>
    </>
  )

}

export default AntiquesPage;