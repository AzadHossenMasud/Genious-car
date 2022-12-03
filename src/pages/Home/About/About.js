import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-start">
          <div className=" w-1/2 relative">
            <img
              src={person}
              className=" w-3/4 mb-10 rounded-lg shadow-2xl"
            />
            <img
              src={parts}
              className=" absolute bottom-0 right-20 w-2/4 rounded-lg shadow-2xl"
            />
          </div>
          <div className=" w-1/2">
            <h1 className="text-xl font-bold mb-5 px-10 text-orange-600	">
              About us
            </h1>
            <h1 className="text-5xl font-bold px-10">
              We are qualified & of experience in this field
            </h1>
            <p className="p-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. <br /> <br />
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-orange-600 ml-6">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
