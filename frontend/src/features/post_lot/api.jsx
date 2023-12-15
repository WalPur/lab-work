const baseUrl = "http://localhost:8000";

export const createLot = async (lotData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(baseUrl + "/api/doska/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify(lotData),
    });
    return response;
  } catch (error) {
    throw new Error("Ошибка при создании: " + error.message);
  }
};
