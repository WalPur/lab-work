const baseUrl = "http://localhost:8000";

export const loadLots = async () => {
  try {
    const response = await fetch(baseUrl + "/api/doska/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Ошибка загрузки объявлений: " + error.message);
  }
};
