import React from 'react';
import '../css/JsonDisplay.css';

function JsonDisplay({ data }) {
  const jsonString = JSON.stringify(data, null, 2); // Format JSON with 2-space indentation

  return (
    <pre className='code-card'>
      <code style={{overflowX:"scroll", backgroundColor:"#333"}}>{jsonString}</code>
    </pre>
  );
}

export default JsonDisplay;
