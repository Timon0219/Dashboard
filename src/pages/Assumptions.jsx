import { useState } from "react";
import styled from "styled-components";
const Assumptions = () => {
  const [rows, setRows] = useState([
    {
      budget: 1,
      x: "Row 1",
      y: "Row 1",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        budget: rows.length + 1,
        x: `Row ${rows.length + 1}`,
        y: `Row ${rows.length + 1}`,
      },
    ]);
  };

  return (
    <main>
      <div className=" mt-8 p-3 w-fit max-w-9xl mx-auto bg-white dark:bg-slate-800">
        <CustomTable>
          <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
            <tr>
              <th>
                <div className="font-semibold text-left">Monthly Budget</div>
              </th>
              <th>
                <div className="font-semibold text-left">X</div>
              </th>
              <th>
                <div className="font-semibold text-left">Y</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    className=" bg-transparent border-none"
                    placeholder="Enter your budget"
                  />
                </td>
                <td>{row.x}</td>
                <td>{row.y}</td>
              </tr>
            ))}
          </tbody>
        </CustomTable>

        <button
          className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-4 w-full"
          onClick={addRow}
        >
          <svg
            className="w-4 h-4 fill-current opacity-50 shrink-0"
            viewBox="0 0 16 16"
          >
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
          <span className="hidden xs:block ml-2">Add view</span>
        </button>
      </div>
    </main>
  );
};

export default Assumptions;

const CustomTable = styled.table`
  margin: auto;
  td,
  th {
    min-width: 100px;
    padding: 0.5rem;
    white-space: no-wrap;
  }
  input {
    border: none;
    outline: none;
  }
`;
