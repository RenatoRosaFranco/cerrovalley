import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ModuleCard = ({ section }) => {
  const { cover } = section;

  return(
    <div className="module-card col-md-4">
      <div className="panel panel-default" 
        style={{ backgroundImage: `src(${cover})`}}>
        <i className="fa-solid fa-rocket rocket"></i>
      </div>
    </div>
  );
}

const Modules = ({ modules }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };  

  return(
    <section id="modules">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-md-offset-1">
            <div className="row">
              <Slider {...settings}>
                {modules.map((module) => (
                  <div key={module.id}>
                    <ModuleCard section={module} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Modules;