import { Head, Link, useForm } from "@inertiajs/react";
import { useRoute } from "@ziggy";

export default function Show({ post }) {
  const { delete: destroy } = useForm();
  const route = useRoute();

  const handleDelete = (e) => {
    e.preventDefault();
    // destroy(`/posts/${post[0].id}`)
    destroy(route("posts.destroy", post[0]));
  };
  return (
    <>
      <Head title="Product Details" />
      <h1 className="text-3xl font-bold text-blue-500 mb-8 title">
        Product {post[0].id} Details
      </h1>
      <div className="max-w-xl mx-auto mt-20">
        <p className="text-xl font-semibold mb-5 text-gray-800">
          {post[0].title}
        </p>
        <p className="text-gray-600">{post[0].content}</p>

        <div className="flex justify-end gap-3 text-white mt-4">
          <Link href={route('posts.edit', post[0])}>
            <button className="bg-green-600 rounded-lg border-none px-2 py-1">
              Update
            </button>
          </Link>

          <form onSubmit={handleDelete}>
            <button className="bg-red-600 rounded-lg border-none px-2 py-1">
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
