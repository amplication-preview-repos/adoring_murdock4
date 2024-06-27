import { OrderCreateNestedManyWithoutEmployeesInput } from "./OrderCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutEmployeesInput;
  phone?: string | null;
  position?: string | null;
};
