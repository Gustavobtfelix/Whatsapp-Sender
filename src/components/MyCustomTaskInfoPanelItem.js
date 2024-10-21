import React from 'react';

const MyCustomTaskInfoPanelItem = () => (
  <div>
    <br />
    <hr />
    <p>TO DO</p>
    <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
      <li>Answer the task</li>
      <li>Locate the customer's record in the CRM</li>
      <li>Find relevant account details</li>
      <li>Resolve the customer's support issue</li>
      <li>Complete the task</li>
    </ul>
  </div>
);

export default MyCustomTaskInfoPanelItem;