const BASE_URL = `https://api.themoviedb.org/`;
// const KEY = 'a23f992c37fa7bff376d520d90c3e372';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjNmOTkyYzM3ZmE3YmZmMzc2ZDUyMGQ5MGMzZTM3MiIsInN1YiI6IjY0ZGE3MTkxNzcxOWQ3MDEyMjYwNTQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EcilcBJlmobgwYQorQteis4qOz8lqnGFjMvASzZWQbk',
  },
};

export async function fetchTrendMovies() {
  try {
    const data = await fetch(
      `${BASE_URL}3/trending/movie/day?language=en-US`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieByTitle(name) {
  try {
    const data = await fetch(
      `${BASE_URL}3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchMovieDetails(id) {
  try {
    const data = await fetch(
      `${BASE_URL}3/movie/${id}?language=en-US`,
      options
    );

    return await data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchCast(id) {
  try {
    const data = await fetch(
      `${BASE_URL}3/movie/${id}/credits?language=en-US`,
      options
    );
    return await data.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchReviews(id){
  try{
    const data = await fetch(`${BASE_URL}3/movie/${id}/reviews?language=en-US&page=1`,
    options)
    return await data.json();

  }catch(error){
    console.log(error.message)
  }
}
