import React, { useState, useEffect } from 'react';
import './App.css';
import  Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'
import { Button, TextField } from '@material-ui/core';


function App() {
  // array variable for storing todo
  const [todos, setTodos] = useState([]);
  // variable for input  field to make it empty
  const [input, setInput] = useState('');
  
  useEffect(() => {
    // this code fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().task))
    })
  }, []);

  const addTodo = (event) => {
    // this function activates when we click add button
    event.preventDefault();  //will stop the form refresh
    
    //add todos into db 
    db.collection('todos').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');  //will clear the input field after we typed the todo
  }


  return (
    <div className="App">
      <h1>Todo App</h1>

      <form >
        <TextField id="outlined-basic"  variant="outlined" value = {input} onChange = {event => setInput(event.target.value)} />
        <Button type="submit" onClick = {addTodo} disabled = {!input} variant="contained" color="primary">Add Todo</Button>
      </form>
      
      <ul>
        {/* array population of todo loop */}
        {todos.map(todo => (
          <Todo text = {todo} />
          // <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
