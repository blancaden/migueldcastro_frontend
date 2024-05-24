import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
const WorkshopService = {
  async getWorkshops() {
    try {
      const response = await apiClient.get("/talleres");
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener los talleres:", error);
    }
  },
  async getWorkshop(ID_Talleres) {
    try {
      const response = await apiClient.get(`/talleres/${ID_Talleres}`);
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener el taller:", error);
    }
  },
  async submitWorkshop(newWorkshop) {
    try {
      const response = await apiClient.post("/talleres", newWorkshop);
      return response;
    } catch (error) {
      throw new Error("Error al enviar el taller:", error);
    }
  },
  async deleteWorkshop(ID_Talleres) {
    try {
      const response = await apiClient.delete(`/talleres/${ID_Talleres}`);
      return response;
    } catch (error) {
      throw new Error("Error al eliminar el taller:", error);
    }
  },
  async updateWorkshop(ID_Talleres, updatedWorkshop) {
    try {
      const response = await apiClient.patch(`/talleres/${ID_Talleres}`, updatedWorkshop);
      return response;
    } catch (error) {
      throw new Error("Error al actualizar el taller:", error);
    }
  }
};
export default WorkshopService;



