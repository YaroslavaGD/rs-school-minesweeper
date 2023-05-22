import { createHtmlElement } from "./element-creator";
import { GRID_PARAMS, APP_PARAMS } from "./app-params";
import { createGrid } from './grid';
import { createHeader } from "./app-header";
import { createModal, openModal } from "./modal";


export const createApp = () => {
  const app = document.querySelector('.app');
  
  const appMain = createHtmlElement('main', 'app__container');


  createGrid();
  createHeader();
  createModal();

  appMain.append(APP_PARAMS.appHeader);
  appMain.append(GRID_PARAMS.gridHtml);
  appMain.append(APP_PARAMS.appModal);

  app.append(appMain);

  app.addEventListener('gameover', (e) => {
      openModal('loss');
  });

  app.addEventListener('gamewin', (e) => {
    openModal('win');
  });
}