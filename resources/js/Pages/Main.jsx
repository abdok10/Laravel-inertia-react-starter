import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from "@ziggy";

export default function Main() {
  const route = useRoute();
  const { component } = usePage();

  return (
    <div className="relative">
      <Head title={component} />
      <Link
        href={route("posts.index")}
        className="bg-stone-900 text-stone-50 rounded px-3 py-1  absolute right-0"
      >
        Posts
      </Link>
      <h1 className="text-3xl font-bold text-blue-500 mb-8 title">Main Page</h1>
    </div>
  );
}
