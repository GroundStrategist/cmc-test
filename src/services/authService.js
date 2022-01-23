import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl, CRYPTO_KEY } from "../config.json";
import CryptoJS from "crypto-js";

const apiEndpoint = apiUrl + "/users";
const loginEndpoint = apiEndpoint + "/login";
const logoutEndpoint = apiEndpoint + "/logout";
const cUserEndpoint = apiEndpoint + "/me";

// User Authentication Token Encrypted
const tokenKey = "UATE";

http.setJwt(getJwt());

export async function login(email, password) {
  const {
    token: jwt,
    status,
    data,
  } = await (await http.post(loginEndpoint, { email, password })).data;
  const { user } = data;

  localStorage.setItem(tokenKey, jwt);

  // Encrypt User Object
  var currentUser = CryptoJS.AES.encrypt(
    JSON.stringify(user),
    CRYPTO_KEY
  ).toString();

  localStorage.setItem("c_user", currentUser);
}

export function loginWithJwt(jwt, c_user) {
  var currentUser = CryptoJS.AES.encrypt(
    JSON.stringify(c_user.user),
    CRYPTO_KEY
  ).toString();
  localStorage.setItem(tokenKey, jwt);
  localStorage.setItem("c_user", currentUser);
}

export async function logout() {
  localStorage.removeItem(tokenKey);
  await http.get(logoutEndpoint);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey, jwt);
    const currentUserEnc = localStorage.getItem("c_user");

    // Decrypt
    const currentUserDec = CryptoJS.AES.decrypt(currentUserEnc, CRYPTO_KEY);
    const currentUser = JSON.parse(currentUserDec.toString(CryptoJS.enc.Utf8));

    // const userName = localStorage.getItem("user-name");
    // const userPhoto = localStorage.getItem("user-photo");

    return {
      jwt: jwtDecode(jwt),
      currentUser,
    };
  } catch (ex) {
    return null;
  }
}

export async function setUVDALocal() {
  try {
    const user = await (await http.get(cUserEndpoint)).data.data;

    const { data: currentUser } = user;

    var currentUserEncrypt = CryptoJS.AES.encrypt(
      JSON.stringify(currentUser),
      CRYPTO_KEY
    ).toString();

    localStorage.setItem("UVDA", currentUserEncrypt);
  } catch (ex) {
    return null;
  }
}

export function getUVDALocal() {
  try {
    const currentUserEnc = localStorage.getItem("UVDA");

    const currentUserDec = CryptoJS.AES.decrypt(currentUserEnc, CRYPTO_KEY);
    const currentUser = JSON.parse(currentUserDec.toString(CryptoJS.enc.Utf8));

    return currentUser;
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getUVDALocal,
  setUVDALocal,
  getJwt,
};
