import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
