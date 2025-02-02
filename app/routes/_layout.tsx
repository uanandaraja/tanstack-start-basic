import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6 rounded-lg border bg-white dark:bg-gray-900 p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Root Layout</div>
        <div className="text-xs text-gray-400 dark:text-gray-500">/_layout.tsx</div>
      </div>
      <div className="border rounded-lg p-6 bg-white/50 dark:bg-gray-900/50">
        <Outlet />
      </div>
    </div>
  )
}
