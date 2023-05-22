import { APP_PARAMS, GRID_PARAMS } from "./app-params";
import { createHtmlElement } from "./element-creator";
import imageTime from "../img/time.svg";
import imageFlag from "../img/flag-red.svg";
import imageBomb from "../img/bomb.svg";

export const createHeader = () => {
  const appHeader = createHtmlElement('div', 'app-header');

  const appTimer = createTimer();
  const restartButton = createHtmlElement('button', 'app-restart');
  const appFlags = createFlags();
  const appBombs = createBombs();

  appHeader.append(appTimer);
  appHeader.append(restartButton);
  appHeader.append(appFlags);
  appHeader.append(appBombs);

  APP_PARAMS.appHeader = appHeader;
  APP_PARAMS.appTimer = appTimer;
  APP_PARAMS.appBombs = appBombs;
  APP_PARAMS.appFlags = appFlags;
  APP_PARAMS.appRestart = restartButton;
}

const createTimer = () => {
  const appTimer = createHtmlElement('div', 'app-timer');
  appTimer.classList.add('app-header__item');

  const timerNumber = createHtmlElement('time', 'app-timer__number');
  timerNumber.classList.add('app-header__text');
  timerNumber.innerText = GRID_PARAMS.totalTime + '0:00';

  const timerImg = new Image();
  timerImg.src = imageTime;
  timerImg.alt = 'Time';
  timerImg.classList.add('app-header__img');

  appTimer.append(timerNumber);
  appTimer.append(timerImg);

  return appTimer;
}

const createFlags = () => {
  const appFlags = createHtmlElement('div', 'app-flags');
  appFlags.classList.add('app-header__item');

  const flagsNumber = createHtmlElement('span', 'app-flags__number');
  flagsNumber.classList.add('app-header__text');
  flagsNumber.innerText = GRID_PARAMS.numFlags;

  const flagsImg = new Image();
  flagsImg.src = imageFlag;
  flagsImg.alt = 'Flag';
  flagsImg.classList.add('app-header__img');

  appFlags.append(flagsNumber);
  appFlags.append(flagsImg);

  return appFlags;
}

const createBombs = () => {
  const appBombs = createHtmlElement('div', 'app-bombs');
  appBombs.classList.add('app-header__item');

  const bombsNumber = createHtmlElement('span', 'app-bombs__number');
  bombsNumber.classList.add('app-header__text');
  bombsNumber.innerText = GRID_PARAMS.numBombs;

  const bombsImg = new Image();
  bombsImg.src = imageBomb;
  bombsImg.alt = 'Bomb';
  bombsImg.classList.add('app-header__img');

  appBombs.append(bombsNumber);
  appBombs.append(bombsImg);

  return appBombs;
}