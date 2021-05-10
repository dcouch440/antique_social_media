const userService = require('../../src/user/user.service');
const AntiqueService = require('../../src/antique/antique.service');

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

const getActiveUserRooms = async ({ io, user_id = 12 }) => {
  const antique_ids = await AntiqueService.getUserAntiques(user_id);
  const ant = antique_ids.map(async ({ id, ...rest }) => {
    return {
      roomId: id,
      socketUsers: await io.sockets.adapter.rooms.get(id.toString()),
      ...rest
    };
  });

  const activeRooms = (await Promise.all(ant)).filter(data => data.socketUsers !== undefined);
  const antiqueOwnersVacantRooms = getUserRoomCount({ activeRooms });
  const sortedRooms = antiqueOwnersVacantRooms.sort((a,b) => b.socketUsers - a.socketUsers);
  return sortedRooms;
};

const getUserRoomCount = ({ activeRooms }) => {
  const set = new Set(activeRooms);
  return [...set].map(({ socketUsers, ...rest }) => {
    return {
      ...rest,
      socketUsers: [...socketUsers].length
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
  getActiveUserRooms
};