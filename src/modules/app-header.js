import { APP_PARAMS, GRID_PARAMS } from "./app-params";
import { createHtmlElement } from "./element-creator";
import imageTime from "../img/time.svg";
import imageFlag from "../img/flag-red.svg";
import imageMove from "../img/step.svg";
import imageBomb from "../img/bomb.svg";
// import { stopTimer } from "./app-timer";
// import { destroyApp } from "./app";

export const createHeader = () => {
  const appHeader = createHtmlElement('div', 'app-header');

  const appTimer = createTimer();
  const appFlags = createFlags();
  const appMoves = createMoves();
  const appBombs = createBombs();

  // const restartButton = createHtmlElement('button', 'app-restart');
  // restartButton.addEventListener('click', (e) => {
  //   // e.preventDefault();
  //   restartButton.dispatchEvent(new CustomEvent('restartapp', {
  //     bubbles: true,
  //   }));
  // });

  appHeader.append(appTimer);
  // appHeader.append(restartButton);
  appHeader.append(appFlags);
  appHeader.append(appMoves);
  appHeader.append(appBombs);

  APP_PARAMS.appHeader = appHeader;
  // APP_PARAMS.appRestart = restartButton;
}


export const addNumMoves = () => {
  GRID_PARAMS.stepsNum++;
  APP_PARAMS.appMoves.innerText = GRID_PARAMS.stepsNum;
}

const createTimer = () => {
  const appTimer = createHtmlElement('div', 'app-timer');
  appTimer.classList.add('app-header__item');

  const timerNumber = createHtmlElement('time', 'app-timer__number');
  timerNumber.classList.add('app-header__text');
  timerNumber.innerText = '00:00';

  const timerImg = new Image();
  timerImg.src = imageTime;
  timerImg.alt = 'Time';
  timerImg.classList.add('app-header__img');

  appTimer.append(timerNumber);
  appTimer.append(timerImg);

  
  APP_PARAMS.appTimer = timerNumber;

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

  APP_PARAMS.appFlags = flagsNumber;
  return appFlags;
}

const createMoves = () => {
  const appMoves = createHtmlElement('div', 'app-moves');
  appMoves.classList.add('app-header__item');

  const movesNumber = createHtmlElement('span', 'app-moves__number');
  movesNumber.classList.add('app-header__text');
  movesNumber.innerText = 0;

  const movesImg = new Image();
  movesImg.src = imageMove;
  movesImg.alt = 'Cat step';
  movesImg.classList.add('app-header__img');

  appMoves.append(movesNumber);
  appMoves.append(movesImg);

  APP_PARAMS.appMoves = movesNumber;
  return appMoves;
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

  
  APP_PARAMS.appBombs = bombsNumber;

  return appBombs;
}
