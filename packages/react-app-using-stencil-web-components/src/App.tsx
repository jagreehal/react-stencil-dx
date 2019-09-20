import React, { useState } from 'react';
const App: React.FC = () => {
  const [count, setCount] = useState(5);

  return (
    <div className="App">
      <my-component first="Jag" last="Reehal" count={count} />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
