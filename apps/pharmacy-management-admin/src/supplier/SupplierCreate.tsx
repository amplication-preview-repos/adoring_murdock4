import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="companyName" source="companyName" />
        <TextInput label="contactName" source="contactName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
