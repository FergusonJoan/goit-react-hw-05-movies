import api from 'services/movies-api';
import { InfoContainer } from './MovieInfo.styled';

export const MovieInfo = ({ movieInfo }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieInfo;

  const date = new Date(release_date).getFullYear();
  const vote = Math.round(vote_average * 10);

  const normalizedGenres =
    genres.length > 0 ? genres.map(({ name }) => name).join(', ') : 'No info';

  const posterUrl = api.getPoster(poster_path);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src={posterUrl} alt={title} />
      </div>
      <InfoContainer>
        <h2>
          {title} ({date})
        </h2>
        <p>User score: {vote}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{normalizedGenres}</p>
      </InfoContainer>
    </div>
  );
};
