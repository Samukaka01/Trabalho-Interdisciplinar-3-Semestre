import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import styles from './Header.module.css';
import logo from '../../image/logo.jpg';

interface HeaderProps {
  onSearchChange: (criterio: string) => void; 
  currentSearch: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearchChange, currentSearch }) => {
  const location = useLocation(); 
  const routesWithoutSearchBar = ['/agentes', '/armas', '/mapas']; 

  
  const shouldShowSearchBar = !routesWithoutSearchBar.includes(location.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/agentes" className={styles.link}>Agentes</Link>
          <Link to="/armas" className={styles.link}>Armas</Link>
          <Link to="/mapas" className={styles.link}>Mapas</Link>
        </nav>
      </div>

      
      {shouldShowSearchBar && ( 
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar..."
            className={styles.searchInput}
            value={currentSearch}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      )}
    </header>
  );
};