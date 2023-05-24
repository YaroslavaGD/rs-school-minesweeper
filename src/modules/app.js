import { createHtmlElement } from "./element-creator";
import { GRID_PARAMS, APP_PARAMS, clearGridParams, clearAppParams } from "./app-params";
import { createGrid } from './grid';
import { createHeader } from "./app-header";
import { createModal, openModal } from "./modal";
import { startTimer, stopTimer } from "./app-timer";



export const startApp = () => {
  let newApp = createApp();

  // newApp.addEventListener('restartapp', (e) => {
  //   newApp.innerHTML = '';
  //   console.log('restart');
  //   destroyApp();
  //   newApp = undefined;
  //   newApp = createApp();
  //   stopTimer();
  // });

  return newApp;
}

const createApp = () => {
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
    GRID_PARAMS.gridHtml.classList.add('grid--inactive');
    // app.addEventListener('closemodal', (eventModal) => {
    //   stopTimer();
    // });
  });

  app.addEventListener('gamewin', (e) => {
    openModal('win');
    GRID_PARAMS.gridHtml.classList.add('grid--inactive');
    // app.addEventListener('closemodal', (eventModal) => {
    //   stopTimer();
    // });
  });

  app.addEventListener('firstclick', (e) => {
    startTimer();
  });

  return app;
}

export const destroyApp = () => {
  stopTimer();
  clearGridParams();
  clearAppParams();
  document.querySelector('.app').innerHTML = '';
}