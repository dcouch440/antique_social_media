import React from 'react'
import styled from 'styled-components';
import { Username, HubLink } from './styles';
import {Link} from 'react-router-dom';
import SignOut from '../SignOut';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 40px;
  font-family: 'Pacifico', cursive;
`

const SingedIn = ({user}) => {
  return (
    <Grid>
      <Username>Welcome {user.charAt(0).toUpperCase() + user.slice(1)} </Username>
      <HubLink><Link>antiques</Link></HubLink>
      <HubLink><Link>post</Link></HubLink>
      <HubLink><Link>likes</Link></HubLink>
      <HubLink><Link>profile</Link></HubLink>
      <SignOut />
    </Grid>
  )
}

export default SingedIn;