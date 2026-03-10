import BlogCard from "../components/BlogCard";

const blogPosts = [
  {
    category: "Culture",
    title: "Exploring Balinese Culture",
    description:
      "From sacred temples to vibrant ceremonies, discover the heart of Bali.",
    image: "/image/balinese-culture.jpg",
    href: "#",
  },
  {
    category: "Adventure",
    title: "Sunrise at Mount Bromo",
    description:
      "Chase the golden hour and witness the dramatic volcanic landscape.",
    image: "/image/bromo-1.jpg",
    href: "#",
  },
  {
    category: "Wildlife",
    title: "Adventure in Komodo Island",
    description:
      "Sail through turquoise waters and meet the legendary Komodo dragons.",
    image: "/image/komodo-island.jpg",
    href: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="w-full bg-white py-16 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Travel Stories
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Discover stories, tips and experiences from travelers exploring
            Indonesia.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
