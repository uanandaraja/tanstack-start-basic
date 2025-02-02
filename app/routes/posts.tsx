import { Link, createFileRoute } from "@tanstack/react-router";
import { fetchPosts } from "../utils/posts";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export const Route = createFileRoute("/posts")({
  loader: async () => fetchPosts(),
  component: PostsComponent,
});

function PostsComponent() {
  const posts = Route.useLoaderData();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Posts</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Select a post and go to the deep view.
        </p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            to="/posts/$postId/deep"
            params={{
              postId: post.id,
            }}
            className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <DocumentTextIcon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {post.body}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
