import { v4 as uuidv4 } from "uuid";

const getRandomId = () => {
  return uuidv4();
};

const setAuth = (data?: any | null) => {
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  localStorage.setItem("isLogin", "1");
};

const resetAuth = () => {
  localStorage.clear();
};

const getUserLoginData = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.payload;
};

const getJWT = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const jwt = user.jwt;
  console.log(jwt);
  return "Bearer " + jwt;
};

const isLogin = () => {
  if (localStorage.getItem("isLogin") != "1") {
    return false;
  }
  return true;
};

export const useAuth = {
  setAuth,
  resetAuth,
  isLogin,
  getUserLoginData,
  getRandomId,
  getJWT,
};
