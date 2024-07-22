"use client";
import React from "react";
import "./slider.scss";

import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

import slides from "@/helpers/data/slider.json";

const Slider = () => {
  return (
    <Carousel>
      {slides.map((item) => (
        <Carousel.Item key={item.id}>
          <Image src={`/img/slider/${item.Image}`} width={1800} height={800} alt={item.title}/>
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
