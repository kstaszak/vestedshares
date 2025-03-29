import { useEffect, useState } from "react";
import { EmployeeVestedShares } from "../../server/models/employeeVestedShares.ts";
import { VestedTable } from "./components/vestedTable.tsx";
import { GetVestedData } from "./services/apiService.ts";

function App() {
  const [data, setData] = useState<EmployeeVestedShares[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetVestedData();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {VestedTable(data)}
    </>
  );
}

export default App;
