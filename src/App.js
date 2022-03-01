import React, { useEffect } from 'react';
import Tmdb from './tmdb';

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      console.log(list);
    }
    loadAll();
  }, []);
  
  return (
    <div>
      Olá Mundo!
    </div>
  );
}