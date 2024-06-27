import { Customer } from "../customer/Customer";
import { Employee } from "../employee/Employee";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  employee?: Employee | null;
  id: string;
  orderDate: Date | null;
  totalAmount: number | null;
  updatedAt: Date;
};
