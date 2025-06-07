import { FaXTwitter } from "react-icons/fa6";
import React, {useState} from "react";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

export default function Article() {
 const [showAllContent, setShowAllContent] = useState(false);

  const posts = [
    {
      id: 1,
      title: "Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated ",
      date: "February 18, 2025",
      content:
        "Thoughts on maintaining energy and focus through outdoor activities and exercise. ",
    },
    {
      id: 2,
      title: "Reading for Inspiration: 5 Books that Shaped My Coding Journey ",
      date: "February  15, 2025",
      content:
        "A few of my books, both fiction and non-fiction, that keep me motivated.",
    },
    {
      id: 3,
      title: "Overcoming Imposter Syndrome as a New Developer",
      date: "February 10, 2025",
      content:
        "Some tips and personal reflections on dealing with self-doubt when learning to code.",
    },
    {
      id: 4,
      title: "Exploring the World of Responisve Design",
      date: "February 4, 2025",
      content:
        "The importance of making websites look great on different devices.",
    },
    {
      id: 5,
      title: "My Favourite Dev Tools for Productivity",
      date: "January 28, 2025",
      content:
        "Smooth scrolling improves navigation and user experience by smoothly transitioning between page sections when links are clicked.",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto mt-14   px-0 py-12 space-y-8 border-1">
      {/* Introduction Section */}
      <section
        id="introduction"
        className="prose max-w-none dark-mode:prose-invert pt-6 px-4 border-b-1"
      >
        <h1 className="text-4xl font-bold mb-4 capitalize underline">hi i'm paulina </h1>
        <p className="pt-4">
         I'm on a journey to become a front-end and web developer. i love building little projects, trying out new coding techniques, and sharing what i learn along the way. When i'm not at my desk, you'll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls. 
        </p>
        <p className="pt-6 pb-4">
            I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who's learning to code. Welcome to my corner of the internet and thanks for stopping by!
        </p>
        <div className="text-4xl flex space-x-4 pt-4 mt-2 mb-4 dark-mode:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-300 dark-mode:border-gray-900 transition-colors duration-300">
         <FaXTwitter />
         <FaGithub />
         <FaLinkedin />
         <SiFrontendmentor />

        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="space-y-12 px-4 border-b-1">
        <h1 className="text-3xl font-bold p-0">
          Latest Articles <span className="font-bold text-blue-400">___</span>
        </h1>
        {posts.map(({ id, title, date, content }) => (
          <article
            key={id}
            className="dark-mode:bg-gray-900 rounded-lg shadow-md p-6 border-gray-300 dark-mode:border-gray-900 transition-colors duration-300 hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-gray-500 dark-mode:text-white mb-4">{date}</p>
            {showAllContent && (
              <p className="text-base text-gray-700 dark-mode:text-gray-200">{content}</p>
            )}
          </article>
        ))}

        <div className="m-0 pb-6">
          <button
            onClick={() => setShowAllContent(!showAllContent)}
            className="hover:underline text-xl text-blue-600 font-medium"
          >
            {showAllContent ? "Hide article content" : "View all articles"}
          </button>
        </div>
      </section>
      <footer  className="flex  justify-between   text-left px-4 ">
        
          <h2> Made with ❤️ and ☕</h2> 
        <div className="text-xl flex space-x-2  text-left items-left transition-colors duration-300">
         <FaXTwitter />
         <FaGithub />
         <FaLinkedin />
         <SiFrontendmentor />
    </div>
      
       

        
      </footer>
    </main>
  );
}
