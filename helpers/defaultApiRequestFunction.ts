import axios from "axios";

const apiCall = (url: string, method: string) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer `,
  };

  return fetch(url, {
    method,
    headers,
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export default apiCall;
