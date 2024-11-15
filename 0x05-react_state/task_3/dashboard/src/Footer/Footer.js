import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import './Footer.css';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <footer className="footer">
      <p>© 2024 Company Name. All rights reserved.</p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact" id="contactLink">Contact us</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;

