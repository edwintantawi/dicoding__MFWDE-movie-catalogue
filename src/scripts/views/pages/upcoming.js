import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const UpComing = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies"></div>
      </div>
    `;
  },
  async afterRender() {
    const movies = await TheMovieDbSource.upComingMovies();
    const movieContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      movieContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default UpComing;
