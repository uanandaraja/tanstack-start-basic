import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_layout-2')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-white dark:bg-gray-900 p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Nested Layout</div>
        <div className="text-xs text-gray-400 dark:text-gray-500">/_layout/_layout-2.tsx</div>
      </div>

      <div className="flex gap-3 p-3 rounded-md bg-gray-50 dark:bg-gray-800/50">
        <Link
          to="/layout-a"
          className="px-3 py-1.5 text-sm rounded-md text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800"
          activeProps={{
            className: 'px-3 py-1.5 text-sm rounded-md bg-white dark:bg-gray-800 font-medium text-gray-900 dark:text-white shadow-sm',
          }}
        >
          Layout A
        </Link>
        <Link
          to="/layout-b"
          className="px-3 py-1.5 text-sm rounded-md text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800"
          activeProps={{
            className: 'px-3 py-1.5 text-sm rounded-md bg-white dark:bg-gray-800 font-medium text-gray-900 dark:text-white shadow-sm',
          }}
        >
          Layout B
        </Link>
      </div>

      <div className="border rounded-lg p-4 bg-white/50 dark:bg-gray-900/50">
        <Outlet />
      </div>
    </div>
  )
}
