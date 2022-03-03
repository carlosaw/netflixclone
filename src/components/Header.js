import React from 'react';
import './Header.css';

export default({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href='/'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt="Netflix"/>
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' alt="Usuário" />
        </a>
      </div>
    </header>
  );
}