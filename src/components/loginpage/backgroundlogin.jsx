import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Login from './loginform';
import './bglogin.css';

const Header = () => (
    <header className='home-header'>
      <nav>
        <ul>
          <li><button className='social-media-btn'><a href="#social-media">Social media</a></button></li>
        </ul>
        <ul>
          <li><button className='about-btn'><a href="#about">About</a></button></li>
          <li><button className='signup-btn'><a href="/register">Sign up</a></button></li>
          {/* <li><button className='login-btn'><Link to="/profile">Login</Link></button></li> */}
        </ul>
      </nav>
    </header>
  );
  
  const MainContent = () => {
    const loginSectionRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === '/login' && loginSectionRef.current) {
        const yOffset = -200;
        const elementPosition = loginSectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + yOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, [location.pathname]);
  
    return (
      <main className='home-main'>
        <section className="hero" >
          <div className="hero-text">
            <h1>Become a part of the world of ideas </h1>
          </div>
          <img src="/images/bawah.png" alt="Hero" />
        </section >
        <section className="content" ref={loginSectionRef}>
          <div className="content-text">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
          </div>
          <img src="/images/atas.png" alt="Photographer" />
        </section>
          {/* Tambahkan section untuk formulir login */}
          <section className="login-section">
          <div className="login-container">
              <Login />
          </div>
        </section>
      </main>
    );
  };

  const Footer = () => (
    <footer className='home-footer'>
      <ul>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#help">Help</a></li>
        <li><a href="#explore">Explore</a></li>
      </ul>
    </footer>
  );

  export { Header, MainContent, Footer };