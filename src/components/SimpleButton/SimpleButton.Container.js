// src/components/SimpleButton/SimpleButton.Container.js
import React from 'react';
import SimpleButton from './SimpleButton';

// Example: Wrap the button with custom logic if needed.
const SimpleButtonContainer = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    alert('Hello from Twilio Flex!');
  };

  return <SimpleButton label="Click Me" onClick={handleClick} />;
};

export default SimpleButtonContainer;
