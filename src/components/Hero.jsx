import React, { useEffect, useState } from 'react';
import profile from '../assets/github.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Shrawan Sah';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % fullText.length;
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(100);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
            Hi, I'm <span className="text-primary">{text}</span>
            <span className="absolute -right-3 animate-blink text-primary">|</span>
          </h1>
          <p className="text-xl text-gray mb-8">
            A passionate Computer Science student specializing in Java development and Full Stack Web Development with expertise in creating interactive and responsive applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              onClick={(e) => handleClick(e, '#projects')}
              className="btn text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="btn text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-48 top-36 w-64 h-96 rounded-lg animate-float">
        <div
          className="w-full h-full rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${profile})`
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;