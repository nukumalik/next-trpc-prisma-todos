import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import {todosRoute} from '../../../trpc/todos'

export const appRouter = trpc.router().merge(todosRoute)

export type AppRouter = typeof appRouter

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
})
