import { Order } from "../order/Order";

export type Employee = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  position: string | null;
  updatedAt: Date;
};
