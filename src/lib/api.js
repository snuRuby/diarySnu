import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const login = ({ username, password }) =>
  axios.post("/api/accounts/login/", { username, password });
export const checkLogin = () =>
  axios.get(`/api/auth/check`, { withCredential: true });
export const logout = () =>
  axios.post(`/api/logout/`, {}, { withCredential: true });
export const registerUser = ({ username, password, email }) =>
  axios.post(
    "/api/accounts/",
    {
      username,
      password,
      email
    },
    {
      withCredential: true,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

export const createBeat = data =>
  axios.post("/api/beats/create/", data, {
    withCredential: true,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
export const getBeatsList = () => axios.get("/api/beats/");
export const getBeatById = id => axios.get(`/api/beats/${id}`);
