import { useEffect, useState } from 'react';

import './Footer.css';

export default function Footer() {
  const [lastVisit, setLastVisit] = useState();

  useEffect(() => {
    const visited = localStorage.getItem('last-visited');
    if (visited) {
      setLastVisit(new Date(visited).toLocaleString());
      console.log(new Date(visited).toLocaleString());
    }

    const now = new Date().toISOString();
    localStorage.setItem('last-visited', now);
  }, []);
  return (
    <>
      <footer>{lastVisit}</footer>
    </>
  );
}
