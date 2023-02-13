export const apiPostWithBodyCall = async (url: string, body: any) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer `,
  };

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
