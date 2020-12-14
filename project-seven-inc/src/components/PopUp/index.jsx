import React from 'react';
import { StylePopUp } from './styles';

function PopUp({show, color, message }) {
  return (
    <StylePopUp show={show} color={color} >{message}</StylePopUp>
  )
}

export default PopUp;