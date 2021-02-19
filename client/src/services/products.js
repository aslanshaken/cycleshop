import api from "./apiConfig";

export const getMotorcycles = async () => {
  try {
    const response = await api.get("/motorcycles");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMotorcycle = async (id) => {
  try {
    const response = await api.get(`/motorcycles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMotorcycle = async (product) => {
  try {
    const response = await api.post("/motorcycles", product);
    console.log(product)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMotorcycle = async (id, product) => {
  try {
    const response = await api.put(`/motorcycles/${id}`, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMotorcycle = async (id) => {
  try {
    const response = await api.delete(`/motorcycles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
