import { useEffect, useState } from 'react';

import './Header.css';

export default function Header() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <header>
        <div>
          <img src="logo.png" alt="logo" className="logo" />
          <button className="switch-theme-btn" onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
        <div className="user">
          <div className="user_infor">
            <p className="user_infor-username">Kang0408</p>
            <p className="logout">Đăng xuất</p>
          </div>
          <div className="user_avatar">
            <img src="logo.png" alt="avatar" className="avatar" />
          </div>
        </div>
      </header>
    </>
  );
}
