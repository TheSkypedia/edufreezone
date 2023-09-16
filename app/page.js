"use client";
import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
import Hero from "./components/Hero";

const cardsData = [
  {
    title: "Noteworthy technology acquisitions 2021",
    content:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    buttonText: "Button 1 Text",
    category: "Category A",
    url: "http://sai",
    badge: "Free",
  },
  {
    title: "Card 2 Title",
    content: "Content for Card 2",
    buttonText: "Button 2 Text",
    category: "Category B",
    url: "http://sai",

    badge: "Free",
  },
  {
    title: "Card 3 Title",
    content: "Content for Card 2",
    buttonText: "Button 2 Text",
    category: "Category B",
    url: "http://sai",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex-col flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 ">
          {cardsData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </main>
  );
}
