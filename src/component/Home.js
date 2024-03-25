import React from 'react'
import { Hero } from '../other/Hero'
import './css/Home.css'
import pastor from './picture/pastor.jpeg'
import pastor1 from './picture/pastor1.png'
import histoy from './picture/histoy.png'
import mission from './picture/mission.png'
import event from './picture/event.jpg'
import one1 from './picture/one1.png';
import two2 from './picture/two2.png';
import three3 from './picture/three3.png';
import four from './picture/four.png';
import nugget from './picture/nugget.jpg';
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='us'>
        <h2 className='welcome'> Welcome to Adeleke University's Wisdom Chapel</h2>
        <div className='container1'>
          <div className='cont-1'>
            <img className='pastor' src={pastor} alt='pastor'/>
          </div>
          <div className='cont-2'>
            <p>
              We are delighted to extend a heartfelt welcome to you,
              whether you're visiting us for the first time or have 
              been a part of our community for years. At Wisdom Chapel, 
              we believe that every person is valued and loved by God, 
              and we strive to reflect that love in all we do.
              Our church family is a diverse and vibrant community, 
              united by our shared faith in Jesus Christ. Here, you'll 
              find a place where you can belong, grow, and serve alongside 
              fellow believers who are passionate about living out God's love 
              in our world.
              We invite you to join us for worship, fellowship, 
              and service as we journey together in faith. Whether 
              you're seeking spiritual guidance, meaningful connections, 
              or simply a welcoming community to call home, we're here for you.
              Explore our website to learn more about who we are, what 
              we believe, and how you can get involved. We look forward 
              to meeting you and walking alongside you on your spiritual 
              journey.
            </p>
          </div>
        </div>
      </div>

      <div className='cardss' id='about-us'>
        <h3 className='discover'>Discover More About Wisdom Chapel</h3>
        <div className='cardy'>
          <div className="card" >
            <img src={histoy} className="top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Our History</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link className='card-link' to=''>read more</Link>
            </div>
          </div>
          <div className="card" >
            <img src={pastor} className="top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link className='card-link' to=''>read more</Link>
            </div>
          </div>
          <div className="card" >
            <img src={mission} className="top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link className='card-link' to=''>read more</Link>
            </div>
          </div>
          <div className="card" >
            <img src={pastor1} className="top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Our Pastor</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link className='card-link' to=''>read more</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='upcoming' id='upcoming'>
        <h3 className='event'>
          Wisdom Chapel Upcoming Event
        </h3>
        <div className='event-div'>
          <img className='event-pic' src={event} alt='upcoming-event'/>
        </div>
      </div>

      <div class="form-lenght" id='contact'>
        <h3 className='discover'>Pls Fill the Information Correctly</h3>
        <form className='form' action="" method="post">
          <div class="name-grid">
           <div>
              <label className="fff" for="name">FirstName</label> <br/>
              <input name="firstname" type="text" placeholder="enter your firstname"/>
            </div>
            <div>
              <label className="fff" for="lname">LastName</label> <br/>
              <input name="lastname" type="text" placeholder="enter your lasttname"/>
            </div>
          </div>
          <div class="number-grid">
           <div>
              <label className="fff" for="email">Email</label> <br/>
              <input name="email" type="email" placeholder="enter your email"/> 
            </div>
            <div>
              <label className="fff" for="email">phone number</label> <br/>
              <input name="phone" type="tel" placeholder="enter your phone number"/>
            </div>
          </div>
          <label className="fff" for="message">message</label> <br/>
          <textarea name="message" id="text" cols="30" rows="10" placeholder="enter message"></textarea>

          <div class="btn-divv">
            <button className="submit" type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className='service' id='service'>
        <h3 className='weekly'>Wisdom Chapel Weekly Service</h3>
        <div className='service-cont'>
          <div className='service-left'>
            <div className='carousel-div'>
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={one1} className="d-block" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={two2} className="d-block" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={three3} className="d-block" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={four} className="d-block" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className='inner-service'>
              <div className='sabbath'>
                <h4 className='sabbath-word'>
                  Sabbath Service
                </h4>
                <div className='time'>
                  <p className='ptime'>Sabbath School Class:</p>
                  <p className='ptime'>9am - 9:30am</p>
                </div>
                <div className='time'>
                  <p className='ptime'>Sabbath Service:</p>
                  <p className='ptime'>9:30am - 11:30am</p>
                </div>
              </div>
              <div className='wednesday'>
                <h4 className='wed-word'>
                  Wednesday Service
                </h4>
                <div className='time'>
                  <p className='ptime'>Wednessday Service:</p>
                  <p className='ptime'>6pm - 7:30pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className='service-right'>
            <h3 className='nugg'>Weekly Nugget</h3>
            <img src={nugget} alt='nugget'/>
          </div>
        </div>
      </div>
    </div>
  )
}
