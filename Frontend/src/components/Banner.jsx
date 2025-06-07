import React from "react";

export const Banner = () => {
  return (
    <>
      <div className="container bg-light mt-3" id="banner">
        <div className="row">
          {/* First column: hidden on small screens (col-sm-0 and d-none) */}
          <div className="col-lg-4 col-md-4 d-none d-md-block ps-2"> 
            <img src="https://i.gifer.com/DXKh.gif" alt="" style={{height:"400px", width:"400px"}} />
          </div>
          {/* Second column: takes full width on small screens (col-12) and 8 columns on medium/large (col-md-8) */}
          <div className="col-12 col-md-8 ps-2"> 
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="discount.png" className="d-block w-100" alt="..." style={{height:"400px"}} />
                </div>
                <div className="carousel-item">
                  <img src="https://media.licdn.com/dms/image/v2/D4D12AQFQ-B2IobV-4Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1678216405315?e=2147483647&v=beta&t=smqITnKNXypQmReKCpJzCLmr9RsF7dqNelXRGDn9atc" className="d-block w-100" alt="..." style={{height:"400px"}} />
                </div>
                <div className="carousel-item">
                  <img src="banner.png" className="d-block w-100" alt="..." style={{height:"400px"}} />
                </div>
                <div className="carousel-item active">
                  <img src="discountt.png" className="d-block w-100" alt="..." style={{height:"400px"}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;