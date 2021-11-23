import React, { createContext } from 'react';

import PropTypes from "prop-types";
import { useState } from 'react';

const RoomContext = createContext();

function RoomProvider ({ children }) {
  const [room, setRoomId] = useState('GLOBAL');

  return (
    <RoomContext.Provider
      value={{
        room,
        setRoomId
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export { RoomContext, RoomProvider };

RoomProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
