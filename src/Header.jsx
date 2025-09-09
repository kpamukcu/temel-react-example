import React from 'react'
import './Header.css'

function Header() {

  return (
    <>
      <section id="topBar" className="bg-primary py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              Tel: <a href="tel:+9055555555555">0555 555 5555</a> /
              E-Posta: <a href="mailto:info@aribilgi.com">info@aribilgi.com</a>
            </div>
            <div className="col-md-6 text-end">Lorem Ipsum Dolor Sit Kadıköy / İstanbul</div>
          </div>
        </div>
      </section>
      <section id="menu" className='py-2 bg-light'>
        <div className="container">
          <nav className="row">
            <div className="col-md-6">
              <img src="https://aribilgi.com/wp-content/uploads/2020/09/cropped-logo-1.png.webp" alt="Arı Bilgi Logo" style={{ width: '25%' }} />
            </div>
            <div className="col-md-6">
              <div className="navBar">
                <a href="">Ana Sayfa</a>
                <a href="">Hakkımızda</a>
                <a href="">Portfolyo</a>
                <a href="">Hizmetlerimiz</a>
                <a href="">Blog</a>
                <a href="">İletişim</a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Header