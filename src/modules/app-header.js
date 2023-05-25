import { APP_PARAMS, GRID_PARAMS } from "./app-params";
import { createHtmlElement } from "./element-creator";
import imageTime from "../img/time.svg";
import imageFlag from "../img/flag-red.svg";
import imageMove from "../img/step.svg";
import imageBomb from "../img/bomb.svg";
import imageSoundOn from "../img/sound-on.svg";
import imageSoundOff from "../img/sound-off.svg";
import { createAudio } from "./audio";

// import { stopTimer } from "./app-timer";
// import { destroyApp } from "./app";

export const createHeader = () => {
  const appHeader = createHtmlElement('div', 'app-header');

  // const appAudioButton = createAudioSwitch();
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
  // appHeader.append(appAudioButton);

  APP_PARAMS.appHeader = appHeader;
  // APP_PARAMS.appRestart = restartButton;
}


export const addNumMoves = () => {
  GRID_PARAMS.currentNumMoves++;
  APP_PARAMS.appMoves.innerText = GRID_PARAMS.currentNumMoves;
}

export const increaseCurrentFlag = () => {
  if (GRID_PARAMS.currentNumFlags < GRID_PARAMS.numFlags) {
    GRID_PARAMS.currentNumFlags++;
    APP_PARAMS.appFlags.innerText = GRID_PARAMS.currentNumFlags;
    return true;
  } 

  return false;
}

export const decreaseCurrentFlag = () => {
  if (GRID_PARAMS.currentNumFlags > 0) {
    GRID_PARAMS.currentNumFlags--;
    APP_PARAMS.appFlags.innerText = GRID_PARAMS.currentNumFlags;
    return true;
  } 

  return false;
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

// const createAudioSwitch = () => {
//   const audioButton = createHtmlElement('button', 'app-header__item');
//   audioButton.classList.add('app-audio');
//   const audioImg = new Image();
//   audioImg.src = imageSoundOn;
//   audioImg.alt = 'Audio switch';
//   audioImg.classList.add('app-header__img');

//   audioButton.append(audioImg);

//   createAudio();
//   audioButton.addEventListener('click', (e) => {
//     const img = audioButton.querySelector('.app-header__img');
//     if (GRID_PARAMS.isPlayingAudio) {
//       GRID_PARAMS.isPlayingAudio = false;
//       APP_PARAMS.appAudio.muted = true;
//       img.src = imageSoundOff;
//     } else {
//       GRID_PARAMS.isPlayingAudio = true;
//       APP_PARAMS.appAudio.muted = false;
//       img.src = imageSoundOn;
//     }
//   });


//   return audioButton;
// }