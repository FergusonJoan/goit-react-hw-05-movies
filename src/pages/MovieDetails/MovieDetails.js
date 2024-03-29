import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { DetailsContainer, ElemLink } from './MovieDetails.styled';
import api from 'services/movies-api';

import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

import { GoBackLink, List } from './MovieDetails.styled';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.fetchFullDataMovie(movieId);

        const {
          title,
          release_date,
          vote_average,
          overview,
          genres,
          poster_path,
        } = data;

        setMovieInfo({
          title,
          release_date,
          vote_average,
          overview,
          genres,
          poster_path,
        });
      } catch (error) {
        console.log(error);
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, [movieId]);

  useEffect(() => {
    if (error === null) return;
    toast.error('some error');
  }, [error]);

  return (
    <DetailsContainer>
      <GoBackLink to={goBackLink.current}>Go back</GoBackLink>
      {movieInfo && <MovieInfo movieInfo={movieInfo} />}
      <List>
        <li>
          <ElemLink to="cast">Cast</ElemLink>
        </li>
        <li>
          <ElemLink to="reviews">Reviews</ElemLink>
        </li>
      </List>
      <Outlet />

      {isLoading && <Loader />}
      <Toaster />
    </DetailsContainer>
  );
};

export default MoviesDetails;
