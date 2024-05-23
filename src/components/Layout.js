// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './logo.png';

const Layout = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={Logo} alt="Open Tech Community Logo" style={styles.logo} />
        <h1 style={styles.title}>Open Tech Community</h1>
      </header>
      <main style={styles.main}>
        <Outlet />
      </main>
      <footer style={styles.footer}>
        <p>© 2024 Open Tech Community</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: '"Arial", sans-serif',
    backgroundColor: '#f5f5f5',
    color: '#333',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: '1rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  logo: {
    width: '50px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
    marginRight: '1rem',
  },
  title: {
    margin: 0,
    color: '#fff',
  },
  main: {
    flex: 1,
    padding: '1rem',
  },
  footer: {
    backgroundColor: '#333',
    padding: '1rem',
    textAlign: 'center',
    color: '#fff',
  },
};

export default Layout;
