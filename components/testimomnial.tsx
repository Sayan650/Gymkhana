import React from "react";
import { FaTwitter } from "react-icons/fa";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Michael Ross",
      handle: "@michjack",
      text: "Simple lives up to its name in every way. It&apos;s incredibly easy to use yet powerful enough to handle all my tasks effortlessly. It’s become an essential part of my daily routine.",
      date: "Jan 15, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Peter Lowe",
      handle: "@peterlowex",
      text: "As a founder, having a visually appealing and user-friendly website is essential. This tool not only helped me achieve that but also improved my site’s performance and SEO.",
      date: "May 19, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Rodri Alba",
      handle: "@rodri_spn",
      text: "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can’t imagine my life without it.",
      date: "Apr 12, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Michele Lex",
      handle: "@MikyBrown",
      text: "I’ve tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!",
      date: "Mar 04, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Rodri Alba",
      handle: "@rodri_spn",
      text: "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can’t imagine my life without it.",
      date: "Apr 12, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Michele Lex",
      handle: "@MikyBrown",
      text: "I’ve tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!",
      date: "Mar 04, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Rodri Alba",
      handle: "@rodri_spn",
      text: "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can’t imagine my life without it.",
      date: "Apr 12, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Michele Lex",
      handle: "@MikyBrown",
      text: "I’ve tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!",
      date: "Mar 04, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Rodri Alba",
      handle: "@rodri_spn",
      text: "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can’t imagine my life without it.",
      date: "Apr 12, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Michele Lex",
      handle: "@MikyBrown",
      text: "I’ve tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!",
      date: "Mar 04, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Rodri Alba",
      handle: "@rodri_spn",
      text: "Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can’t imagine my life without it.",
      date: "Apr 12, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
    {
      name: "Michele Lex",
      handle: "@MikyBrown",
      text: "I’ve tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!",
      date: "Mar 04, 2027",
      avatar: "https://via.placeholder.com/40", // Replace with actual image URLs
    },
  ];

  return (
    <section className="py-12 mb-10 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top startups love PersonalFinGen
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-48 bg-white p-6 shadow-lg rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center text-gray-500">
                  <FaTwitter className="mr-2" />
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
