import { useState } from "react";

import {BrowserRouter as Router,Route } from 'react-router-dom'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
 
    const [showAddTask,setShowAddTask] = useState(false)
    const [tasks , setTasks] = useState( [])
//add TAsk
const addTask =(task) =>
{ const id = Math.floor(Math.random() * 10000)+1
  const newTask = {id , ...task}
  setTasks([...tasks,newTask])
}
// delete task
const deleteTask = (id) => {
    
  setTasks(tasks.filter((task) => task.id !== id));
}
// Toggle Reaminder
const toggleReminder = (id) => {
    //console.log("toggle",id);
    setTasks(
        tasks.map((task) => task.id === id ? 
        {...task, reminder:!task.reminder }:task)
    )
}
 return (
   <Router>
    <div className="container">
     <Header onAdd = {() =>setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
     
<Route path = '/' exact render ={(props) => (
<>
{ showAddTask && <AddTask onAdd={addTask}/>}
     { tasks.length > 0 ?(
     <Tasks tasks = {tasks} 
     onDelete ={deleteTask} 
     onToggle = {toggleReminder}/>
     ):("No Tasks To Show ") 
}
</>

)} />
<Route path ='/About' component={About}/>
<Footer />
      </div></Router>
  )
}

export default App;
