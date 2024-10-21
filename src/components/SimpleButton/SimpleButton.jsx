// src/components/SimpleButton/SimpleButton.jsx
import React from 'react';
import { StyledButton } from './SimpleButton.Styles';

// A simple button with an onClick handler as a prop.
const SimpleButton = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>
    {label}
  </StyledButton>
);

export default SimpleButton;
