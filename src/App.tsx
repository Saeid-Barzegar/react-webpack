import React from 'react';
import { Routes , Route, NavLink} from 'react-router-dom';
// screens
import Home from './screens/Home';
import About from './screens/About';

const App = () => {
  const ROUTES = [
    {id: 0, path: '/', label: 'Home', component: <Home />},
    {id: 1, path: '/about', label: 'About', component: <About />},
  ];

  return (
    <div>
      <nav className='nav-bar'>
        {ROUTES.map(route => (
          <NavLink className="nav-item" to={route.path}>{route.label}</NavLink>
        ))}
      </nav>
      <Routes>
        {ROUTES.map(route => (
          <Route
            key={route.id}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </div>
  )
}

export default App;
