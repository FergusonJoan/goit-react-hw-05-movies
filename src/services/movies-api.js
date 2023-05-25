const KEY_API = '8055d509f234cecd19af4321cc230e55';

function fetchPopularMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY_API}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error('Error'));
  });
}

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

const api = {
  fetchPopularMovies,
  fetchSearchMovies,
  fetchFullDataMovie,
  fetchCreditsMovies,
  fetchReviewsMovies,
};

export default api;
