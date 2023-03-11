import { Request, Response } from "express";
import { ListOrdersSerice } from "../../services/order/ListOrdersService";

class ListOrdersController {
  async handle(req: Request, res: Response) {
    const listOrdersService = new ListOrdersSerice();

    const orders = await listOrdersService.execute();

    return res.json(orders);
  }
}
export { ListOrdersController };
