import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

export const createUser = () => {
  axios
    .post("https://calendar-app22.herokuapp.com/api/auth/new", {
      name: "Fideo dimaria",
      email: "fidedimariagol@dimaria.com",
      password: "123456",
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export const login = (email, password) => {
  axios
    .post(`${baseURL}/auth`, {
      email: email,
      password: password,
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export const revalidateJWT = () =>
  axios
    .get(`${baseURL}/renew`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
