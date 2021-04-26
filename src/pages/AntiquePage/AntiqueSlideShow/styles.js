import styled from 'styled-components';

export const SlideShow = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #151515;
  overflow: hidden;
  padding: 0;
  margin: 0;

.example-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.next,
.prev {
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
}

.next {
  right: 10px;
}

.prev {
  left: 10px;
  transform: scale(-1);
}

img {
  position: absolute;
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
}
`
