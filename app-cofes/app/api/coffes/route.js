import { handlerCoffe } from "./handlerCoffe";

export const GET = async () => {
  try {
    const data = await handlerCoffe();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { message: "Error obteniendo los cafés" },
      { status: 500 }
    );
  }
};