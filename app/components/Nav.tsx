import { Link } from "@tanstack/react-router";
import { Button } from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigationLinks = [
  { to: "/posts", label: "Posts" },
  { to: "/users", label: "Users" },
  { to: "/layout-a", label: "Layout" },
  { to: "/deferred", label: "Deferred" },
  { to: "/this-route-does-not-exist", label: "Not Found" },
] as const;

type NavLinkProps = {
  to: string;
  label: string;
  isMobile?: boolean;
  tsIgnore?: boolean;
};

function NavLink({ to, label, isMobile }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={
        isMobile
          ? "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          : "text-gray-300 hover:text-white text-sm font-medium transition-colors"
      }
      activeProps={{
        className: isMobile
          ? "block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700"
          : "text-white font-medium text-sm",
      }}
    >
      {label}
    </Link>
  );
}

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 gap-6">
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>

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

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navigationLinks.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </div>

          <div className="flex-1" />
          <Button
            as="a"
            href="https://tanstack.com/start/latest/docs/framework/react/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Go to Docs
          </Button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map((link) => (
              <NavLink key={link.to} {...link} isMobile />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
