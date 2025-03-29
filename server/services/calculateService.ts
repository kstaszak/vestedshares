import { ShareGrant } from "../models/shareGrant.ts";
import { EmployeeVestedShares } from "../models/employeeVestedShares.ts";

export class CalculateService {
  calculateTotalVestedShares = (
    shares: ShareGrant[],
  ): EmployeeVestedShares[] => {
    // Your code here
    const grouped = shares.reduce((res, obj) => {
      const key = obj.employeeId;
      if (!res[key]) {
        res[key] = {
          employeeId: obj.employeeId,
          employeeName: obj.employeeName,
          totalVestedShares: obj.vestedShares,
        };
      } else {
        res[key].totalVestedShares += obj.vestedShares;
      }
      console.log(res);
      return res;
    }, {} as Record<string, EmployeeVestedShares>);
    return Object.values(grouped);
  };
}
