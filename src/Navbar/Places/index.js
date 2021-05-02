import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  > div {
    height: 70px;
    display: flex;
    border-radius: 10px;
    background-color: black;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    :hover {
      background-color: white;
      > * {
        color: black;
      }
    }
    > * {
      color: whitesmoke;
    }
  }
`

const Places = () => {
  return (
    <Grid>
      <div><Link>Antiques</Link></div>
      <div><Link>Post</Link></div>
      <div><Link>Likes</Link></div>
      <div><Link>Profile</Link></div>
    </Grid>
  )
}

export default Places;