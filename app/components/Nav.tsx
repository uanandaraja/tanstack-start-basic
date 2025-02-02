import { Link } from "@tanstack/react-router";
import { Button } from "@headlessui/react";

export function Nav() {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 gap-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors"
            activeProps={{
              className: "text-white",
            }}
            activeOptions={{ exact: true }}
          >
            <img 
              src="/logo-color.png" 
              alt="TanStack Logo" 
              className="h-8 w-auto"
            />
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
            Not Found
          </Link>
          <div className="flex-1" />
          <Button
            as="a"
            href="https://tanstack.com/router/latest/docs/framework/react/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Go to Docs
          </Button>
        </div>
      </div>
    </nav>
  );
}

