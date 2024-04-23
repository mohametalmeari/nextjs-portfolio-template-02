import { blogData } from "@/lib/data";
import BlogDetailsSection from "../components/BlogDetailsSection";

export default function Blog({ params: { id } }) {
  const blog = blogData.find((blog) => blog.id.toString() === id);

  if (!blog) return <NotFound />;

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#161513]">
      <BlogDetailsSection blog={blog} />
    </main>
  );
}

const NotFound = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1>404 - Blog Not Found</h1>
    </main>
  );
};
