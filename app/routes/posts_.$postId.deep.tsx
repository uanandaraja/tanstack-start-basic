import { Link, createFileRoute } from "@tanstack/react-router";
import { fetchPost } from "../utils/posts";
import { PostErrorComponent } from "./posts.$postId";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const Route = createFileRoute("/posts_/$postId/deep")({
  loader: async ({ params: { postId } }) =>
    fetchPost({
      data: postId,
    }),
  errorComponent: PostErrorComponent,
  component: PostDeepComponent,
});

function PostDeepComponent() {
  const post = Route.useLoaderData();

  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      <Link
        to="/posts"
        className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Posts
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {post.title}
        </h1>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          {post.body}
        </p>
      </div>
    </article>
  );
}
