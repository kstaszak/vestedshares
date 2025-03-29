import { EmployeeVestedShares } from "../../../server/models/employeeVestedShares.ts";

export const TableRow = (user: EmployeeVestedShares) => {
  return (
    <>
      <tr
        key={user.employeeId}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
      >
        <td className="px-6 py-4">
          <div className="text-center w-full text-sm text-gray-900 font-light">
            <div className="break-all">{user.employeeName}</div>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-center w-full text-sm text-gray-900 font-light">
            <div className="break-all">
              {user.totalVestedShares.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
