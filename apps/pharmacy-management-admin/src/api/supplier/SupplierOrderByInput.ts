import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  address?: SortOrder;
  companyName?: SortOrder;
  contactName?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
