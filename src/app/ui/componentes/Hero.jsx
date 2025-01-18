import React from 'react';

const Hero = () => {
  return(
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='bold'>Cerro Valley</h1>
            <h3>Transforme sua ideia<br/> Em uma startup de sucesso!</h3>
            <p>
              <span className="badge">
                <i className="fa-solid fa-rocket" style={{marginRight: 5}}></i> Do zero a Startup!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;