import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 gap-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            activeProps={{
              className: "text-white font-medium text-sm",
            }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/posts"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            activeProps={{
              className: "text-white font-medium text-sm",
            }}
          >
            Posts
          </Link>
          <Link
            to="/users"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            activeProps={{
              className: "text-white font-medium text-sm",
            }}
          >
            Users
          </Link>
          <Link
            to="/layout-a"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            activeProps={{
              className: "text-white font-medium text-sm",
            }}
          >
            Layout
          </Link>
          <Link
            to="/deferred"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            activeProps={{
              className: "text-white font-medium text-sm",
            }}
          >
            Deferred
          </Link>
          <Link
            // @ts-expect-error
            to="/this-route-does-not-exist"
            className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            activeProps={{
              className: "text-white font-medium text-sm",
            }}
          >
            This Route Does Not Exist
          </Link>
        </div>
      </div>
    </nav>
  );
}

