
// mapping through tasks by creating a list by using map array method
// this kept in tasks means it can only be used in tasks compoenents
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
  // we w3ant to access these form other component, use api so you can pull different pieces of state from it.

  return (

    <>
    {tasks.map((task) => (<Task key={task.id} task={task}
      onDelete={onDelete} onToggle={onToggle}/>))}

    </>
  )
}

export default Tasks
