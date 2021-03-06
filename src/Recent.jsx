import React from "react";

function Recent() {
    return <section id="carouselExampleIndicators" className="recent-section carousel slide" data-ride="carousel">
    <h1 className="recent-heading">RECENT WORK</h1>
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active active-indicator"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active img-fluid">
        <img src={require('./images/recent-1.jpg')} className="recent-img d-block" alt="..."></img>
        <div className="carousel-caption">
          <h5 className="recent-title">Rassams Creamery</h5>
          <p className="recent-p">Main logo embroidery to restaurant furniture. </p>
        </div>
      </div>
      <div className="carousel-item img-fluid">
        <img src={require('./images/recent-2.JPG')} className="recent-img d-block" alt="img-emb"></img> 
        <div className="carousel-caption">
          <h5 className="recent-title">Holy Goat Customs</h5>
          <p className="recent-p">Logo designs embroidery to motorcycle seats.</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </section>


}

export default Recent;
