import React, { useEffect, useState } from 'react';
import DateHelper from '../../utils/DateHelper';
import { Form, Input, Button } from './styles';

function FormEmployee({ employee, onSubmit, hidden }) {
  const [state, setState] = useState(
    {
      name: '',
      date: '',
      salary: 0,
      position: ''
    }
  );
  const [nameAction, setNameAction] = useState("Cadastrar");
  const [thisIsFormEdit, setThisIsFormEdit] = useState(false);

  useEffect(() => {
    setThisIsFormEdit((employee != null));
    if (thisIsFormEdit) {
      setState({ ...employee, date: DateHelper.dateToInput(employee.date) });
      setNameAction("Editar");
    }
  }, [employee, thisIsFormEdit]);

  function _handleName(event) {
    setState({ ...state, name: event.target.value });
  }

  function _handleDate(event) {
    setState({ ...state, date: event.target.value });
  }

  function _handleSalary(event) {
    setState({ ...state, salary: event.target.value });
  }

  function _handlePosition(event) {
    setState({ ...state, position: event.target.value });
  }

  function _handleSubmit(event) {
    event.preventDefault();

    const employeeToDB = { ...state, date: DateHelper.textToDate(state.date) }

    if (thisIsFormEdit === false) {
      setState({
        name: '',
        date: '',
        salary: 0,
        position: ''
      });
    }

    onSubmit(employeeToDB);
  }

  return (
    <>
      <h1 hidden={hidden}>{nameAction + ' Funcionário'}</h1>
      <Form onSubmit={_handleSubmit} hidden={hidden}>
        <label>Nome</label>
        <Input
          type="text"
          name="Nome"
          value={state.name}
          onChange={_handleName}
          required
        />
        <label>Data</label>
        <Input
          type="date"
          name="Data"
          value={state.date}
          onChange={_handleDate}
          required
        />
        <label>Salário</label>
        <Input
          type="number"
          name="Salário"
          value={state.salary}
          onChange={_handleSalary}
          required
        />
        <label>Posição</label>
        <Input
          type="text"
          name="Posição"
          value={state.position}
          onChange={_handlePosition}
          required
        />
        <Button type="submit">{nameAction}</Button>
      </Form>
    </>
  );
}

export default FormEmployee;