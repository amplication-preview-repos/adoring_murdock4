import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicineService } from "./medicine.service";
import { MedicineControllerBase } from "./base/medicine.controller.base";

@swagger.ApiTags("medicines")
@common.Controller("medicines")
export class MedicineController extends MedicineControllerBase {
  constructor(
    protected readonly service: MedicineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
