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
    <div className="flex">
      <div className="w-64 border-r min-h-[calc(100vh-4rem)] p-4">
        <h2 className="font-medium text-sm text-gray-500 mb-4">Users</h2>
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
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  )
}
