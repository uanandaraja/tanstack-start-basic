import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@headlessui/react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="text-center space-y-8 pt-24">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border mb-4">
        <span className="text-xs font-semibold">STATUS: BETA</span>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
        Full-stack React framework
        <br />
        powered by TanStack Router
      </h1>

      <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
        SSR, Streaming, Server Functions, API Routes, bundling and more powered
        by TanStack Router, Nitro, and Vite. Ready to deploy to your favorite
        hosting provider.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
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
  );
}
