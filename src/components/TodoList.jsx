import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo }) {
  return (
      <ul className='list'>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        ))}
      </ul>
  )
}
