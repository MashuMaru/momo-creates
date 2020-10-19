import React from "react";

function Recent() {
    return <section id="carouselExampleIndicators" className="recent-section carousel slide" data-ride="carousel">
    <h1 className="recent-heading">RECENT WORK</h1>
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active active-indicator"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      {/* <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> */}
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active container-fluid">
        <img src={require('./images/mainsection-img.png')} className="recent-img d-block w-100" alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="recent-title">Embroidery work 1</h5>
          <p className="recent-p">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="carousel-item container-fluid">
        <img src={require('./images/why-image.jpg')} className="recent-img d-block w-100" alt="img-emb"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="recent-title">Embroidery work 2</h5>
          <p className="recent-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* <div className="carousel-item container-fluid">
        <img src={require('./images/mainsection-img.png')} className="recent-img d-block w-100" alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Embroidery work 3</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div> */}
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

