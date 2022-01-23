import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";
const registerEndpoint = apiEndpoint + "/signup";

export function register(user) {
  return http.post(registerEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
    country: user.country,
    region: user.region,
    zone: user.zone,
    church: user.church,
    password: user.password,
    passwordConfirm: user.passwordConfirm,
    phoneNumber: user.phoneNumber,
    contactAddress: user.contactAddress,
  });
}
