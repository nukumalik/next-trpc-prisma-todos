import type {Todo} from '@prisma/client'
import {useState} from 'react'
import {trpc} from '../utils/trpc'

export default function useTodos() {
  // States
  const [title, setTitle] = useState('')

  // Queries
  const todos = trpc.useQuery(['todos'])

  // Mutations
  const add = trpc.useMutation(['addTodo'])
  const toggle = trpc.useMutation('updateTodo')
  const remove = trpc.useMutation('deleteTodo')

  // Handlers
  const onSubmit = async (e: any) => {
    e.preventDefault()
    await add.mutate(
      {title},
      {
        onSuccess() {
          todos.refetch()
        },
      }
    )
    setTitle('')
  }

  const onToggle = async ({id, isComplete}: Todo) => {
    await toggle.mutate(
      {id, isComplete: !isComplete},
      {
        onSuccess() {
          todos.refetch()
        },
      }
    )
  }

  const onRemove = async (id: string) => {
    await remove.mutate(
      {id},
      {
        onSuccess() {
          todos.refetch()
        },
      }
    )
  }

  return {todos, title, setTitle, onSubmit, onToggle, onRemove}
}
