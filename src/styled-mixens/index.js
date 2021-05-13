export const screenAdapt = `
  width: 1500px;

  @media (max-width: 1500px) {
    width: 1200px;
  }
  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1100px) {
    width: 900px;
  }

  @media (max-width: 1000px) {
    width: 850px;
  }
  @media (max-width: 900px) {
    width: 95%;
  }
`;

export const noInteraction = `
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
`;
export const textInteraction = `
  -webkit-user-select: text;  /* Chrome all / Safari all */
  -moz-user-select: text;     /* Firefox all */
  -ms-user-select: text;      /* IE 10+ */
  user-select: text;
`;

export const maxContainer = `
  width: 100%;
  height: 100%;
`;

export const centerAll = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const maxCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const scrollBarStyles = `
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #00000036;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: linear-gradient(180deg ,rgb(0 0 0 / 35%) 0%,rgb(0 0 0 / 57%) 74%);
  }
`;

export const inputFocus = `
  :focus {
    outline: none;
    box-shadow: 0 0 0 4px black;
  }
`;

export const DropdownButtonStyle = `
  justify-self: flex-end;
  background-color: white;
  padding: 5px;
  border-radius: 7px;
  box-shadow: 0 0 2px black;
  font-family: 'Pacifico', cursive;
  color: black;
  font-weight: bold;
`;

export const darkBackgroundColor = `
  background-color: #171717f7;
`;

export const DropdownInputStyle = `
`;

export const blackBackgroundHoverTransition = `
  transition: .3s;
  :hover {
    border: 2px solid white;
    background-color: black;
    color: white;
  }
`;

export const cursiveFont = 'font-family: \'Pacifico\', cursive;';

export const pageHeader = `
  background-color: #171717f7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: 'Pacifico', cursive;
  position: relative;
  grid-row: span 1;
  grid-column: span 2;
  font-size: 80px;
  filter: grayscale(20%);
  color: white;
  box-shadow: inset 0 0 3px black;
  background-position: center;
  width: 1500px;

  @media (max-width: 1500px) {
    width: 1200px;
  }
  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1100px) {
    width: 900px;
  }

  @media (max-width: 1000px) {
    width: 850px;
  }
  @media (max-width: 900px) {
    width: 95%;
  }
`;