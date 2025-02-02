import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import axios from 'redaxios'
import { DEPLOY_URL } from '../utils/users'
import type { User } from '../utils/users'

export const Route = createFileRoute('/users')({
  loader: async () => {
    return await axios
      .get<Array<User>>(DEPLOY_URL + '/api/users')
      .then((r) => r.data)
      .catch(() => {
        throw new Error('Failed to fetch users')
      })
  },
  component: UsersComponent,
})

function UsersComponent() {
  const users = Route.useLoaderData()

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Users</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Select a user to view their details.
        </p>
      </div>

      <div className="flex gap-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="w-64 border-r border-gray-200 dark:border-gray-800 p-4">
          <div className="space-y-1">
            {[
              ...users,
              { id: 'i-do-not-exist', name: 'Non-existent User', email: '' },
            ].map((user) => {
              return (
                <Link
                  key={user.id}
                  to="/users/$userId"
                  params={{
                    userId: String(user.id),
                  }}
                  className="block px-3 py-2 text-sm rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  activeProps={{ 
                    className: 'block px-3 py-2 text-sm rounded-md bg-gray-100 dark:bg-gray-800 font-medium text-gray-900 dark:text-white'
                  }}
                >
                  {user.name}
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
