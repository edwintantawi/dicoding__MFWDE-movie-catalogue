import TheMovieDbSource from '../../data/themoviedb-source';

const UpComing = {
  async render() {
    return `
      <h2>Up Coming</h2>
    `;
  },
  async afterRender() {
    const movies = await TheMovieDbSource.upComingMovies();
    console.info(movies);
  },
};

export default UpComing;
