import './index.css'

const ToDoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-name">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default ToDoItem
