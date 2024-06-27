import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  orderDate?: Date | null;
  totalAmount?: number | null;
};
