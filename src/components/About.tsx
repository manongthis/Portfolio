import React from 'react';

const About: React.FC = () => {
  const aboutMe = {
    title: 'About',
    about:
      'I am an enthusiastic person who genuinely wants to develop the necessary skills and qualities to have a successful career and future',
    description:
      'I honed my practical abilities in both hardware and software, and as I gained more experience, I found myself increasingly drawn to the world of Software development',
    education: {
      school: 'University of Science and Technology of Southern Philippines',
      course: 'Bachelor of Science in Computer Engineering',
      year: '2019-2023',
    },
  };
  return (
    <div className="bg-backg text-textnani">
      <div className="mx-auto my-0 w-[85%] max-w-[1200px]">
        <div className="flex max-w-[40ch] flex-col gap-[1em] text-md">
          <h1 className="mb-[2em]  font-header text-xl uppercase text-primarypo">
            {aboutMe.title}
          </h1>
          <p>{aboutMe.about}</p>
          <p>{aboutMe.description}</p>
          <div>
            <p className="text-accentpo">{aboutMe.education.school}</p>
            <p className="text-lg">{aboutMe.education.course}</p>
            <p className="text-lg opacity-80">{aboutMe.education.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
