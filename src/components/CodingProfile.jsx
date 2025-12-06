import React from 'react';
import leetcode from '../assets/leetcode.png';
import gfg from '../assets/gfg.png';
import github from '../assets/github-logo.png';

const CodingProfile = () => {
  const profiles = [
    {
      name: 'LeetCode',
      icon: `${leetcode}`,
      link: 'https://leetcode.com/u/Shrawansah/',
    },
    {
      name: 'GeeksforGeeks',
      icon: `${gfg}`,
      link: 'https://www.geeksforgeeks.org/user/sahshra6uox/',
    },
    {
      name: 'GitHub',
      icon: `${github}`,
      link: 'https://github.com/Shrawan3067',
    },
  ];

  return (
    <section id="coding-profile" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Coding Profiles
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="skill-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={profile.icon}
                alt={profile.name}
                className="w-28 h-28 mx-auto mb-6 object-cover"
              />
              <h3 className="text-2xl font-bold mb-4">{profile.name}</h3>
              <div className='flex items-center justify-center'>
                <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] hover:text-primary transition-colors"
              >
                <i className="fas fa-external-link-alt" style={{ fontSize: "18px", marginRight: "8px" }}></i>
                Profile Link
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfile;