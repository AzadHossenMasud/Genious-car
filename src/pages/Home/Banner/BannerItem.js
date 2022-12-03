import React from 'react';

const BannerItem = ({slider}) => {
    return (
        <div id={`slide${slider.id}`} className="carousel-item relative w-full">
        <div className="carousel-image">
        <img src={slider.image} className="w-full rounded-lg" />
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4 ">
          <h1 className=" text-5xl text-white font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h1>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2  w-1/2 left-20 top-2/4 ">
          <p className=" text-xl text-white ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>

        <div className="absolute flex justify-start transform -translate-y-1/2  w-1/2 left-20 top-3/4 ">
        <button className="btn btn-warning mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>


        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${slider.pre}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${slider.nex}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;