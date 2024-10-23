import React, { useState } from 'react';

function EventHandlingComponent() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dblClicked, setDblClicked] = useState(false);

  // Handle click event
  const handleClick = () => {
    alert('Button clicked!');
  };

  // Handle mouse hover event
  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  // Handle input focus event
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  // Handle double click event
  const handleDoubleClick = () => {
    setDblClicked(true);
    setTimeout(() => setDblClicked(false), 1000); // Reset after 1 second
  };

  // Handle input change event
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission event
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <h1>React Event Handling Example</h1>

      <button 
        onClick={handleClick} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
        onDoubleClick={handleDoubleClick}
        style={{ backgroundColor: hovered ? 'yellow' : 'lightblue' }}
      >
        {dblClicked ? 'Double Clicked!' : 'Hover, Click, or Double Click me'}
      </button>

      <br /><br />

      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={focused ? 'Focused!' : 'Type something...'} 
      />

      <br /><br />

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      {submittedValue && <p>Submitted Value: {submittedValue}</p>}
    </div>
  );
}

export default EventHandlingComponent;
