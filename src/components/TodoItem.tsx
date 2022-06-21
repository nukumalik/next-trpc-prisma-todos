import type {Todo} from '@prisma/client'
import React from 'react'
import {Button} from 'reactstrap'
import useTodos from '../hooks/useTodos'

interface Props {
  index: number
  todo: Todo
}

const TodoItem: React.FC<Props> = ({todo, index}) => {
  const {onToggle, onRemove} = useTodos()

  return (
    <tr
      key={todo.id}
      className={todo.isComplete ? 'fw-bolder' : ''}
      style={{background: todo.isComplete ? '#c0e0c6' : ''}}
    >
      <td className={todo.isComplete ? 'text-success' : 'text-dark'}>{index + 1}</td>
      <td>
        <span
          className={todo.isComplete ? 'text-success' : 'text-dark'}
          style={{cursor: 'pointer'}}
          onClick={() => onToggle(todo)}
        >
          {todo.title}
        </span>
      </td>
      <td>
        <div className="d-flex justify-content-end">
          <Button type="button" onClick={() => onRemove(todo.id)} color="danger">
            Delete
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default TodoItem
