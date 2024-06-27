import { OrderUpdateManyWithoutEmployeesInput } from "./OrderUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutEmployeesInput;
  phone?: string | null;
  position?: string | null;
};
