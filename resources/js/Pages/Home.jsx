import { Head, Link } from "@inertiajs/react";

export default function Welcome({ posts }) {
  console.log(posts);
  return (
    <>
      <Head title="Welcome" />
      <h1 className="text-3xl font-bold text-blue-500 mb-8 title">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.data.map((post) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col justify-between min-h-[250px]"
          >
            <div>
              <p className="text-xl font-semibold mb-5 text-gray-800">
                {post.title}
              </p>
              <p className="text-gray-600">{post.content}</p>
            </div>
            <div className="mt-4 text-gray-500 text-sm">
              <span>
                Posted on: {new Date(post.created_at).toLocaleDateString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="my-12 px-4 text-center">
        {posts.links.map((link) =>
          link.url ? (
            <Link
              key={link.label}
              href={link.url}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className={`p-1 mx-1 ${
                link.active ? "text-blue-500  font-bold" : ""
              }`}
            />
          ) : (
            <span
              key={link.label}
              href={link.url}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className="p-1 mx-1 text-slate-400"
            />
          )
        )}
      </div>
    </>
  );
}
