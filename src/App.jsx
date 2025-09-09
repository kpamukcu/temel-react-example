import './App.css'
import Header from './Header'
import Services from './Services'
import Web from './img/web.avif'
import Grafik from './img/grafik.avif'
import Dijital from './img/dijital.avif'


function App() {
  //Core Js Burada Yazılır

  let degerler = [
    {
      hizmet: 'Grafik Tasarım Hizmeti',
      aciklama: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam illum doloremque quisquam nihil, harum vitae obcaecati fuga sequi id labore'
    },
    {
      hizmet: 'Dijital Pazarlama Hizmeti',
      aciklama: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam illum doloremque quisquam nihil, harum vitae obcaecati fuga sequi id labore'
    }
  ]

  let hzmt = 'Dijital Pazarlama Hizmeti'
  let ackm = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam illum doloremque quisquam nihil, harum vitae obcaecati fuga sequi id labore'

  return (
    <>
      {/* Buraya Html, React kodları gelir */}
      <div id="services" className='bg-secondary-subtle py-5'>
        <div className="container">
          <div className="row flex-column" style={{ marginBottom: '30px' }}>
            <h3>Hizmetlerimiz</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam illum doloremque quisquam nihil, harum vitae obcaecati fuga sequi id labore?</p>
          </div>
          <div className="row space-evenly">
            <Services baslik='Web Tasarımı Hizmeti' desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam illum doloremque quisquam nihil, harum vitae obcaecati fuga sequi id labore' gorsel={Web} />
            <Services baslik={degerler[0].hizmet} desc={degerler[0].aciklama} gorsel={Grafik}/>
            <Services baslik={hzmt} desc={ackm} gorsel={Dijital} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App