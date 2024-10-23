import React, { useState, useEffect } from 'react';

const LifecycleLoggerComponent = ({ watchedProp }) => {

  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log(`Component re-rendered. watchedProp: ${watchedProp}, count: ${count}`);
  }, [watchedProp, count]);

  return (
    <div>
      <p>Watched Prop: {watchedProp}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default LifecycleLoggerComponent;
