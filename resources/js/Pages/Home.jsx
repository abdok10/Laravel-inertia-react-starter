import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Welcome({ posts }) {
  const route = useRoute();
  const { flash } = usePage().props;
  const [flashMsg, setFlashMsg] = useState(flash.message);

  // console.log(usePage())

  setTimeout(() => {
    setFlashMsg(null);
  }, 3000);

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 mb-8 title">
        All Products
      </h1>


      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {flashMsg && (
        <span className="absolute right-2 -top-7 text-red-500 bg-red-500/20 px-4 py-0.5 rounded text-end">
          {flashMsg}
        </span>
      )}
        {posts.data.map((post) => (
          <Link
            // href={`/posts/${post.id}`}
            href={route("posts.show", post)}
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
