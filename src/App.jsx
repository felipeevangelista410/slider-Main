import { useState } from 'react'
import './App.css'
import airmaxtn from './assets/airmaxtn.webp'
import dunklow from './assets/dunklow.webp'
import airforce from './assets/airforce.webp'
import slider1 from './assets/slider1.png'
import slider3 from './assets/slider3.png'
import slider2 from './assets/slider2.png'
import nbnew from './assets/nbnew.webp'
import feet from './assets/feet.png'
import youtube from './assets/youtube.png'
import github from './assets/github.png'
import instagram from './assets/instagram.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header >
          <h3 className='loja'>Originally Feet: Sua loja de Tênis e Roupas</h3>
            
         </header>
       
        <header className='cabeca'>
        <img src={feet} alt="" className="logo-cabeca" />
      
        </header>
        
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
          
        </header>
        <section className="produtos">
          <h2 className='prod-em-cima-card'>Produtos / Novidades</h2>
          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={dunklow} alt="" className="img-card" />
              <h2 className="titulo-card">Tênis Nike Dunk Low Retro Prm</h2>
              <p className="desc"> Com seu estilo Athleisure, o Tênis Nike Dunk Low Retro Prm Masculino é versátil e combina com diferentes looks.</p>
              <p className="preco">R$ 899,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={airmaxtn} alt="" className="img-card" />
              <h2 className="titulo-card">AIR MAX TN</h2>
              <p className="desc">Com seu estilo Athleisure, o Tênis Nike Dunk Low Retro Prm Masculino é versátil e combina com diferentes looks.</p>
              <p className="preco">R$ 1099,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 20%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={airforce} alt="" className="img-card" />
              <h2 className="titulo-card"> Nike Air Force 1´07 LV8</h2>
              <p className="desc">confortável e resistente, o Tênis Nike Air Force 1´07 LV8 Masculino PRETO é versátil.</p>
              <p className="preco">R$ 999,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ☆ ☆</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          <a href="#" className="link-card">
            <div className="card">
              <img src={nbnew} alt="" className="img-card" />
              <h2 className="titulo-card"> Tênis New Balance 2010 </h2>
              <p className="desc">O Tênis New Balance 2010 é um calçado que une estilo e conforto em um só produto.</p>
              <p className="preco">R$ 1044,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (42)</div>
              <div className="off">Novidade!</div>
            </div>
          </a>


        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/COhC3C8XgVs?si=_Z_TcKPhOmQS6GID&amp;controls=0&amp;start=1" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        
        <footer>
          <img src={feet} alt="" className="logo-footer" />
            <h4 className='contato'>Entre em contato / Veja mais</h4>
          <div className="social-icons">
          <a href="https://www.instagram.com/felipeevangelista__/"><img src={instagram} alt="" className='icons'/></a>
          <a href="https://github.com/felipeevangelista410"><img src={github} alt="" className='icons'/></a>
          <a href="#"><img src={youtube} alt=""className='icons' /></a>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
