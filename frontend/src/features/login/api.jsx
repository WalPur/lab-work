const baseUrl = "http://localhost:8000";

export const loginUser = async (userData) => {
  try {
    const response = await fetch(baseUrl + "/api/users/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Ошибка авторизации: " + error.message);
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await fetch(baseUrl + "/api/users/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Ошибка регистрации: " + error.message);
  }
};
