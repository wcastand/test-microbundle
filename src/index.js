import React from "react";

const MyComponent = ({ msg }) => (
  <div>
    <span>My Component</span>
    {msg ? <span>{msg}</span> : null}
  </div>
);

export default MyComponent;
