import { EmployeeVestedShares } from "../../../server/models/employeeVestedShares.ts";
import { TableRow } from "./tableRow.tsx"

export const VestedTable = (data: EmployeeVestedShares[]) => {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <h2 className="text-xs font-medium uppercase tracking-wider text-gray-600">
                  Employee Name
                </h2>
              </th>
              <th scope="col" className="px-6 py-3">
                <h2 className="text-xs font-medium uppercase tracking-wider text-gray-600">
                  Total Vested Shares
                </h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              TableRow(user)
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
