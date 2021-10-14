import Home from './../pages/home';
import Personaje from './../pages/Personaje';
import Error404 from './../pages/Error404';
import getHash from './../utils/getHash';
import resolveRoutes from './../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Personaje,
  '/Contacto': 'Contacto'
}

const router = async () => {
  const content = null || document.getElementById('content');
  let hash = getHash();
  console.log(hash)
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
}

export default router;