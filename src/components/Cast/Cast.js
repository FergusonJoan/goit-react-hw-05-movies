import api from 'services/movies-api';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

import { CastContainer, List } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.fetchCreditsMovies(movieId);

        const normalizedCast = data.cast
          .map(({ id, name, profile_path }) => ({
            id,
            name,
            poster: api.getPoster(profile_path),
          }))
          .slice(0, 10);

        setActors(normalizedCast);
      } catch (error) {
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
    <CastContainer>
      {actors.length > 0 ? (
        <List>
          {actors.map(({ id, name, poster }) => (
            <li key={id}>
              <img src={poster} alt={name} style={{ width: '150px' }} />
              <p>{name}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>No actors</p>
      )}
      {isLoading && <Loader />}
      <Toaster />
    </CastContainer>
  );
};

export default Cast;
