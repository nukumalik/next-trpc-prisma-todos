import type {Todo} from '@prisma/client'
import React, {useState} from 'react'
import {Button, Card, CardBody, Col, Input, Row, Table} from 'reactstrap'
import useTodos from '../hooks/useTodos'

const TodosPage = () => {
  const {todos, title, setTitle, onSubmit, onToggle, onRemove} = useTodos()

  return (
    <div className="min-vh-100 min-vh-100 d-flex justify-content-center bg-light">
      <Card className="mx-auto mt-5 border-0 shadow" style={{maxWidth: 500, height: 'max-content'}}>
        <CardBody>
          <h1 className="text-center mb-4 fw-bolder">
            <span className="text-primary">Todos</span>
            <span className="text-info">.bro</span>
          </h1>
          <form method="post" onSubmit={onSubmit} noValidate>
            <Row>
              <Col md={8}>
                <Input
                  type="text"
                  value={title}
                  onChange={({target}) => setTitle(target.value)}
                  autoFocus
                />
              </Col>
              <Col md={4}>
                <Button color="success w-100">Submit</Button>
              </Col>
            </Row>
          </form>
          <div className="mt-4">
            {todos?.data?.data?.length ? (
              <Table className="align-middle">
                <tbody>
                  {todos?.data?.data?.map((todo, index) => (
                    <tr
                      key={todo.id}
                      className={todo.isComplete ? 'fw-bolder' : ''}
                      style={{background: todo.isComplete ? '#c0e0c6' : ''}}
                    >
                      <td className={todo.isComplete ? 'text-success' : 'text-dark'}>
                        {index + 1}
                      </td>
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
                  ))}
                </tbody>
              </Table>
            ) : (
              <div className="text-center fw-bold pt-1 pb-2" style={{color: '#888'}}>
                <span>Empty Data</span>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default TodosPage
