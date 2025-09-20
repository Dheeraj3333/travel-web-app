"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import React, { useState } from "react";
import AboutLocation from "../packageLocation/AboutLocation";

import DestinationCard from "./DestinationCard";
import DestinationSection from "./DestinationSection";
import { allDestinations } from "@/mock/data";

const a =
  "Are you dreaming of an exotic getaway? Look no further than our Asia holiday packages! Asia, with its diverse landscapes and rich cultural heritage, offers endless opportunities for unforgettable adventures. Whether you're seeking relaxation on pristine beaches or craving adrenaline-pumping activities, Asia has something for everyone. Find best and your favourite holiday destinations in Asia with Bharat Booking Holidays. Asia boasts some of the world's most sought-after holiday destinations. From the bustling streets of Bangkok to the tranquil shores of Bali, each destination offers its own unique charm. Explore the vibrant markets of Thailand, marvel at the ancient temples of Cambodia, or unwind on the picturesque beaches of Vietnam. For thrill-seekers, Asia is a paradise. Embark on exhilarating adventures such as trekking in the Himalayas, diving in the crystal-clear waters of the Philippines, or exploring the jungles of Borneo. Our adventure holiday packages cater to adrenaline junkies seeking an unforgettable experience. Travelling with friends or family; Our South East Asia group tours ensure a hassle-free and enjoyable experience. Discover the wonders of South East Asia together, from the bustling streets of Singapore to the historic sites of Myanmar. Create lifelong memories with your loved ones on our group tours. With its countless islands and pristine coastlines, Asia is a paradise for beach lovers. Relax on the white sands of Thailand's Koh Samui, snorkel in the turquoise waters of the Maldives, or surf the waves of Indonesia's Bali. Our beach holiday packages promise sun, sand, and serenity. Explore central Asia Tours with Bharat Booking; explore the lesser-known gems of Central Asia with our expertly curated tours. From the ancient Silk Road cities of Uzbekistan to the majestic landscapes of Kazakhstan, delve into the rich history and culture of this fascinating region. At Bharat booking holidays, we are committed to providing you with the ultimate Asia holiday experience. With our carefully crafted packages and personalized service, we ensure that your journey is seamless from start to finish. Book your Asia holiday package today and embark on the adventure of a lifetime!";

const AllDestinations = () => {
  return (
    <section className="my-12 max-md:my-8">
      <Wrapper>
        <h2 className="text-5xl max-md:text-3xl text-center font-bold text-thisOrange">
          <span className="font-light text-gray-600">Holiday</span> DESTINATION
          In Asia
        </h2>
        <AboutLocation para={a} />

        {/* destination section */}
        <DestinationSection destinations={allDestinations} />
      </Wrapper>
    </section>
  );
};

export default AllDestinations;
