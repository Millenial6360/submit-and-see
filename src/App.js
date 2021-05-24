import './App.css';
import React, { useState } from 'react';
import ResultList from './Resultlist';

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setList(prev => {
      if (prev.includes(text)) {
        prev = prev.filter(a => a!= text)
        return [
          text,
          ...prev
        ]
      } else {
        return [
          ...prev,
          text
        ];
      }
    });

    setText("");
  }
  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <label>
          <h1>Enter Something</h1></label>
        <input
        className="input"
          type="text"
          value={text}
          placeholder="text here"
          onChange={handleChange} />
        <br />
        
        <button
          className="button"
          type="Submit"
        >Submit</button>
      </form>
      <br />

      <ResultList list={list} />
    </div>
  );
}

export default App;
