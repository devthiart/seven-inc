import React, { useEffect } from 'react';
import DateHelper from '../../utils/DateHelper';
import { TableID } from './styles';

function TableEmployee({employee}) {
  useEffect(() => {
    window.scrollTo(0, window.innerHeight);
  }, []);

  return (
    <TableID>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data</th>
            <th>Salário</th>
            <th>Posição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{DateHelper.dateToText(employee.date)}</td>
            <td>{employee.salary}</td>
            <td>{employee.position}</td>
          </tr>
        </tbody>
      </TableID>
  );
}

export default TableEmployee;