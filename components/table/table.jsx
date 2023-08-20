import React from "react";
import tables from "../../public/links.json";

const TableComponent = () => {
  return tables.map((table) => (
    <table>
      <tr>
        <th>{table.heading}</th>
      </tr>
      {table.rows.map((row) => {
        return (
          <tr>
            <td>
              <a href={row.link} target="_blank">
                {row.title}
              </a>
            </td>
            <td>{row.body}</td>
          </tr>
        );
      })}
    </table>
  ));
};

export default TableComponent;
