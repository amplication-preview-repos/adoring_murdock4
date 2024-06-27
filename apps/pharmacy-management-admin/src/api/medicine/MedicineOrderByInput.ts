import { SortOrder } from "../../util/SortOrder";

export type MedicineOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
};
