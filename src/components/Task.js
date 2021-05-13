import { FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  // we w3ant to access these form other component, use api so you can pull different pieces of state from it.

  return (

    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick ={() =>
    onToggle(task.id)}>
    <h3>{task.text} <FaTimes style= {{color: 'puple', cursor: 'pointer' }}
    onClick={() => onDelete(task.id)} /> </h3>
    <p>{task.day} </p>
    </div>
  )
}

export default Task
