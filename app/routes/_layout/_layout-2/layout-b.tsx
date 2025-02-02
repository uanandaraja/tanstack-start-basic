import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_layout-2/layout-b')({
  component: LayoutBComponent,
})

function LayoutBComponent() {
  return (
    <div className="rounded-lg border bg-white dark:bg-gray-900 p-4">
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Layout B Page</div>
      <div className="text-xs text-gray-400 dark:text-gray-500">/_layout/_layout-2/layout-b.tsx</div>
    </div>
  )
}
