import api from 'services/movies-api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  // useEffect(() => {}, [movieId]);

  const { movieId } = useParams();

  return <>Cast</>;
};

export default Cast;
