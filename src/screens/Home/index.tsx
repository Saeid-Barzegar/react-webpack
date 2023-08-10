import React from 'react';
import { LOGOS, Logo } from "./constants";

interface HomeTypes {}
const Home = (props: HomeTypes) => {
  const {} = props;
  return (
    <div className='container'>
      <h1 className='page-title'>( React JS & Webpack )</h1>
      <div className='logo-container'>
      {LOGOS.map((logo: Logo) => (
          <a key={logo.id} href={logo.link} target="_blank" rel="noopener noreferrer">
            <img className={logo.class} src={logo.src} alt={logo.alt} />
          </a>
      ))}
      </div>
    </div>
  )
}

export default Home;
