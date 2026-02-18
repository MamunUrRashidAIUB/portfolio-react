import { useState, useEffect } from "react";

const Notice = () => {
  // Define an array of messages with subtle emojis for excitement
  const messages = [
    "🚀 New projects are on the way! Stay tuned for updates on my latest work in web development.",
    "🎉 Big things coming soon! New features like a blog section and client testimonials will be added.",
    "💻 Custom web development solutions available using React, Node.js, PHP, and more!",
    "🎓 Completed an advanced React course! Excited to implement my new skills in upcoming projects.",
    "📞 Ready to collaborate? Get in touch to start your next web project today!",
  ];

  // State to store the current message index
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Change the message every 20 seconds (20000ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Change the message every 20 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      role="alert"
      className="z-10 w-full bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500 py-2 text-center"
    >
      <div className="px-2 md:px-8">
        <span className="text-sm font-semibold text-gray-900 opacity-100 transition-opacity duration-500 md:text-base lg:text-lg">
          {messages[currentMessageIndex]}
        </span>
      </div>
    </div>
  );
};

export default Notice;
