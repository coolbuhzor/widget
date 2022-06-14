import React, { useState } from 'react';
import Form from './form/index';
function App() {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };
  return (
    <div className="App">
      <button onClick={handleShowForm}> show</button>
      {showForm && <Form setShowForm={setShowForm} />}
    </div>
  );
}

export default App;
