import React from 'react'
import { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile1.jpg';

// Custom Typewriter component
const Typewriter = ({ texts, speed = 100, eraseSpeed = 50, delay = 2000, loop = true }) => {
  const [textIdx, setTextIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let timeout;
    const current = texts[textIdx];
    if (!isErasing && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, speed);
    } else if (!isErasing && displayed.length === current.length) {
      timeout = setTimeout(() => setIsErasing(true), delay);
    } else if (isErasing && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, eraseSpeed);
    } else if (isErasing && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsErasing(false);
        setTextIdx((prev) => (prev + 1) % texts.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isErasing, textIdx, texts, speed, eraseSpeed, delay]);

  return (
    <span className="text-[#8245ec]">{displayed}<span className="animate-pulse">|</span></span>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-4 px-[7vw] lg:px-[10vw] mt-16 md:mt-24"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-[60%] text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Binam Shrestha
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              texts={["Fullstack Developer", "App Developer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              delay={2000}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 my-5 leading-relaxed">
            I am a Computer Engineering graduate with hands-on experience in React and basic backend development (Node.js/Express). Enthusiastic about web and mobile app development, I have also worked on a small AI/ML project using Python. I am seeking an internship or training opportunity to enhance my skills and gain practical experience, and I am eager to contribute to an AI-based internship.
          </p>
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-[#8245ec] py-3 px-8 rounded-full mt-3 text-lg font-bold transition duration-300 transform hover:scale-105"
          >
            PREVIEW CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-[40%] flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:size-64 md:size-[250px] lg:size-[350px] border-4 border-purple-700 rounded-full"
            style={{ aspectRatio: 1 }}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Binam Shrestha"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section>
  )
}

export default About