import styled from 'styled-components';

export const StylePopUp = styled.div`
  background-color: ${props => props.color};
  bottom: 30px;
  color: #fff;
  left: 50%;
  margin-left: -125px;
  min-width: 250px;
  padding: 1rem;
  position: fixed;
  text-align: center;
  visibility: ${props => props.show ? "visible" : "hidden"};
  z-index: 1;
`;