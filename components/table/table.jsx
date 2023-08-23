import React from "react";
import tables from "../../public/links.json";

const TableComponent = () => {
  return tables.map((table, i) => (
    <table key={`table-${i}`}>
      <tbody>
        <tr>
          <th>{table.heading}</th>
        </tr>
        {table.rows.map((row, j) => {
          return (
            <tr key={`row-${j}`}>
              <td>
                <a href={row.link} target="_blank">
                  {row.title}
                </a>
              </td>
              <td>{row.body}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ));
};

export default TableComponent;
