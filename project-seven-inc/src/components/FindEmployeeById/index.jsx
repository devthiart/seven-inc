import React, { useEffect, useState } from 'react';
import TableEmployee from './TableEmployee';
import { FormID, LabelID, InputID, ButtonID } from './styles';

function FindEmployeeById({ getEmployee }) {
  const [id, setId] = useState('');
  const [employee, setEmployee] = useState('');
  const [table, setTable] = useState('');

  useEffect(() => {
    if(employee !== '') {
      setTable(<TableEmployee employee={employee} />);
    } else {
      setTable('');
    }
  }, [employee]);

  function _handleId(event) {
    setId(event.target.value);
  }

  function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  async function _handleSubmit(event) {
    event.preventDefault();

    const response = await getEmployee(id);

    if(objectIsEmpty(response)){
      setEmployee('');
      alert("Funcionário não encontrado!");
    } else {
      setEmployee(response);
    }
  }

  return (
    <>
      <h1>Pesquisar Funcionário pelo ID</h1>
      <FormID onSubmit={_handleSubmit}>
        <LabelID>ID</LabelID>
        <InputID type="number" value={id} onChange={_handleId} required/>
        <ButtonID type="submit">Pesquisar</ButtonID>
      </FormID>
      {table}
    </>
  )
}

export default FindEmployeeById;