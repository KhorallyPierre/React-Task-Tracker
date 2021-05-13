// .. everyhting rendered on the page is from this file
// import React from 'react'
import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: "eat snacks",
          day: "Feb 5, at 2:30pm",
          reminder: false,
      },
      {
          id: 2,
          text: "exercise",
          day: "Feb 7, at 2:30pm",
          reminder: false,
      },
      {
          id: 3,
          text: "call mom",
          day: "Feb 20, at 4:30pm",
          reminder: false,
      },
    ]
  )

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Tasks

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  // Toggle Reminder for incomplete tasks

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    console.log(id)
  }
  return (
    // // only one single parent element can be reutnr in the div
    // we can pass anything we want in to retrieve a prop
      // js can be written right in here
    <div className = "container" >

      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/ >
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/ >: 'All done! No tasks to show here :)'}
    </div>
  )
}
// class App extends React.Component {
//   render() {
//     return <h1 > Hello from a class </h1>
//   }
// }


export default App;
