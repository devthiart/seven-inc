const URL = 'http://localhost:8080'

const ApiService = {
  ListEmployees: async () => {
    const response = await fetch(`${URL}/employees`);

    if(response.ok) {
      return await response.json();
    }

    console.log(response);
    throw new Error(response);
  },

  AddEmployees: async (employee) => {
    const response = await fetch(`${URL}/employees`, 
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(employee)
      }
    );

    if(response.ok){
      return await response.json();
    }

    console.log(response);
    throw new Error(response);
  },

  RemoveEmployees: async (id) => {
    const response = await fetch(`${URL}/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    if(response.ok){
      return await response.json();
    }

    console.log(response);
    throw new Error(response);
  },

  getEmployee: async (id) => {
    const response = await fetch(`${URL}/employees/${id}`);

    if(response !== null) {
      return await response.json();
    }

    console.log(response);
    throw new Error(response);
  },

  EditEmployee: async (employee) => {
    const response = await fetch(`${URL}/employees/${employee.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(employee)
    });

    if(response.ok){
      return await response.json();
    }

    console.log(response);
    throw new Error(response);
  }
}

export default ApiService;