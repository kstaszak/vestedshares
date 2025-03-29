import { ShareGrant } from "../models/shareGrant.ts";

export const shareGrants: ShareGrant[] = [
  {
    employeeId: "1",
    employeeName: "Alice",
    grantedShares: 1000,
    vestedShares: 500,
  },
  {
    employeeId: "2",
    employeeName: "Bob",
    grantedShares: 500,
    vestedShares: 500,
  },
  {
    employeeId: "1",
    employeeName: "Alice",
    grantedShares: 500,
    vestedShares: 250,
  }, // Alice has multiple grants
  {
    employeeId: "3",
    employeeName: "Charlie",
    grantedShares: 2000,
    vestedShares: 1000,
  },
];
