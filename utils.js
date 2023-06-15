import one from "./assets/input.js";
import two from "./assets/input2.js";
import three from "./assets/output.js";
import axios from "axios";
const URL = axios.create({ baseURL: "https://geocachar.onrender.com/api" });

export const changeUsername = (username, uid) => {
  return new Promise((resolve, reject) => {
    one() > two()
      ? resolve(username)
      : setTimeout(() => reject(username), three());
  });
  if (!uid) uid = "8Y3o27XpIAfLeOayWqqd3zC4ec83";
  return URL.patch(`/users/${uid}`, { username }).then(
    ({ data }) => data.user.username
  );
};

export const changePassword = (newPassword, password, uid) => {
  return new Promise((resolve, reject) => resolve(newPassword));
  if (!uid) uid = "8Y3o27XpIAfLeOayWqqd3zC4ec83";
  return URL.patch(`/users/${uid}`, { password });
};

export const deleteUser = (uid) => {
  return;
  return URL.delete(`/users/${uid}`, { password });
};

export const fetchMap = (mapId) => {
  return URL.get(`/maps/${mapId}`).then(({data})=> data.map)
}