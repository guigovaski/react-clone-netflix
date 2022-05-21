import React, { useState, useEffect } from 'react';
import './App.css';

import api from './services/api';

import List from './components/List';
import Featured from './components/Featured';
import { Header } from './components/partials/Header';

import { MoviesType } from './types/MoviesType';

function App() {
  const [moviesList, setMoviesList] = useState<MoviesType[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [headerColor, setHeaderColor] = useState(false);

  useEffect(() => {
    (async() => {
      const list = await api.getHomeList();
      setMoviesList(list)

      const originals = list.filter(item => item.slug === 'originals');
      const randomMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const movie = originals[0].items.results[randomMovie];

      const movieInfo = await api.getMovie(movie.id, 'tv');
      
      setFeaturedMovie(movieInfo);
    })()
  }, [])

  useEffect(() => {
    const scrollListener = () => window.scrollY > 15 
      ? setHeaderColor(true) 
      : setHeaderColor(false); 

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener) 
  }, []);

  return (
    <>
      <Header headerColor={headerColor} />

      {featuredMovie && 
        <Featured data={featuredMovie} />
      }

      <div className="list">
        {moviesList.map((item, index) => (
          <List key={index} data={item} />
        ))}
      </div>

      <footer>
        Feito por guizinho <span role="img" aria-label="coração">❤</span> <br />
        Direitos de imagem da Netflix <br />
      </footer>

      {moviesList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading" />
        </div>
      }
    </>
  );
}

export default App;
