import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import './Banner.css'
import BannerItem from "./BannerItem";

const Banner = () => {
    const bannerItems = [
        {
            id:1,
            image: img1,
            pre: 6,
            nex : 2
        },
        {
            id:2,
            image: img2,
            pre: 1,
            nex : 3
        },
        {
            id:3,
            image: img3,
            pre: 2,
            nex : 4
        },
        {
            id:4,
            image: img4,
            pre: 3,
            nex : 5
        },
        {
            id:5,
            image: img5,
            pre: 4,
            nex : 6
        },
        {
            id:6,
            image: img6,
            pre: 5,
            nex : 1
        },
    ]
  return (
    <div className="carousel w-full py-10">
        {
            bannerItems.map(slider => <BannerItem
            key={slider.id} slider={slider}></BannerItem>)
        }

    </div>
  );
};

export default Banner;
