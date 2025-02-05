import { useState } from 'react'
import { Link } from 'react-router-dom'

import car1 from './assets/car-1.png'
import car3 from './assets/car-3.png'
import car4 from './assets/car-4.png'
import car6 from './assets/car-6.png'
import car7 from './assets/car-7.png'
import car9 from './assets/car-9.png'
import car10 from './assets/car-10.png'
import car11 from './assets/car-11.png'
import car12 from './assets/car-12.png'
import car14 from './assets/car-14.png'
import car15 from './assets/car-15.png'

import whatsappLogo from './assets/whatsapp-logo-svgrepo-com.svg'
import instagramLogo from './assets/instagram-text.svg'
import youtubeLogo from './assets/youtube.svg'
import facebookLogo from './assets/facebook-5-logo-svgrepo-com.svg'
import ratingStar from './assets/rating-star.svg'
import profile from './assets/profile-circle.svg'

import './App.css'
import './additional.css'

import backgroundClip from './assets/bg-clip.mp4'

import personA from './assets/person-1.jpg'
import personB from './assets/person-2.jpg'
import personC from './assets/person-3.jpg'
import personD from './assets/person-4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export const carDetails = [
  {
    img: car1,
    id: 1,
    model: 'Nissan 370Z',
    price: '$37,876',
    year: 2020,
    type: 'Sport Coupe',
    origin: 'Japan',
    mileage: '15,000 miles',
    description: 'A sleek and sporty coupe with impressive performance and timeless design.',
  },
  {
    img: car3,
    id: 3,
    model: 'Bentley',
    price: '$540,000',
    year: 1926,
    type: 'Luxury Classic',
    origin: 'United Kingdom',
    mileage: '8,000 miles (restored)',
    description: 'A vintage luxury car renowned for its classic elegance and craftsmanship.',
  },
  {
    img: car4,
    id: 4,
    model: 'Ford Mustang Shelby GT500',
    price: '$76,820',
    year: 2022,
    type: 'Muscle Car',
    origin: 'United States',
    mileage: '2,000 miles',
    description: 'A modern muscle car delivering unparalleled power and speed.',
  },
  {
    img: car6,
    id: 6,
    model: 'Lamborghini Huracan',
    price: '$326,770',
    year: 2014,
    type: 'Supercar',
    origin: 'Italy',
    mileage: '12,000 miles',
    description: 'An exotic supercar offering breathtaking acceleration and cutting-edge design.',
  },
  {
    img: car7,
    id: 7,
    model: 'Ford Model A',
    price: '$16,114',
    year: 1928,
    type: 'Vintage Sedan',
    origin: 'United States',
    mileage: '20,000 miles (restored)',
    description: 'A piece of automotive history, known for its reliability and charm.',
  },
  {
    img: car9,
    id: 9,
    model: 'Mercedes-Benz E-Class (W212)',
    price: '$63,600',
    year: 2019,
    type: 'Luxury Sedan',
    origin: 'Germany',
    mileage: '22,000 miles',
    description: 'A premium sedan offering luxury, comfort, and advanced technology.',
  },
  {
    img: car10,
    id: 10,
    model: 'Mercedes-Benz AMG GT',
    price: '$136,050',
    year: 2024,
    type: 'Performance Coupe',
    origin: 'Germany',
    mileage: '500 miles',
    description: 'A high-performance sports car with refined engineering and bold styling.',
  },
  {
    img: car11,
    id: 11,
    model: 'Volkswagen Beetle',
    price: '$13,700',
    year: 1969,
    type: 'Compact Classic',
    origin: 'Germany',
    mileage: '50,000 miles',
    description: 'A charming and iconic car that has stood the test of time.',
  },
  {
    img: car12,
    id: 12,
    model: 'IFA F9 / EMW 309',
    price: '$30,000',
    year: 1953,
    type: 'Classic Sedan',
    origin: 'East Germany',
    mileage: '40,000 miles',
    description: 'A post-war German car with a unique design and historical significance.',
  },
  {
    img: car14,
    id: 14,
    model: 'Vespa Sprint',
    price: '$4,250',
    year: 1976,
    type: 'Classic Scooter',
    origin: 'Italy',
    mileage: '6,000 miles',
    description: 'A classic scooter that blends retro styling with everyday practicality.',
  },
  {
    img: car15,
    id: 15,
    model: 'Vespa Sprint 150cc',
    price: '$5,999',
    year: 2022,
    type: 'Modern Scooter',
    origin: 'Italy',
    mileage: '1,200 miles',
    description: 'A modern scooter combining style, efficiency, and urban mobility.',
  },
];


function Nav() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <div id='nav-bar'>
        <nav className='nav-bar'>
        <h1>Best Wheel</h1>
        <button className='toggle' onClick={()=>setIsOpen(!isOpen)}>
          {isOpen? "✖" : "☰"}
        </button>
          <ul className={isOpen? 'active': ''}>
            <li><a href="#home">Home</a></li>
            <li><a href="#cars">Cars</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

