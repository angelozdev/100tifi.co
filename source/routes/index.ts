import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from '../pages/Character';
import NotFound from "../pages/NotFound";
import getHash from '../utils/getHash'
import resolveRoute from "../utils/resolveRoute";
import '../styles/index.css'

const routes = {
   '/': Home,
   '/:id': Character,
   '/contact': NotFound
}


export const router = async () => {
   const $header = document.getElementById('header') || null;
   const $content = document.getElementById('content') || null;

   $header.innerHTML = Header();
   const hash = getHash();
   const route = resolveRoute(hash);
   const render = await routes[route] ? routes[route] : NotFound;

   $content.innerHTML = await render();
}

