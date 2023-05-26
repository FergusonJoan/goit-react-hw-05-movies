import api from 'services/movies-api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  // useEffect(() => {}, [movieId]);

  const { movieId } = useParams();

  return <>Reviews</>;
};

export default Reviews;
