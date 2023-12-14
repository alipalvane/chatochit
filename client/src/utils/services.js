export const baseUrl = "http://localhost:5000/api";

export const postRequset = async(url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();

  //messages comes from server (Controllers/userController.js)
  //we set messages in controller
  //we have error for status 400
  // we don't have error (success) if status was 200
  //if status was 200 then skip below conditional and just return data
  //if status was 400 just run conditional below and set message
  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};
