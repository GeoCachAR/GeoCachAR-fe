import axios from 'axios';
const URL = axios.create({ baseURL: 'https://geocachar.onrender.com/api' });

export const changeUsername = (uid, name) => {
  return URL.patch(`/users/${uid}`, { name }).then(({ data }) => data.name);
};

export const changeEmail = (newEmail, oldEmail, uid, password) => {
  return URL.patch(`/users/${uid}`, { newEmail, oldEmail, password });
};

export const changePassword = (uid = '007', email) => {
  return URL.patch(`/users/${uid}`, { email });
};

export const deleteUser = (uid, email, password) => {
  return axios({
    method: 'delete',
    url: `https://geocachar.onrender.com/api/users/${uid}`,
    data: { email, password },
  });
};

export const fetchMap = (mapId) => {
  return URL.get(`/maps/${mapId}`).then(({ data }) => data.map);
};

export const fetchMapList = () => {
  return URL.get('/maps').then(({ data }) => data);
};

export const getUser = (uid) => {
  return URL.get(`/users/${uid}`).then(({ data }) => {
    return { ...data.user, uid: uid };
  });
};

export const authenticate = (email, password) => {
  return URL.post('/account', { email, password }).then(({ data }) => data.uid);
};

export const signup = (username, email, password) => {
  return URL.post('/users', { name: username, email, password }).then(
    ({ data }) => data.uid
  );
};

export const patchCode = (wpNumbers, mapId, uid) => {
  return URL.patch(`/users/${uid}`, { current_map: { [mapId]: wpNumbers } });
};

export const completeMap = (uid, mapId) => {
  return URL.patch(`/users/${uid}`, { completed_map: mapId });
};
