import axios from "axios";
// const API_URL = process.env.API_URL;
const API_URL = "https://api2022.vercel.app";
// const API_URL = "https://herokuapi0422.herokuapp.com";
// const COLLECTION = process.env.COLLECTION;

// var email = "none@none.com";
// if (JSON.parse(localStorage.getItem("profile"))) {
//   email = JSON.parse(localStorage.getItem("profile")).result.email;
// }
const API = axios.create({
  // baseURL: `${API_URL}/api/${email}`,
  baseURL: `${API_URL}/api`,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchItems = (user) => API.get(`/${user.result.email}/resumes`);

export const createItem = (item, user) =>
  API.post(`/${user.result.email}/resumes`, item);

export const deleteItem = (id, user) =>
  API.delete(`/${user.result.email}/resumes/${id}`);

export const updateItem = (id, item, user) =>
  API.put(`/${user.result.email}/resumes/${id}`, item);
// export const updateItem = (id, user, item) =>
//   API.put(`/${user.result.email}/resumes/${id}`, {
//     ...item,
//     isDone: !updatedTodo.isDone,
//   });

export const signIn = (formData) => API.post("/users/signin", formData);

export const signUp = (formData) => API.post("/users/signup", formData);
