export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between'>
        <span
          className={`align-self-center ${
            todo.done ? 'badge badge-success' : ''
          }`}
          onClick={() => onToggleTodo(todo.id)}
          aria-label='span'
        >
          {todo.description}
        </span>
        <button
          className='btn btn-danger'
          onClick={() => onDeleteTodo(todo.id)}
        >
          {' '}
          Borrar
        </button>
      </li>
    </>
  );
};
