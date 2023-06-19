import one from "./assets/input.js";
import two from "./assets/input2.js";
import three from "./assets/output.js";
import axios from "axios";
const URL = axios.create({ baseURL: "https://geocachar.onrender.com/api" });

export const changeUsername = (uid, username) => {
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

export const changePassword = (uid, newPassword, password, email) => {
    return new Promise((resolve, reject) => resolve(newPassword));
    if (!uid) uid = "8Y3o27XpIAfLeOayWqqd3zC4ec83";
    return URL.patch(`/users/${uid}`, { newPassword, password, email });
};

export const deleteUser = (uid) => {
    return;
    return URL.delete(`/users/${uid}`, { password });
};

export const fetchMap = (mapId) => {
    return URL.get(`/maps/${mapId}`).then(({ data }) => data.map);
};

export const fetchMapList = () => {
    return URL.get("/maps").then(({ data }) => data);
};

export const getUser = (uid) => {
    return new Promise((resolve, reject) => {
        resolve({
            name: "Default not connected",
            uid: uid,
            email: "defaultnotconnectedyet@gmail.com",
            current_maps: {
                104: {
                    0: false,
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                },
            },
        });
    });
    return URL.get(`/users/${uid}`).then(({ data }) => data.user);
};

export const authenticate = (email, password) => {
    return URL.post("/account", { email, password }).then(
        ({ data }) => data.uid
    );
};

export const signup = (username, email, password) => {
    return URL.post("/users", { name: username, email, password }).then(
        ({ data }) => data.uid
    );
};
