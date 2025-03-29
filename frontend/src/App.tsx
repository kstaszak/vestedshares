import { useEffect, useState } from "react";
import { EmployeeVestedShares } from "../../server/models/employeeVestedShares.ts";

function App() {
  const [data, setData] = useState<EmployeeVestedShares[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getVestedData();
    };

    fetchData();
  }, []);

  const getVestedData = async () => {
    const response = await fetch("http://localhost:8000/vested");
    setData(await response.json());
  };

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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