function App() {
  const [ selectedType, setSelectedType ] = useState('All')

  const filteredCars = selectedType === 'All' 
  ? carDetails
  : carDetails.filter(car => car.type.toLowerCase().includes(selectedType.toLowerCase()));

  return (
    <>
      <Nav />
      
      <div className="hero-section" id="home">
        <video autoPlay muted playsInline loop className='bg-clip'>
          <source src={backgroundClip} type='video/mp4' />
        </video>
        <div className="hero">
          <h2>FIND YOUR NEXT RIDE</h2>
          <p className="bio">
            Explore the best deals & drive your dream car now.
          </p>
          <a href='#cars' className='start-exploring' >Start Exploring {'\u21E9'}	</a>
        </div>
      </div>

      <div className="car-section"  id='cars'>
        <h2 className='car-section-header-text'>Car Section</h2>
      
        <Swiper 
          effect= {'coverflow'}
          grabCursor = {true}
          centeredSlides = {true}
          loop = {true}
          slidesPerView={'auto'}
          coverflowEffect= {{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false
          }}
          pagination = {{clickable: true}}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
        >
          {carDetails.slice(0,8).map((car,index) => (
            <SwiperSlide>
              <div className='car-card' id='discount' key={index} style={{position: 'relative'}}>
                <span></span>
              <div style={{position: 'relative'}}>
                <img key={index}  src={car.img} className="cars" alt={car.model} />
              </div>
              
              <div className="info" style={{position: 'relative'}}>
                <h3 id="model">{car?.model || 'Unknown Model'}</h3>
                <p id="price">Price: {car?.price || 'Price is not available'}</p>
                <p id="year">Year: {car?.year || 'Unknown'}</p>
                <p id="type">Type: {car?.type || 'Unknown'}</p>
              </div>

              <div className="btn-container-slide">
                  <Link to={`/car/${car.model}`}>
                    <button className='see-more-btn-slide'>Details {'\u2197'}</button>
                  </Link>
                  {/*From Uiverse.io by iZOXVL*/}              
              </div>
            
            </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="option-container">
          <h5 className='option-container-text'>Type: </h5>
          {['All', 'Classic', 'Coupe', 'Luxury', 'Vintage', 'Supercar', 'Scooter'].map(type=> (
            <label key={type}>
              <input type="radio" name="car-type" value={type} id={type}
              checked={selectedType === type} onChange={e=>setSelectedType(e.target.value)}/>{type}
            </label>
          ))}
        </div>

        <div className="car-container">
          {filteredCars.map((car, index) => (
            <div className='car-card' key={car.model} style={{position: 'relative'}}>
              
              <div style={{position: 'relative'}}>
                <img key={index}  src={car.img} className="cars" alt={car.model} />
              </div>
              
              <div className="info" style={{position: 'relative'}}>
                <h3 id="model">{car?.model || 'Unknown Model'}</h3>
                <p id="price">Price: {car?.price || 'Price is not available'}</p>
                <p id="year">Year: {car?.year || 'Unknown'}</p>
                <p id="type">Type: {car?.type || 'Unknown'}</p>
              </div>

              <div className="btn-container">
                  <Link to={`/car/${car.model}`}>
                    <button className='see-more-btn'>Details</button>
                  </Link>
                  {/*From Uiverse.io by iZOXVL*/}
                  <button class="boton-elegante">Purchase</button>              
              </div>
            
            </div>
          ))}
        </div>
      
      </div>  
      
      <div className="testimonial-header" id="reviews">
        <h2 className='testimonial-header-text'>Real Stories & Real Satisfaction</h2>
        <div className="testimonial">
          <div className="review-card-1">
            <img src={personA} className='personA' alt="person" />
            <div className="review-text-box">
              <div className="star-box">
                <img src={profile} className='profile' alt="profile" />
                <img src={ratingStar} className='star' alt="star" />
                <img src={ratingStar} className='star' alt="star" />
                <img src={ratingStar} className='star' alt="star" />
                <img src={ratingStar} className='star' alt="star" />
                <img src={ratingStar} className='star' alt="star" />
              </div>
              <p className='date'>5 days ago</p>
              <p className='review-text'>Buying my car from 'Best Wheel' was an amazing experience! The staff was super helpful, and the whole process was smooth and stress-free. Highly recommend!</p>
              <p className="author"> - Sarah</p>
            </div>
          </div>
          <div className="review-card-2">
            <img src={personD} className='personD' alt="person" />
            <div className="review-text-box">
              <div className="star-box">
                  <img src={profile} className='profile' alt="profile" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
              </div>
              <p className='date'>1 month ago</p>
              <p className='review-text'>From browsing to buying, the process was seamless! No hidden fees, no hassle—just great service and a fantastic car.<br/> Love it!</p>
              <p className="author"> - John</p>
            </div>
          </div>
          <div className="review-card-3">
            <img src={personC} className='personC' alt="person" />
            <div className="review-text-box">
              <div className="star-box">
                  <img src={profile} className='profile' alt="profile" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
              </div>
              <p className='date'>2 weeks ago</p>
              <p className='review-text'>I was hesitant about buying a used car, but 'Best Wheel' reassured me with their quality checks and warranty. Now, I drive with confidence!</p>
              <p className="author"> - Ashley</p>
            </div>
          </div>
          <div className="review-card-4">
            <img src={personB} className='personB' alt="person" />
            <div className="review-text-box">
              <div className="star-box">
                  <img src={profile} className='profile' alt="profile" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
                  <img src={ratingStar} className='star' alt="star" />
              </div>
              <p className='date'>3 weeks ago</p>
              <p className='review-text'>I had so many questions, but the team was incredibly patient and knowledgeable. They guided me every step of the way. 10/10 experience!</p>
              <p className="author"> - Lucus</p>
            </div>
          </div>
        </div>
      </div>

      <div className='footer' id="contact">
        <h2>CONTACT US</h2>
        <h4>Let's find the perfect car for you.</h4>
        <h4>Call, visit, or message us for all your car needs.</h4>
        <div className='icons'>
          <img src={instagramLogo} className='instagram' alt="instagram" aria-label='Go to instagram' />
          <img src={whatsappLogo} className='whatsapp' alt="whatsapp" aria-label='Go to whatsapp'/>
          <img src={facebookLogo} className='facebook' alt="facebook" aria-label='Go to facebook'/>
          <img src={youtubeLogo} className='youtube' alt="youtube" aria-label='Go to youtube'/>
        </div>
      </div>

    </>
  )
}

export default App
