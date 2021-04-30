import Detail from '../views/pages/detail';
import NowPlaying from '../views/pages/now-playing';
import UpComing from '../views/pages/upcoming';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': UpComing,
  '/detail/:id': Detail,
};

export default routes;
