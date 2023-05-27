import { useLocation } from 'react-router-dom';
import { List, Link, ListElem } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <ListElem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </ListElem>
      ))}
    </List>
  );
};

export default MoviesList;
