import React from 'react';
import '../css/EndpointTable.css'

function EndpointTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Data Type</th>
          <th>Required</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.data_type}</td>
            <td>{item.required}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EndpointTable;
