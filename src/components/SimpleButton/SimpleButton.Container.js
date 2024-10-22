// src/components/SimpleButton/SimpleButton.Container.js
import React, { useState } from 'react';
import SimpleButton from './SimpleButton';

const SimpleButtonContainer = () => {
  const [taskQueue, setTaskQueue] = useState('default-queue'); // Example state for taskQueue
  const [message, setMessage] = useState('Hello from Twilio Flex!'); // Example message

  const handleClick = async () => {
    try {
      const response = await fetch(
        'https://foundation-stg.stone.com.br/cia-api-gentil/agent_send_message',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            taskQueue: taskQueue,
            Message: message,
          }),
        }
      );
  
      if (response.status === 204) {
        console.log('Message sent successfully: No content');
        alert('Message sent successfully!');
      } else if (response.ok) {
        const data = await response.json();
        console.log('Message sent successfully:', data);
        alert('Message sent successfully!');
      } else {
        console.error('Failed to send message:', response.statusText);
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred.');
    }
  };

  return <SimpleButton label="Send Message" onClick={handleClick} />;
};

export default SimpleButtonContainer;
