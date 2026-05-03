import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-neutral-100 px-5 py-16 font-primary sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Aura updates
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Get first access to fresh drops and private offers.
          </h2>
        </div>

        <form className="flex flex-col gap-3 sm:flex-row" action="#">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="relative flex-1">
            <Mail
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
              aria-hidden="true"
            />
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="h-14 w-full rounded-md border border-neutral-300 bg-white pl-12 pr-4 outline-none transition focus:border-black"
            />
          </div>
          <button className="h-14 rounded-md bg-black px-7 text-sm font-semibold uppercase text-white transition hover:bg-neutral-800">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
