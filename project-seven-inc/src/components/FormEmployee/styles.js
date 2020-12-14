import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: ${props => props.hidden ? '0' : 'auto'};
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  width: 80%;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  border: 1px solid black;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1.25rem;
  margin-top: 1rem;
  padding: 0.75rem;
  :hover {
    background-color: var(--secondary-color);
  }
  :active {
    background-color: var(--button-click-color);
  }
`;