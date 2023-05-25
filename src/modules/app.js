import { createHtmlElement } from "./element-creator";
import { GRID_PARAMS, APP_PARAMS, clearGridParams, clearAppParams } from "./app-params";
import { createGrid } from './grid';
import { createHeader } from "./app-header";
import { createModal, openModal } from "./modal";
import { startTimer, stopTimer } from "./app-timer";
import { createAudio } from "./audio";
import { createFooter } from "./app-footer";



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
  createFooter();

  appMain.append(APP_PARAMS.appHeader);
  appMain.append(GRID_PARAMS.gridHtml);
  appMain.append(APP_PARAMS.appModal);
  appMain.append(APP_PARAMS.appFooter);

  app.append(appMain);

  app.addEventListener('gameover', (e) => {
    GRID_PARAMS.gridHtml.classList.add('grid--inactive');
    setTimeout(() => {
      openModal('loss');
    }, 500);
    // app.addEventListener('closemodal', (eventModal) => {
    //   stopTimer();
    // });
  });

  app.addEventListener('gamewin', (e) => {
    GRID_PARAMS.gridHtml.classList.add('grid--inactive');
    setTimeout(() => {
      openModal('win');
    }, 500);
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