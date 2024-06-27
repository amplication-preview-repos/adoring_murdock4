import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicineModuleBase } from "./base/medicine.module.base";
import { MedicineService } from "./medicine.service";
import { MedicineController } from "./medicine.controller";
import { MedicineResolver } from "./medicine.resolver";

@Module({
  imports: [MedicineModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicineController],
  providers: [MedicineService, MedicineResolver],
  exports: [MedicineService],
})
export class MedicineModule {}
