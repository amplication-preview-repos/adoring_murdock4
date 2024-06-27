import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  address?: StringNullableFilter;
  companyName?: StringNullableFilter;
  contactName?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
};
