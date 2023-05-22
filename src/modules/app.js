import { GRID_PARAMS, APP_PARAMS } from "./app-params";
import { createGrid } from './grid';
import { createModal, openModal } from "./modal";


export const createApp = () => {
  const app = document.querySelector('.app');
  
  const appMain = document.createElement('main');
  appMain.classList.add('app__container');


  createGrid();
  createModal();

  appMain.append(GRID_PARAMS.gridHtml);
  appMain.append(APP_PARAMS.appModal);

  app.append(appMain);

  app.addEventListener('gameover', (e) => {
    // setTimeout(() => {

      openModal('loss');
    // }, 300);
  });
}