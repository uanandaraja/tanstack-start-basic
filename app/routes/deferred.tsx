import { Await, createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { Suspense, useState } from 'react'

const personServerFn = createServerFn({ method: 'GET' })
  .validator((d: string) => d)
  .handler(({ data: name }) => {
    return { name, randomNumber: Math.floor(Math.random() * 100) }
  })

const slowServerFn = createServerFn({ method: 'GET' })
  .validator((d: string) => d)
  .handler(async ({ data: name }) => {
    await new Promise((r) => setTimeout(r, 1000))
    return { name, randomNumber: Math.floor(Math.random() * 100) }
  })

export const Route = createFileRoute('/deferred')({
  loader: async () => {
    return {
      deferredStuff: new Promise<string>((r) =>
        setTimeout(() => r('Hello deferred!'), 2000),
      ),
      deferredPerson: slowServerFn({ data: 'Tanner Linsley' }),
      person: await personServerFn({ data: 'John Doe' }),
    }
  },
  component: Deferred,
})

function Deferred() {
  const [count, setCount] = useState(0)
  const { deferredStuff, deferredPerson, person } = Route.useLoaderData()

  return (
    <div className="space-y-6 max-w-2xl mx-auto p-6">
      <div className="rounded-lg border bg-white dark:bg-gray-900 p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
          Instant Data (No Loading State)
        </div>
        <div className="text-sm" data-testid="regular-person">
          <span className="font-medium">{person.name}</span> - Random Number: {person.randomNumber}
        </div>
      </div>

      <div className="rounded-lg border bg-white dark:bg-gray-900 p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          Deferred Person (1s delay)
        </div>
        <Suspense 
          fallback={
            <div className="animate-pulse flex items-center gap-2 text-sm text-gray-400">
              <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              Loading person data...
            </div>
          }
        >
          <Await
            promise={deferredPerson}
            children={(data) => (
              <div className="text-sm" data-testid="deferred-person">
                <span className="font-medium">{data.name}</span> - Random Number: {data.randomNumber}
              </div>
            )}
          />
        </Suspense>
      </div>

      <div className="rounded-lg border bg-white dark:bg-gray-900 p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          Deferred Message (2s delay)
        </div>
        <Suspense 
          fallback={
            <div className="animate-pulse flex items-center gap-2 text-sm text-gray-400">
              <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              Loading message...
            </div>
          }
        >
          <Await
            promise={deferredStuff}
            children={(data) => (
              <div className="text-sm font-medium" data-testid="deferred-stuff">
                {data}
              </div>
            )}
          />
        </Suspense>
      </div>

      <div className="rounded-lg border bg-white dark:bg-gray-900 p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          Interactive Counter
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">Count: {count}</div>
          <button
            onClick={() => setCount(count + 1)}
            className="px-3 py-1.5 text-sm rounded-md bg-gray-100 dark:bg-gray-800 
              hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Increment
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-400 dark:text-gray-500">
        This example demonstrates different data loading patterns:
        <ul className="mt-2 space-y-1 list-disc pl-4">
          <li>Instant data that loads with the route</li>
          <li>Deferred data that streams in after 1 second</li>
          <li>Deferred data that streams in after 2 seconds</li>
          <li>Interactive state that persists across streaming updates</li>
        </ul>
      </div>
    </div>
  )
}
