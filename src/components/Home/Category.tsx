import Image from "next/image";


const categories = [
  {
    title: "Menswear",
    description: "Sharp layers, polished tailoring, and everyday staples.",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Womenswear",
    description: "Soft silhouettes, confident cuts, and refined textures.",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Accessories",
    description: "Finishing pieces made for simple, repeatable styling.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
  },
];

const Category = () => {
  return (
    <section className="w-full px-5 pb-16 font-primary sm:px-8 lg:px-10 my-20">
     
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Shop the edit
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Browse By Category
          </h2>
        </div>
        <p className="max-w-xl text-base leading-7 text-neutral-600">
          Build a wardrobe that moves from morning meetings to late dinners
          with clean shapes, balanced colors, and dependable fabrics.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.title}
            className="group relative min-h-[420px] overflow-hidden rounded-md bg-neutral-900"
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-semibold">{category.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                {category.description}
              </p>
              <button className="mt-5 rounded-md bg-white px-5 py-3 text-sm font-semibold uppercase text-black transition hover:bg-neutral-200">
                Shop now
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-26 grid overflow-hidden rounded-md bg-neutral-950 text-white lg:grid-cols-[1.1fr_0.9fr]">
        <div className="px-6 py-12 sm:px-10 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            New season
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Designed for the days when one outfit has to do everything.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-white/70">
            Discover structured jackets, relaxed trousers, easy knits, and
            elevated basics selected for comfort, polish, and repeat wear.
          </p>
          <button className="mt-8 rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase text-black transition hover:bg-neutral-200">
            Explore collection
          </button>
        </div>
        <div className="relative min-h-[360px]">
          <Image
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww"
            alt="Model wearing new season clothing"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      
    </section>
  );
};

export default Category;
