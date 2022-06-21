import React from 'react'
import {Button, Col, Input, Row} from 'reactstrap'
import useTodos from '../hooks/useTodos'

const TodoForm = () => {
  const {title, setTitle, onSubmit} = useTodos()

  return (
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
  )
}

export default TodoForm
