import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="companyName" source="companyName" />
        <TextInput label="contactName" source="contactName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
