import React from 'react';
import DateHelper from '../../utils/DateHelper';
import { Table } from './styles';

function TableEmployees({ employees, editEmployee, deleteEmployee }) {
  return (
    <>
      <h1>Tabela de Funcionários</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data</th>
            <th>Salário</th>
            <th>Posição</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{DateHelper.dateToText(employee.date)}</td>
                <td>{'R$ ' + employee.salary}</td>
                <td>{employee.position}</td>
                <td><button onClick={() => editEmployee(employee)}>Editar</button></td>
                <td><button onClick={() => deleteEmployee(employee.id)}>Excluir</button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default TableEmployees;