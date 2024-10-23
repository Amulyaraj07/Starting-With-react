import React, { useState } from 'react';

function ToggleListComponent(){
  // State to manage the visibility of the list
  const [isListVisible, setIsListVisible] = useState(true);

  // Toggle function to switch visibility
  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div>
      <button onClick={toggleListVisibility}>
        {isListVisible ? 'Hide List' : 'Show List'}
      </button>
      
      {/* Conditional rendering: list is displayed only if isListVisible is true */}
      {isListVisible && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default ToggleListComponent;
