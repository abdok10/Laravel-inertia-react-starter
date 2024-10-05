import { Head, useForm, usePage } from "@inertiajs/react";

export default function Create() {
  const { data, setData, post, errors, processing } = useForm({
    title: "",
    content: "",
  });
  const { component } = usePage();

  function handleSubmit(e) {
    e.preventDefault();
    post("/posts");
  }
  return (
    <div>
      <Head title={component} />
      <h1 className="title">Create a new post</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl mx-auto mt-12 border border-slate-700 shadow rounded-lg p-10"
      >
        <div>
          <p>Title</p>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData("title", e.target.value)}
            className={errors.title && "ring-red-500"}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div>
          <p>Content</p>
          <textarea
            rows="7"
            value={data.content}
            onChange={(e) => setData("content", e.target.value)}
            className={errors.content && "ring-red-500"}
          />
          {errors.content && <p className="error">{errors.body}</p>}
        </div>

        <button
          disabled={processing}
          className="mt-12 bg-slate-900 text-slate-50 rounded-xl w-full py-1.5"
        >
          {processing ? (
            <span className="block h-5 w-5 mx-auto rounded-full border-b-2 animate-spin" />
          ) : (
            <span>Create</span>
          )}
        </button>
      </form>
    </div>
  );
}
