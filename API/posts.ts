import apiCall from "../helpers/defaultApiRequestFunction";
import { apiPostWithBodyCall } from "../helpers/defaultApiPostFunction";

export const getUserPosts = (userId: number) =>
  apiCall(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, "GET");

export const deletePost = (postId: number) =>
  apiCall(`https://jsonplaceholder.typicode.com/posts/${postId}`, "DELETE");

export const getSinglePost = (postId: number) =>
  apiCall(`https://jsonplaceholder.typicode.com/posts/${postId}`, "GET");

export const getPostComments = (postId: number) =>
  apiCall(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    "GET"
  );
export const addNewPost = (post: any) =>
  apiPostWithBodyCall(`https://jsonplaceholder.typicode.com/posts`, post);
