import styled from 'styled-components';

export const FormID = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  width: 80%;
`;

export const LabelID = styled.label`
  font-size: 1.25rem;
  margin: 0.5rem;
`;

export const InputID = styled.input`
  border: 1px solid black;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  padding: 0.5rem;
`;

export const ButtonID = styled.button`
  background-color: var(--primary-color);
  border: 1px solid black;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1.25rem;
  margin-left: 0.5rem;
  padding: 0.5rem 0.75rem;
  :hover {
    background-color: var(--secondary-color);
  }
  :active {
    background-color: var(--button-click-color);
  }
`;

export const TableID = styled.table`
  border-radius: 25rem;
  margin: 0 auto 2rem auto;
  width: 90%;

  thead {
    background-color: var(--primary-color);
  }

  td, th {
    border: 1px solid #000000;
  }

  th {
    padding: 1rem;
  }

  td {
    padding: 0.5rem;
    text-align: center;
  }
`;