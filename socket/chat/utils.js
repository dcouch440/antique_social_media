const userService = require('../../src/user/user.service');
const AntiqueService = require('../../src/antique/antique.service');
const STATIC_ROOMS = require('./static-rooms');

const getUsersFromDB = async usernames => {
  try {
    if (!usernames.length) {
      return;
    }
    return userService.getUsersByUsername({ usernames });
  } catch (err) {
    console.error(err);
  }
};

const socketMapper = ({ rooms, io }) => rooms.map(async ({ id, ...rest }) => {
  try {
    return {
      roomId: id,
      socketUsers: await io.sockets.adapter.rooms.get(id.toString()),
      ...rest
    };
  } catch (err) {
    console.error(err);
  }
});

const getActiveRooms = async ({ io }) => {
  try {
    const usersInRoomData = socketMapper({ rooms: STATIC_ROOMS, io });
    const activeRooms = (await Promise.all(usersInRoomData));
    const roomsCount = getUserRoomCountWithSet({ activeRooms });
    console.log(roomsCount);
    const sortedRooms = roomsCount.sort((a,b) => b.socketUsers - a.socketUsers);
    return sortedRooms;
  } catch (err) {
    console.error(err);
  }
};

const getActiveUserRooms = async ({ io, user_id }) => {
  try {
    const antique_ids = await AntiqueService.getUserAntiques(user_id);
    const userAntiqueRoomData = socketMapper({ rooms: antique_ids, io });
    const activeRooms = (await Promise.all(userAntiqueRoomData))
      .filter(data => data.socketUsers !== undefined);
    const antiqueOwnersVacantRooms = getUserRoomCountWithSet({ activeRooms });
    const sortedRooms = antiqueOwnersVacantRooms.sort((a,b) => b.socketUsers - a.socketUsers);
    return sortedRooms;
  } catch (err) {
    console.error(err);
  }
};

const getUserRoomCountWithSet = ({ activeRooms }) => {
  const set = new Set(activeRooms);
  return [...set].map(({ socketUsers, ...rest }) => {
    const userUndefinedConverter = socketUsers ? [...socketUsers].length : 0;
    return {
      ...rest,
      socketUsers: userUndefinedConverter
    };
  });
};

const getRoomUsernames = async ({ io, roomId }) => {
  try {
    const clients = await io.sockets.adapter.rooms.get(roomId);
    const set = new Set(clients);
    const usernames = [...set].map(async clientId => {
      return io.sockets.sockets.get(clientId).username;
    });
    return Promise.all(usernames);
  } catch (err) {
    console.error(err);
  }
};

// TODO, use one call for both users and the current message
const messageWithAttachedUser = async ({ message, username }) => {
  try {
    const user = await userService.getUserByUsername(username);
    return {
      message: {
        message,
        timeStamp: new Date(),
        username: user.username,
        avatar: user.avatar
      }
    };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getUsersFromDB,
  messageWithAttachedUser,
  getRoomUsernames,
  getActiveUserRooms,
  getActiveRooms
};