import './App.css';
import React, { useState, useEffect } from 'react';
import ApiService from './utils/ApiService';
import FormEmployee from './components/FormEmployee';
import TableEmployees from './components/TableEmployees';
import FindEmployeeById from './components/FindEmployeeById';
import PopUp from './components/PopUp';

function App() {
  const [employees, setEmployees] = useState([]);
  const [formEdit, setFormEdit] = useState();
  const [hiddenFormRegister, setHiddenFormRegister] = useState(false);
  const [statePopUp, setStatePopUp] = useState({
    show: false, 
    color: '#333333', 
    message: 'Sem mensagem'
  });
  const colorSuccess = '#28A745';

  useEffect(() => {
    updateTable();
  }, []);

  async function updateTable() {
    const response = await ApiService.ListEmployees();

    setEmployees(response);
  }

  async function addEmployee(employee) {
    const response = await ApiService.AddEmployees(employee);

    setEmployees([...employees, response]);

    activePopUp(`${response.name} foi adicionado(a) com sucesso!`, colorSuccess);
  }

  async function getEmployee(id) {
    const response = await ApiService.getEmployee(id);

    return response;
  }

  function submitEmployeeToEdit(employee) {
    setFormEdit(<FormEmployee employee={employee} onSubmit={editEmployee} />);
    setHiddenFormRegister(true);
    window.scrollTo(0, 0);
  }

  async function editEmployee(editedEmployee) {
    const response = await ApiService.EditEmployee(editedEmployee);

    const updatedEmployees = employees.map((employee) => {
      if(employee.id === editedEmployee.id) {
        return response;
      }
      return employee;
    });

    setEmployees(updatedEmployees);
    
    setFormEdit();

    setHiddenFormRegister(false);

    activePopUp("Funcionário(a) editado com sucesso!", colorSuccess);
  }
  
  async function deleteEmployee(id) {
    await ApiService.RemoveEmployees(id);
    
    const updatedEmployees = employees.filter((employee) => {
      if(employee.id !== id) {
        return employee;
      }
      return null;
    });

    setEmployees(updatedEmployees);
    
    activePopUp("Funcionário(a) removido com sucesso!", colorSuccess);
  }

  function activePopUp(message, color) {
    setStatePopUp({
      show: true,
      message: message,
      color: color
    });

    setTimeout(() => {
      setStatePopUp({...statePopUp, show: false});
    }, 3000);
  }

  return (
    <div className="App">
      <FormEmployee onSubmit={addEmployee} hidden={hiddenFormRegister} />
      {formEdit}
      <TableEmployees employees={employees} editEmployee={submitEmployeeToEdit} deleteEmployee={deleteEmployee} />
      <FindEmployeeById getEmployee={getEmployee} />
      <PopUp show={statePopUp.show} message={statePopUp.message} color={statePopUp.color} />
    </div>
  );
}

export default App;
