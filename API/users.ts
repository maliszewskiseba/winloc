import apiCall from "../helpers/defaultApiRequestFunction";

export const getUsers = () =>
  apiCall("https://jsonplaceholder.typicode.com/users", "GET");

export const getSingleUser = (userId: number) =>
  apiCall(`https://jsonplaceholder.typicode.com/users/${userId}`, "GET");
