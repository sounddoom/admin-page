import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const instance = axios.create({
  baseURL: "https://api-employee-testing.herokuapp.com/",
  headers: { "Content-Type": "application/json" }
});

const getToken = () => localStorage.getItem("token");

// CHECK TOKEN AND SAVE IT TO LOCAL STORAGE
instance.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

// FAKE BACKEND
const mock = new MockAdapter(instance);

const serverData = [{ email: "test@test.com", password: "test_test", name: "test" }];
//  LOGIN USER

mock.onPost("/auth/v1/sign-in", { email: "1", password: "1" }).reply(config => {
  if (
    config.headers["Content-Type"] !== "application/json" &&
    config.headers["Accept"] !== "application/json, text/plain, */*"
  )
    return [401];
  return [200, { token: "stringinsteadofrealtoken" }];
});

//
// GET USER DATA
mock.onGet("/api/v1/users").reply(config => {
  if (
    config.headers["Content-Type"] !== "application/json" &&
    config.headers["Accept"] !== "application/json, text/plain, */*" &&
    config.headers.Authorization !== "Bearer stringinsteadofrealtoken"
  )
    return [401];
  return [200, serverData];
});

// CREATE USER
mock.onPost("/api/v1/users").reply(config => {
  if (
    config.headers["Content-Type"] !== "application/json" &&
    config.headers["Accept"] !== "application/json, text/plain, */*" &&
    config.headers.Authorization !== "Bearer stringinsteadofrealtoken"
  )
    return [401];
  const userData = JSON.parse(config.data);
  serverData.push(userData.user);
  return [200, serverData];
});

// DELETE USER
mock.onDelete("/api/v1/users").reply(config => {
  if (
    config.headers["Content-Type"] !== "application/json" &&
    config.headers["Accept"] !== "application/json, text/plain, */*" &&
    config.headers.Authorization !== "Bearer stringinsteadofrealtoken"
  )
    return [401];
  console.log(serverData);
  serverData.splice(config.id, 1);
  return [200, serverData];
});

export default instance;
