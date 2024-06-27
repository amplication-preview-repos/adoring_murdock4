import { Medicine as TMedicine } from "../api/medicine/Medicine";

export const MEDICINE_TITLE_FIELD = "name";

export const MedicineTitle = (record: TMedicine): string => {
  return record.name?.toString() || String(record.id);
};
