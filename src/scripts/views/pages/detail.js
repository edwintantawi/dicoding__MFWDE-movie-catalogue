import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';

const Detail = {
  async render() {
    return `
      <h2>Now Playing</h2>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url);
    console.info(movie);
  },
};

export default Detail;
