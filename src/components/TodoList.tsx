import type {Todo} from '@prisma/client'
import React from 'react'
import {Table} from 'reactstrap'
import useTodos from '../hooks/useTodos'
import TodoItem from './TodoItem'

interface Props {}

const TodoList: React.FC<Props> = () => {
  const {todos} = useTodos()

  return (
    <div>
      {todos?.data?.data?.length ? (
        <Table className="align-middle">
          <tbody>
            {todos?.data?.data?.map((todo, index) => (
              <TodoItem key={todo?.id} index={index} todo={todo} />
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center fw-bold pt-1 pb-2" style={{color: '#888'}}>
          <span>Empty Data</span>
        </div>
      )}
    </div>
  )
}

export default TodoList
