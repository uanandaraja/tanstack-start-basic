import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/')({
  component: UsersIndexComponent,
})

function UsersIndexComponent() {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400 mt-12">
      <p>Select a user from the sidebar to view their details.</p>
    </div>
  )
}
