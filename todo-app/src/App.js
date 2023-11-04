import logo from './logo.svg';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import './components/Todo/TodoApp.css';
import Counter from './components/counter/Counter'
import TodoApp from './components/Todo/TodoApp'
import LoginComponent from './components/Todo/LoginComponent'
import WelcomComponent from './components/Todo/WelcomeComponent';
import React from 'react'


function App() {
  return (
    <div className="App">
       <TodoApp/>
    </div>
  );
}

export default App;
