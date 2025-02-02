import { ErrorComponent, createFileRoute } from '@tanstack/react-router'
import axios from 'redaxios'
import type { ErrorComponentProps } from '@tanstack/react-router'
import type { User } from '~/utils/users'
import { DEPLOY_URL } from '~/utils/users'
import { NotFound } from '~/components/NotFound'

export const Route = createFileRoute('/users/$userId')({
  loader: async ({ params: { userId } }) => {
    return await axios
      .get<User>(DEPLOY_URL + '/api/users/' + userId)
      .then((r) => r.data)
      .catch(() => {
        throw new Error('Failed to fetch user')
      })
  },
  errorComponent: UserErrorComponent,
  component: UserComponent,
  notFoundComponent: () => {
    return <NotFound>User not found</NotFound>
  },
})

export function UserErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />
}

function UserComponent() {
  const user = Route.useLoaderData()

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-6">{user.name}</h1>
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Email
            </label>
            <div className="text-sm">{user.email}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              User ID
            </label>
            <div className="text-sm font-mono">{user.id}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
