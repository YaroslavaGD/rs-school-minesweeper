import './index.html';
import './index.scss';
import { startApp, destroyApp } from './modules/app';
import { GRID_PARAMS } from './modules/app-params';
import { stopTimer } from './modules/app-timer';




let mainApp = startApp();

mainApp.addEventListener('restartapp', (e) => {
  console.log('restart');
  stopTimer();
  destroyApp();
  console.log(GRID_PARAMS);
  mainApp = undefined;
  mainApp = startApp();
});