import type {Todo} from '@prisma/client'
import React, {useState} from 'react'
import {Button, Card, CardBody, Col, Input, Row, Table} from 'reactstrap'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import useTodos from '../hooks/useTodos'

const TodosPage = () => {
  const {title, setTitle, onSubmit} = useTodos()

  return (
    <div className="min-vh-100 min-vh-100 d-flex justify-content-center bg-light">
      <Card className="mx-auto mt-5 border-0 shadow" style={{maxWidth: 500, height: 'max-content'}}>
        <CardBody>
          <h1 className="text-center mb-4 fw-bolder">
            <span className="text-primary">Todos</span>
            <span className="text-info">.bro</span>
          </h1>
          <TodoForm />
          <div className="mt-4">
            <TodoList />
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default TodosPage
