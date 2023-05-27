import noPoster from 'images/no_poster.png';

const KEY_API = '8055d509f234cecd19af4321cc230e55';

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w300';

function fetchPopularMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY_API}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

// example with async await
// async function fetchPopularMovies2() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY_API}`
//   );

//   if (response.ok) {
//     return await response.json();
//   }

//   return Promise.reject(new Error('Error'));
// }

function fetchSearchMovies(search) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&include_adult=false&language=en-US&query=${search}&page=1`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

function fetchFullDataMovie(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}&language=en-US`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

function fetchCreditsMovies(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY_API}&language=en-US`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

function fetchReviewsMovies(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY_API}&language=en-US&page=1`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

function getPoster(url) {
  return url ? `${POSTER_BASE_URL}${url}` : noPoster;
}

const api = {
  fetchPopularMovies,
  fetchSearchMovies,
  fetchFullDataMovie,
  fetchCreditsMovies,
  fetchReviewsMovies,
  getPoster,
};

export default api;
