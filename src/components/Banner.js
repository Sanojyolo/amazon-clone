import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <header className="banner">
        <img
          src="https://www.dealsfreak.com/wp-content/uploads/2020/01/Amazon-Great-Indian-Sale-Blog-Banner-min.jpg"
          alt="image-banner"
          className="images-bannerone"
        />
        <img
          src="https://assets.aboutamazon.com/dims4/default/5ce70b6/2147483647/strip/true/crop/1279x720+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F77%2F09%2Fcd428ca04437b8ecf6e172e2233f%2Fweb-banner.jpg"
          alt="image-banner"
          className="images-bannertwo"
        />
      </header>
    </>
  );
};

export default Banner;
