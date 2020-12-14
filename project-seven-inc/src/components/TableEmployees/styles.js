import styled from 'styled-components';

export const Table = styled.table`
  border-radius: 25rem;
  margin: 0 auto;
  width: 90%;

  thead {
    background-color: var(--primary-color);
  }

  tbody tr:hover {
    background-color: #dddddd;
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