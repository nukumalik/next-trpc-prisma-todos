import * as trpc from '@trpc/server'
import {z} from 'zod'
import {prisma} from '../utils/prisma'

export const todosRoute = trpc
  .router()
  .query('todos', {
    async resolve() {
      try {
        const data = await prisma.todo.findMany()
        return {message: 'Success to get todos', data}
      } catch (error) {
        return {message: 'Failed to get todos', data: []}
      }
    },
  })
  .mutation('addTodo', {
    input: z.object({title: z.string()}),
    async resolve({input: {title}}) {
      try {
        await prisma.todo.create({data: {title}})
        return {message: 'Success to add todo'}
      } catch (error) {
        return {message: 'Failed to add todo'}
      }
    },
  })
  .mutation('updateTodo', {
    input: z.object({id: z.string(), isComplete: z.boolean()}),
    async resolve({input: {id, isComplete}}) {
      try {
        await prisma.todo.update({where: {id}, data: {isComplete}})
        return {message: 'Success to update todo'}
      } catch (error) {
        return {message: 'Failed to update todo'}
      }
    },
  })
  .mutation('deleteTodo', {
    input: z.object({id: z.string()}),
    async resolve({input: {id}}) {
      try {
        await prisma.todo.delete({where: {id}})
        return {message: 'Success to delete todo'}
      } catch (error) {
        return {message: 'Failed to delete todo'}
      }
    },
  })

export type TodosRoute = typeof todosRoute
