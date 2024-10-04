export default function Show({ post }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500 mb-8 title">
        Product {post[0].id} Details
      </h1>

      <div className="max-w-xl mx-auto mt-20">
        <p className="text-xl font-semibold mb-5 text-gray-800">
          {post[0].title}
        </p>
        <p className="text-gray-600">{post[0].content}</p>
      </div>

    </>
  );
}
