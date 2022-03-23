import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";
export const fetchUser = () => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
};
