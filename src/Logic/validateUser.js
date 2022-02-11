import users from "../database/User.js";

function isValidUser(user) {
  for (const u of users) {
    if (u.email === user.email && u.password === user.password)
     return true;
  }
  return false;
}

export default isValidUser;
