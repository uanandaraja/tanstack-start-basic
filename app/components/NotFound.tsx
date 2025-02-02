import { Link } from '@tanstack/react-router'
import { XMarkIcon, ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline'

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="rounded-lg border bg-white dark:bg-gray-900 p-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <XMarkIcon className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Page Not Found
          </h2>
          <div className="text-gray-600 dark:text-gray-400 mb-6">
            {children || <p>The page you are looking for does not exist.</p>}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium 
              ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
              h-9 px-4 py-2 bg-gray-900 text-gray-50 hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 
              dark:hover:bg-gray-100"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Go Back
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium 
              ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
              h-9 px-4 py-2 border border-gray-200 bg-background hover:bg-gray-100 hover:text-gray-900 
              dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          >
            <HomeIcon className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
