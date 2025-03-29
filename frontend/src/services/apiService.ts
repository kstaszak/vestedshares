import { EmployeeVestedShares } from "../../../server/models/employeeVestedShares.ts";
import { AppConfig } from "../config.ts";

export async function GetVestedData(): Promise<EmployeeVestedShares[]> {
  const response = await fetch(`${AppConfig.apiUrl}/vested`);
  return await response.json();
}
