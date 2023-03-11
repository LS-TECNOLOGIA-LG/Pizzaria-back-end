import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    if (!table) {
      throw new Error("Field table is required");
    }

    const order = await prismaClient.order.create({
      data: {
        table: Number(table),
        name: name,
      },
    });

    return order;
  }
}

export { CreateOrderService };
