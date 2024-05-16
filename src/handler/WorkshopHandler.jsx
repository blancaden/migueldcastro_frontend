import WorkshopService from "../services/WorkshopService";

const WorkshopHandler = {
  async getAllWorkshops() {
    try {
      const allWorkshops = await WorkshopService.getWorkshops();
      return allWorkshops;
    } catch (error) {
      throw new Error("Error al obtener los artículos de blog:", error);
    }
  },

  async getWorkshop(ID_Talleres) {
    try {
      const workshop = await WorkshopService.getWorkshop(ID_Talleres);
      return workshop;
    } catch (error) {
      throw new Error("Error al obtener el artículo de blog:", error);
    }
  },

  async submitWorkshop(newWorkshop) {
    try {
      const response = await WorkshopService.submitWorkshop(newWorkshop);
      if (response.status === 201) {
      } else {
        throw new Error('Error al enviar el artículo de blog');
      }
    } catch (error) {
      throw new Error("Error al enviar el artículo de blog:", error);
    }
  }
};

export default WorkshopHandler;