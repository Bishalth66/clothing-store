"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

const products = [
  {
    name: "Midnight Tailored Jacket",
    url: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 124,
    tag: "Best seller",
  },
  {
    name: "Classic Evening Suit",
    url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 189,
    tag: "New arrival",
  },
  {
    name: "Modern Wool Blazer",
    url: "https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 146,
    tag: "Limited",
  },
  {
    name: "Slim Black Overcoat",
    url: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 132,
    tag: "Trending",
  },
];

export default function Product() {
  return (
    <section className="w-full overflow-hidden px-5 py-16 font-primary sm:px-8 lg:px-10 lg:py-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Customer favorites
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Most Selling Products
          </h2>
        </div>
        <button className="w-fit rounded-md border border-black px-5 py-3 text-sm font-semibold uppercase transition hover:bg-black hover:text-white">
          View all
        </button>
      </div>

      <Swiper
          slidesPerView={1.15}
          spaceBetween={18}
          className="mySwiper"
          observer={true}
          observeParents={true}
          breakpoints={{
            640: {
              slidesPerView: 2.15,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 3.15,
              spaceBetween: 30,
            },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <article className="group">
              <div className="relative aspect-[3/4] max-h-[520px] w-full overflow-hidden rounded-md bg-neutral-100">
                <Image
                  src={item.url}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 88vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {item.tag}
                </span>
              </div>
              <h3 className="pt-4 text-xl font-medium tracking-tight">
                {item.name}
              </h3>
              <p className="font-secondary text-neutral-600">$ {item.price}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}
