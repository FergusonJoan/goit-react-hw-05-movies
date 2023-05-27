import api from 'services/movies-api';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { List } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.fetchReviewsMovies(movieId);

        const normalizedReviews = data.results
          .map(({ id, author, content }) => ({
            id,
            author,
            content,
          }))
          .slice(0, 5);

        setReviews(normalizedReviews);
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
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <li key={id} style={{ marginBottom: '40px' }}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>No reviews</p>
      )}
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default Reviews;
