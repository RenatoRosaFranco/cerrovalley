import React from 'react';

const Footer = () => {
  return(
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="bold">Cerro Valley</h3>
            <p>Tire sua ideia do papel, <small className='bold'>Do zero a startup!</small></p>
          </div>

          <div className="col-md-4 text-center">
            <ul className="list-unstyled list-inline social" style={{ marginTop: 20 }}>
              <li>
                <a href='https://facebook.com/cerrovalley' title='Cerro Valley | Facebook'>
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href='https://instagram.com/cerrovalley' title='Cerro Valley | Instagram'>
                  <i className="fa-brands fa-instagram"></i>             
                </a>
              </li>
              <li>
                <a href='https://tiktok.com/cerrovalley' title='Cerro Valley | TikTok'>
                  <i className="fa-brands fa-tiktok"></i>             
                </a>
              </li>
              <li>
                <a href='https://youtube.com/cerrovalley' title='Cerro Valley | Youtube'>
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <ul className="list-unstyled list-inline" style={{ marginTop: 30 }}>
              <li><a href='/' className='no-decoration'>Termos de uso</a></li>
              <li><a href='/' className='no-decoration'>Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;