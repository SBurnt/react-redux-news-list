import React from 'react';
import '../App.css';

import Form from './Form';
import NewsList from './NewsList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Add news</h1>
          <Form />
        </div>
        <div className="col-md-6">
          <h1>News List</h1>
          <NewsList />
        </div>
      </div>
    </div>
  );
}

export default App;
