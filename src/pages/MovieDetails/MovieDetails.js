import { useEffect, useState } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
// import style from './movieDetails.module.scss';
import api from 'services/movies-api';

const MoviesDetails = () => {
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');
  const [poster, setPoster] = useState('');

  const { movieId } = useParams();

  return (
    <>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
