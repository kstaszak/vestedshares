export interface ShareGrant {
  employeeId: string;
  employeeName: string;
  grantedShares: number;
  vestedShares: number; // Assume this is pre-calculated for simplicity
}
