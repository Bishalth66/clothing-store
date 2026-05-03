"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import Image from "next/image";

const products = [
  {
    name: "Black Suit and Jacket",
    url: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1234,
  },
  {
    name: "Black Suit and Jacket",
    url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1234,
  },
  {
    name: "Black Suit and Jacket",
    url: "https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1234,
  },
  {
    name: "Black Suit and Jacket",
    url: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1234,
  },
];

export default function Product() {
  return (
    <>
      <div className="w-full h-full pl-8 py-26 font-primary">
        <h2 className="text-4xl font-semibold pb-10 pl-2">
          Most Selling Product
        </h2>
        <Swiper 
          slidesPerView={3.1} 
          spaceBetween={30} 
          className="mySwiper"
          observer={true}
          observeParents={true}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index} className="w-full h-96">
              <div className="aspect-3/4 relative max-h-96 w-full">
                <Image src={item.url} alt="" fill className="object-cover " />
              </div>
              <h3 className="text-xl font-medium tracking-tight pt-4">
                {item.name}
              </h3>
              <p className="font-secondary">$ {item.price}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
