"use client";
import { LoginButton } from "../components/LoginButton";

const cards = [
  {
    title: "Astrophysics Research Paper",
    description: "This is a research paper about astrophysics.",
    imageUrl: "astro.jpg",
  },
  {
    title: "Psychology",
    description: "This is a research paper on Psychology.",
    imageUrl: "pshyco1.jpg",
  },
  {
    title: "Quantum Computer",
    description: "This is a research paper on Quantum Computer.",
    imageUrl: "quant1.jpg",
  },
  {
    title: "Quantum Physics",
    description: "This is a research paper on Quantum Physics.",
    imageUrl: "quantum.jpg",
  },
  {
    title: "Artificial Intelligence",
    description: "ThThis is a research paper on Artificial Intelligence.",
    imageUrl: "ai.jpg",
  },
  {
    title: "ADAS Teachnology",
    description: "This is a research paper on ADAS Teachnology.",
    imageUrl: "adas.jpg",
  },
  {
    title: "Machine Learning",
    description: "This is a research paper on Machine Learning.",
    imageUrl: "ml.png",
  },
  {
    title: "Black Holes",
    description: "TThis is a research paper on Black Holes.",
    imageUrl: "blackhole.jpg",
  },
];

export const GatedContent = () => {
  return (
    <div className="flex flex-col h-screen font-montserrat">
      <div className="mx-auto">
        <LoginButton />
      </div>
      <div className="text-center mt-12 mb-10" >
        Welcome, stranger. Only a selected few can see this message. You are
        rare!
      </div>


      <div className="grid font-montserrat rid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto px-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};