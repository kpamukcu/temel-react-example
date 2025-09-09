import React from 'react'
import './Banner.css'
import BannerFoto from './img/ari-bilisim-banner-800x800.gif'

function Banner() {
    return (
        <>
            <section id="banner" className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 style={{ marginBottom: '10px' }}>Arı Bilişim Dijital Hizmetler</h1>
                            <p>Web Tasarımı, Grafik Tasarımı ve Dijital Pazarlama Hizmetlerimizle <br />Bir Adım Önde Olun.</p>
                            <div className='butonDiv'>
                                <a href="tel:+905555555555">
                                    <button className="btn btn-primary">Teklif Alın</button>
                                </a>
                                <a href="iletisim.html">
                                    <button className="btn btn-outline-primary">Bize Ulaşın</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={BannerFoto} alt="Banner Görsel" style={{ width: '75%' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner