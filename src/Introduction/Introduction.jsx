import React from "react";
import clip from '../Video/FoodBenefit.mp4'
import "./Introduction.css"

const Introduction = () => {
  return (
    <div className='intro'>
      <h1 className='intro-que'>What is Ribara?</h1>
      <div className='intro-ans'>
        <p >Stay in touch with industry skills requirements for more than 20,000 job roles, connect with old or new <br />
        classmates, keep the class spirit, join the Ribara community for free, find and invite friends in the same or <br />
        other schools, follow interesting topics about tertiary institutions, professors, teachers, their teaching <br />
        content,teaching methods, it's relevance to industry needs, share campus photos, get your class together <br />
        again, chat online </p>
        <video src={clip} controls></video>
      </div>
    </div>
  );
};

export default Introduction;
