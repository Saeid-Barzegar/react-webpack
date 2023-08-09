import React from 'react';
import './styles/styles.scss';

interface Logo {
  id: number;
  src: string;
  alt: string;
  link: string;
  class: string;
}

type LogosType = Logo[]

const App = () => {
  const LOGOS: LogosType = [
    {id: 0, src: 'images/react-logo.svg', alt: 'React JS Logo', link: 'https://react.dev', class: 'logo'},
    {id: 1, src: 'images/webpack-logo.svg', alt: 'Webpack Logo', link: 'https://webpack.js.org', class: 'logo'},
    {id: 2, src: 'images/babel-logo.svg', alt: 'Babel JS Logo', link: 'https://babeljs.io', class: 'babel-logo'},
    {id: 3, src: 'images/typescript-logo.svg', alt: 'TypeScript Logo', link: 'https://www.typescriptlang.org', class: 'typescript-logo'},
    {id: 4, src: 'images/sass-logo.svg', alt: 'Sass Logo', link: 'https://sass-lang.com', class: 'logo'},
    {id: 4, src: 'images/less-logo.svg', alt: 'LESS Logo', link: 'https://lesscss.org', class: 'logo'},
  ];
  return (
    <div className='container'>
      {LOGOS.map(logo => (
        <div key={logo.id} className='logo-container'>
          <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <img className={logo.class} src={logo.src} alt={logo.alt} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default App;
