// Create a react component that inputs a text area message and then performs a fetch request to localhost 3001, gets back a response as data.message and dispalys the message in box below

import React, {useState} from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({message}),
    })
    .then((res) => res.json())
    .then((data) => setResponse(data.message));
  };
  return(
    <div className="App">
      <h1>History teacher - PreHistoric Era</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything about pre historic era"
        ></textarea>
        <button type="Submit">Submit</button>
      </form>
      {response && <div><b>Mr. Steve:</b> {response}</div>}
    </div>
  );
}

export default App