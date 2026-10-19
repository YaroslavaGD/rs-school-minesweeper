/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/app-footer.js":
/*!***********************************!*\
  !*** ./src/modules/app-footer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _app_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-params */ "./src/modules/app-params.js");
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-creator */ "./src/modules/element-creator.js");
/* harmony import */ var _img_sound_on_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/sound-on.svg */ "./src/img/sound-on.svg");
/* harmony import */ var _img_sound_on_light_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/sound-on-light.svg */ "./src/img/sound-on-light.svg");
/* harmony import */ var _img_sound_off_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/sound-off.svg */ "./src/img/sound-off.svg");
/* harmony import */ var _img_sound_off_light_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/sound-off-light.svg */ "./src/img/sound-off-light.svg");
/* harmony import */ var _img_mode_light_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/mode-light.svg */ "./src/img/mode-light.svg");
/* harmony import */ var _img_mode_dark_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/mode-dark.svg */ "./src/img/mode-dark.svg");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio */ "./src/modules/audio.js");









const createFooter = () => {
  const appFooter = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-footer');
  const appAudioButton = createAudioSwitch();
  const appModeButton = createModeSwitch();
  appFooter.append(appAudioButton);
  appFooter.append(appModeButton);
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appFooter = appFooter;
};
const createAudioSwitch = () => {
  const audioButton = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'app-footer__item');
  audioButton.classList.add('app-audio');
  const audioImg = new Image();
  audioImg.src = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isDark ? _img_sound_on_svg__WEBPACK_IMPORTED_MODULE_2__ : _img_sound_on_light_svg__WEBPACK_IMPORTED_MODULE_3__;
  audioImg.alt = 'Audio switch';
  audioImg.classList.add('app-footer__img');
  audioButton.append(audioImg);
  (0,_audio__WEBPACK_IMPORTED_MODULE_8__.createAudio)();
  audioButton.addEventListener('click', e => {
    const img = audioButton.querySelector('.app-footer__img');
    if (_app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isPlayingAudio) {
      _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isPlayingAudio = false;
      _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appAudio.muted = true;
      img.src = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isDark ? _img_sound_off_svg__WEBPACK_IMPORTED_MODULE_4__ : _img_sound_off_light_svg__WEBPACK_IMPORTED_MODULE_5__;
    } else {
      _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isPlayingAudio = true;
      _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appAudio.muted = false;
      img.src = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isDark ? _img_sound_on_svg__WEBPACK_IMPORTED_MODULE_2__ : _img_sound_on_light_svg__WEBPACK_IMPORTED_MODULE_3__;
    }
  });
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appAudioButton = audioButton;
  return audioButton;
};
const createModeSwitch = () => {
  const modeButton = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'app-footer__item');
  modeButton.classList.add('app-mode');
  const modeImg = new Image();
  modeImg.src = _img_mode_dark_svg__WEBPACK_IMPORTED_MODULE_7__;
  modeImg.alt = 'Mode switch';
  modeImg.classList.add('app-footer__img');
  modeButton.append(modeImg);
  modeButton.addEventListener('click', e => {
    const img = modeButton.querySelector('.app-footer__img');
    const app = document.querySelector('.app');
    const appAudioImg = _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appAudioButton.querySelector('.app-footer__img');
    if (_app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isDark) {
      _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isDark = false;
      img.src = _img_mode_light_svg__WEBPACK_IMPORTED_MODULE_6__;
      appAudioImg.src = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isPlayingAudio ? _img_sound_on_light_svg__WEBPACK_IMPORTED_MODULE_3__ : _img_sound_off_light_svg__WEBPACK_IMPORTED_MODULE_5__;
      app.classList.add('app--light');
    } else {
      _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isDark = true;
      img.src = _img_mode_dark_svg__WEBPACK_IMPORTED_MODULE_7__;
      appAudioImg.src = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.isPlayingAudio ? _img_sound_on_svg__WEBPACK_IMPORTED_MODULE_2__ : _img_sound_off_svg__WEBPACK_IMPORTED_MODULE_4__;
      app.classList.remove('app--light');
    }
  });
  return modeButton;
};

/***/ }),

/***/ "./src/modules/app-header.js":
/*!***********************************!*\
  !*** ./src/modules/app-header.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNumMoves": () => (/* binding */ addNumMoves),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "decreaseCurrentFlag": () => (/* binding */ decreaseCurrentFlag),
/* harmony export */   "increaseCurrentFlag": () => (/* binding */ increaseCurrentFlag)
/* harmony export */ });
/* harmony import */ var _app_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-params */ "./src/modules/app-params.js");
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-creator */ "./src/modules/element-creator.js");
/* harmony import */ var _img_time_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/time.svg */ "./src/img/time.svg");
/* harmony import */ var _img_flag_red_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/flag-red.svg */ "./src/img/flag-red.svg");
/* harmony import */ var _img_step_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/step.svg */ "./src/img/step.svg");
/* harmony import */ var _img_bomb_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/bomb.svg */ "./src/img/bomb.svg");
/* harmony import */ var _img_sound_on_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/sound-on.svg */ "./src/img/sound-on.svg");
/* harmony import */ var _img_sound_off_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/sound-off.svg */ "./src/img/sound-off.svg");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio */ "./src/modules/audio.js");










// import { stopTimer } from "./app-timer";
// import { destroyApp } from "./app";

const createHeader = () => {
  const appHeader = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-header');

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

  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appHeader = appHeader;
  // APP_PARAMS.appRestart = restartButton;
};

const addNumMoves = () => {
  _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumMoves++;
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appMoves.innerText = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumMoves;
};
const increaseCurrentFlag = () => {
  if (_app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumFlags < _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.numFlags) {
    _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumFlags++;
    _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appFlags.innerText = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumFlags;
    return true;
  }
  return false;
};
const decreaseCurrentFlag = () => {
  if (_app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumFlags > 0) {
    _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumFlags--;
    _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appFlags.innerText = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumFlags;
    return true;
  }
  return false;
};
const createTimer = () => {
  const appTimer = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-timer');
  appTimer.classList.add('app-header__item');
  const timerNumber = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('time', 'app-timer__number');
  timerNumber.classList.add('app-header__text');
  timerNumber.innerText = '00:00';
  const timerImg = new Image();
  timerImg.src = _img_time_svg__WEBPACK_IMPORTED_MODULE_2__;
  timerImg.alt = 'Time';
  timerImg.classList.add('app-header__img');
  appTimer.append(timerNumber);
  appTimer.append(timerImg);
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appTimer = timerNumber;
  return appTimer;
};
const createFlags = () => {
  const appFlags = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-flags');
  appFlags.classList.add('app-header__item');
  const flagsNumber = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'app-flags__number');
  flagsNumber.classList.add('app-header__text');
  flagsNumber.innerText = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.numFlags;
  const flagsImg = new Image();
  flagsImg.src = _img_flag_red_svg__WEBPACK_IMPORTED_MODULE_3__;
  flagsImg.alt = 'Flag';
  flagsImg.classList.add('app-header__img');
  appFlags.append(flagsNumber);
  appFlags.append(flagsImg);
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appFlags = flagsNumber;
  return appFlags;
};
const createMoves = () => {
  const appMoves = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-moves');
  appMoves.classList.add('app-header__item');
  const movesNumber = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'app-moves__number');
  movesNumber.classList.add('app-header__text');
  movesNumber.innerText = 0;
  const movesImg = new Image();
  movesImg.src = _img_step_svg__WEBPACK_IMPORTED_MODULE_4__;
  movesImg.alt = 'Cat step';
  movesImg.classList.add('app-header__img');
  appMoves.append(movesNumber);
  appMoves.append(movesImg);
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appMoves = movesNumber;
  return appMoves;
};
const createBombs = () => {
  const appBombs = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-bombs');
  appBombs.classList.add('app-header__item');
  const bombsNumber = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('span', 'app-bombs__number');
  bombsNumber.classList.add('app-header__text');
  bombsNumber.innerText = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.numBombs;
  const bombsImg = new Image();
  bombsImg.src = _img_bomb_svg__WEBPACK_IMPORTED_MODULE_5__;
  bombsImg.alt = 'Bomb';
  bombsImg.classList.add('app-header__img');
  appBombs.append(bombsNumber);
  appBombs.append(bombsImg);
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appBombs = bombsNumber;
  return appBombs;
};

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

/***/ }),

/***/ "./src/modules/app-params.js":
/*!***********************************!*\
  !*** ./src/modules/app-params.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_PARAMS": () => (/* binding */ APP_PARAMS),
/* harmony export */   "GRID_PARAMS": () => (/* binding */ GRID_PARAMS),
/* harmony export */   "clearAppParams": () => (/* binding */ clearAppParams),
/* harmony export */   "clearGridParams": () => (/* binding */ clearGridParams)
/* harmony export */ });
const DEFAULT_GRID_PARAMS = {
  seconds: 0,
  minutes: 0,
  timer: undefined,
  isFirstClick: false,
  isPlayingAudio: false,
  isDark: true,
  currentNumMoves: 0,
  currentNumFlags: 10,
  numBombs: 90,
  numFlags: 10,
  numCells: 10,
  numEmptyCells: 10,
  totalNumCells: 100,
  foundBombs: 0,
  gridArr: [],
  gridHtml: undefined,
  bombsArr: [],
  cellsArr: []
};
const GRID_PARAMS = {
  totalTime: {
    seconds: 0,
    minutes: 0
  },
  timer: undefined,
  isFirstClick: false,
  isPlayingAudio: true,
  isDark: true,
  audioType: 'open',
  currentNumMoves: 0,
  currentNumFlags: 10,
  numBombs: 10,
  numFlags: 10,
  numCells: 10,
  numEmptyCells: 90,
  totalNumCells: 100,
  foundBombs: 0,
  gridArr: [],
  gridHtml: undefined,
  cellsArr: []
};
const APP_PARAMS = {
  appHeader: undefined,
  appFooter: undefined,
  appTimer: undefined,
  appBombs: undefined,
  appFlags: undefined,
  appMoves: undefined,
  appRestart: undefined,
  appModal: undefined,
  appModalButton: undefined,
  appModalText: undefined,
  appAudio: undefined,
  appAudioButton: undefined
};
const clearGridParams = () => {
  GRID_PARAMS.totalTime.minutes = DEFAULT_GRID_PARAMS.minutes;
  GRID_PARAMS.totalTime.seconds = DEFAULT_GRID_PARAMS.seconds;
  GRID_PARAMS.timer = undefined;
  GRID_PARAMS.isFirstClick = false;
  GRID_PARAMS.isPlayingAudio = false, GRID_PARAMS.currentNumMoves = 0;
  GRID_PARAMS.numBombs = DEFAULT_GRID_PARAMS.numBombs;
  GRID_PARAMS.numFlags = DEFAULT_GRID_PARAMS.numFlags;
  GRID_PARAMS.numCells = DEFAULT_GRID_PARAMS.numCells;
  GRID_PARAMS.numEmptyCells = DEFAULT_GRID_PARAMS.numEmptyCells;
  GRID_PARAMS.totalNumCells = DEFAULT_GRID_PARAMS.totalNumCells;
  GRID_PARAMS.foundBombs = 0;
  GRID_PARAMS.gridArr = [];
  GRID_PARAMS.gridHtml = '';
  GRID_PARAMS.cellsArr = [];
};
const clearAppParams = () => {
  for (let key in APP_PARAMS) {
    APP_PARAMS[key] = '';
  }
};

/***/ }),

/***/ "./src/modules/app-timer.js":
/*!**********************************!*\
  !*** ./src/modules/app-timer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTimeToString": () => (/* binding */ convertTimeToString),
/* harmony export */   "pauseTimer": () => (/* binding */ pauseTimer),
/* harmony export */   "startTimer": () => (/* binding */ startTimer),
/* harmony export */   "stopTimer": () => (/* binding */ stopTimer)
/* harmony export */ });
/* harmony import */ var _app_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-params */ "./src/modules/app-params.js");

const startTimer = () => {
  _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.timer = setInterval(updateTimer, 1000);
};
const pauseTimer = () => {
  clearInterval(_app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.timer);
};
const stopTimer = () => {
  clearInterval(_app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.timer);
  _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.totalTime.minutes = 0;
  _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.totalTime.seconds = 0;
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appTimer.innerText = '00:00';
};
const convertTimeToString = () => {
  const strMinutes = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.totalTime.minutes.toString().padStart(2, '0');
  const strSeconds = _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.totalTime.seconds.toString().padStart(2, '0');
  return `${strMinutes}:${strSeconds}`;
};
const updateTimer = () => {
  _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.totalTime.seconds++;
  if (_app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.totalTime.seconds === 60) {
    _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.totalTime.minutes++;
    _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.totalTime.seconds = 0;
  }
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appTimer.innerText = convertTimeToString();
};

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "destroyApp": () => (/* binding */ destroyApp),
/* harmony export */   "startApp": () => (/* binding */ startApp)
/* harmony export */ });
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-creator */ "./src/modules/element-creator.js");
/* harmony import */ var _app_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-params */ "./src/modules/app-params.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./src/modules/grid.js");
/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-header */ "./src/modules/app-header.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");
/* harmony import */ var _app_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-timer */ "./src/modules/app-timer.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio */ "./src/modules/audio.js");
/* harmony import */ var _app_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-footer */ "./src/modules/app-footer.js");








const startApp = () => {
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
};
const createApp = () => {
  const app = document.querySelector('.app');
  const appMain = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('main', 'app__container');
  (0,_grid__WEBPACK_IMPORTED_MODULE_2__.createGrid)();
  (0,_app_header__WEBPACK_IMPORTED_MODULE_3__.createHeader)();
  (0,_modal__WEBPACK_IMPORTED_MODULE_4__.createModal)();
  (0,_app_footer__WEBPACK_IMPORTED_MODULE_7__.createFooter)();
  appMain.append(_app_params__WEBPACK_IMPORTED_MODULE_1__.APP_PARAMS.appHeader);
  appMain.append(_app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.gridHtml);
  appMain.append(_app_params__WEBPACK_IMPORTED_MODULE_1__.APP_PARAMS.appModal);
  appMain.append(_app_params__WEBPACK_IMPORTED_MODULE_1__.APP_PARAMS.appFooter);
  app.append(appMain);
  app.addEventListener('gameover', e => {
    _app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.gridHtml.classList.add('grid--inactive');
    setTimeout(() => {
      (0,_modal__WEBPACK_IMPORTED_MODULE_4__.openModal)('loss');
    }, 500);
    // app.addEventListener('closemodal', (eventModal) => {
    //   stopTimer();
    // });
  });

  app.addEventListener('gamewin', e => {
    _app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.gridHtml.classList.add('grid--inactive');
    setTimeout(() => {
      (0,_modal__WEBPACK_IMPORTED_MODULE_4__.openModal)('win');
    }, 500);
    // app.addEventListener('closemodal', (eventModal) => {
    //   stopTimer();
    // });
  });

  app.addEventListener('firstclick', e => {
    (0,_app_timer__WEBPACK_IMPORTED_MODULE_5__.startTimer)();
  });
  return app;
};
const destroyApp = () => {
  (0,_app_timer__WEBPACK_IMPORTED_MODULE_5__.stopTimer)();
  (0,_app_params__WEBPACK_IMPORTED_MODULE_1__.clearGridParams)();
  (0,_app_params__WEBPACK_IMPORTED_MODULE_1__.clearAppParams)();
  document.querySelector('.app').innerHTML = '';
};

/***/ }),

/***/ "./src/modules/audio.js":
/*!******************************!*\
  !*** ./src/modules/audio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAudio": () => (/* binding */ createAudio),
/* harmony export */   "pauseAudio": () => (/* binding */ pauseAudio),
/* harmony export */   "playCurrentAudio": () => (/* binding */ playCurrentAudio)
/* harmony export */ });
/* harmony import */ var _sounds_game_win_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sounds/game-win.wav */ "./src/sounds/game-win.wav");
/* harmony import */ var _sounds_game_over_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds/game-over.wav */ "./src/sounds/game-over.wav");
/* harmony import */ var _sounds_bomb_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sounds/bomb.wav */ "./src/sounds/bomb.wav");
/* harmony import */ var _sounds_flag_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sounds/flag.wav */ "./src/sounds/flag.wav");
/* harmony import */ var _sounds_open_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sounds/open.wav */ "./src/sounds/open.wav");
/* harmony import */ var _app_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-params */ "./src/modules/app-params.js");






const createAudio = () => {
  _app_params__WEBPACK_IMPORTED_MODULE_5__.APP_PARAMS.appAudio = new Audio();
};
const playCurrentAudio = type => {
  switch (type) {
    case 'flag':
      _app_params__WEBPACK_IMPORTED_MODULE_5__.GRID_PARAMS.audioType = _sounds_flag_wav__WEBPACK_IMPORTED_MODULE_3__;
      break;
    case 'bomb':
      _app_params__WEBPACK_IMPORTED_MODULE_5__.GRID_PARAMS.audioType = _sounds_bomb_wav__WEBPACK_IMPORTED_MODULE_2__;
      break;
    case 'win':
      _app_params__WEBPACK_IMPORTED_MODULE_5__.GRID_PARAMS.audioType = _sounds_game_win_wav__WEBPACK_IMPORTED_MODULE_0__;
      break;
    case 'loss':
      _app_params__WEBPACK_IMPORTED_MODULE_5__.GRID_PARAMS.audioType = _sounds_game_over_wav__WEBPACK_IMPORTED_MODULE_1__;
      break;
    default:
      _app_params__WEBPACK_IMPORTED_MODULE_5__.GRID_PARAMS.audioType = _sounds_open_wav__WEBPACK_IMPORTED_MODULE_4__;
  }
  playAudio();
};
const pauseAudio = () => {
  if (!_app_params__WEBPACK_IMPORTED_MODULE_5__.APP_PARAMS.appAudio.paused && _app_params__WEBPACK_IMPORTED_MODULE_5__.GRID_PARAMS.isPlayingAudio) {
    _app_params__WEBPACK_IMPORTED_MODULE_5__.APP_PARAMS.appAudio.pause();
  }
};
const playAudio = () => {
  _app_params__WEBPACK_IMPORTED_MODULE_5__.APP_PARAMS.appAudio.src = _app_params__WEBPACK_IMPORTED_MODULE_5__.GRID_PARAMS.audioType;
  _app_params__WEBPACK_IMPORTED_MODULE_5__.APP_PARAMS.appAudio.currentTime = 0;
  _app_params__WEBPACK_IMPORTED_MODULE_5__.APP_PARAMS.appAudio.play();
};

/***/ }),

/***/ "./src/modules/cell.js":
/*!*****************************!*\
  !*** ./src/modules/cell.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateAreaIndexes": () => (/* binding */ calculateAreaIndexes),
/* harmony export */   "createCell": () => (/* binding */ createCell),
/* harmony export */   "getCellParameters": () => (/* binding */ getCellParameters),
/* harmony export */   "openCell": () => (/* binding */ openCell),
/* harmony export */   "openEmptyCells": () => (/* binding */ openEmptyCells),
/* harmony export */   "setCellValue": () => (/* binding */ setCellValue),
/* harmony export */   "toggleFlag": () => (/* binding */ toggleFlag)
/* harmony export */ });
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-creator */ "./src/modules/element-creator.js");
/* harmony import */ var _app_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-params */ "./src/modules/app-params.js");
/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-header */ "./src/modules/app-header.js");
/* harmony import */ var _sounds_flag_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sounds/flag.wav */ "./src/sounds/flag.wav");
/* harmony import */ var _sounds_open_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sounds/open.wav */ "./src/sounds/open.wav");
/* harmony import */ var _sounds_bomb_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sounds/bomb.wav */ "./src/sounds/bomb.wav");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio */ "./src/modules/audio.js");







const createCell = (id, rowIndex, columnIndex, value) => {
  const buttonCell = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('button', 'cell');
  const number = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('span', 'cell__number');
  buttonCell.dataset.id = id;
  buttonCell.dataset.row = rowIndex;
  buttonCell.dataset.column = columnIndex;
  buttonCell.dataset.value = value;
  buttonCell.dataset.open = false;
  switch (value) {
    case 'x':
      buttonCell.classList.add('cell--bomb');
      buttonCell.dataset.mode = 'bomb';
      break;
    case 0:
      buttonCell.dataset.mode = 'empty';
      break;
    default:
      buttonCell.dataset.mode = 'number';
      number.innerText = value;
  }
  buttonCell.append(number);
  return buttonCell;
};
const setCellValue = (cell, value) => {
  const number = cell.querySelector('.cell__number');
  cell.classList.remove('cell--bomb');
  number.innerText = '';
  cell.dataset.value = value;
  switch (value) {
    case 'x':
      cell.classList.add('cell--bomb');
      cell.dataset.mode = 'bomb';
      break;
    case 0:
      cell.dataset.mode = 'empty';
      break;
    default:
      cell.dataset.mode = 'number';
      number.innerText = value;
  }
};
const getCellParameters = cell => {
  return {
    id: cell.dataset.id,
    row: cell.dataset.row,
    column: cell.dataset.column,
    mode: cell.dataset.mode,
    open: cell.dataset.open === 'true',
    hasFlag: cell.classList.contains('cell--flag')
  };
};
const calculateAreaIndexes = (currentRow, currentColumn) => {
  let row = currentRow;
  let column = currentColumn;
  if (typeof row === 'string') row = Number(row);
  if (typeof column === 'string') column = Number(column);
  const cellAreaIndexes = {
    left: [row, column - 1],
    right: [row, column + 1],
    top: [row - 1, column],
    topLeft: [row - 1, column - 1],
    topRight: [row - 1, column + 1],
    bottom: [row + 1, column],
    bottomLeft: [row + 1, column - 1],
    bottomRight: [row + 1, column + 1]
  };
  for (let key in cellAreaIndexes) {
    let newRow = cellAreaIndexes[key][0];
    let newColumn = cellAreaIndexes[key][1];

    //-1 - incorrect value
    if (newRow < 0 || newRow >= _app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.numCells) newRow = -1;
    if (newColumn < 0 || newColumn >= _app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.numCells) newColumn = -1;
    cellAreaIndexes[key][0] = newRow;
    cellAreaIndexes[key][1] = newColumn;
  }
  return cellAreaIndexes;
};
const openCell = async (cell, isOpen) => {
  if (!cell.classList.contains('cell--flag')) {
    cell.classList.add('cell--active');
    cell.classList.remove('cell--flag');
    if ((cell.dataset.mode === 'empty' || cell.dataset.mode === 'number') && cell.dataset.isOpen !== true) {
      // playCurrentAudio('open');

      // audio.src = soundOpen;
      // audio.play();
      _app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.numEmptyCells--;
      // console.log(GRID_PARAMS.numEmptyCells);
    }

    if (cell.dataset.mode === 'bomb' && isOpen === true) {
      // audio.src = soundBomb;
      // audio.play();
      (0,_audio__WEBPACK_IMPORTED_MODULE_6__.playCurrentAudio)('bomb');
      cell.dispatchEvent(new CustomEvent('gameover', {
        bubbles: true,
        detail: getCellParameters(cell)
      }));
    } else if (_app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.numEmptyCells === 0) {
      cell.dispatchEvent(new CustomEvent('gamewin', {
        bubbles: true,
        detail: getCellParameters(cell)
      }));
    }
    cell.dataset.open = isOpen;
  }
};
const openEmptyCells = activeCell => {
  const activeCellParameters = getCellParameters(activeCell);
  const areaIndexes = calculateAreaIndexes(activeCellParameters.row, activeCellParameters.column);
  if (!activeCell.classList.contains('cell--active')) {
    if (activeCellParameters.mode === 'number' || activeCellParameters.mode === 'bomb' || activeCellParameters.hasFlag) {
      openCell(activeCell, true);
    } else if (activeCellParameters.mode === 'empty') {
      if (activeCellParameters.open !== true) {
        openCell(activeCell, true);
        for (let key in areaIndexes) {
          let rowAreaCell = areaIndexes[key][0];
          let columnAreaCell = areaIndexes[key][1];

          // проверка что такие индексы существуют
          if (rowAreaCell !== -1 && columnAreaCell !== -1) {
            let indexAreaCell = Number(rowAreaCell + "" + columnAreaCell);
            let areaCell = _app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.cellsArr[indexAreaCell];
            let areaCellParameters = getCellParameters(areaCell);
            if (areaCellParameters.open !== true) {
              openEmptyCells(areaCell);
            }
          }
        }
      }
    }
  }
};
const toggleFlag = async cell => {
  // const audio = new Audio(soundFlag);
  // audio.play();
  // await playAudio('flag');
  // GRID_PARAMS.isPlayingAudio = false;
  // pauseAudio();
  (0,_audio__WEBPACK_IMPORTED_MODULE_6__.playCurrentAudio)('flag');
  if (cell.classList.contains('cell--flag')) {
    if ((0,_app_header__WEBPACK_IMPORTED_MODULE_2__.increaseCurrentFlag)()) {
      cell.classList.remove('cell--flag');
    }
  } else {
    if ((0,_app_header__WEBPACK_IMPORTED_MODULE_2__.decreaseCurrentFlag)()) {
      cell.classList.add('cell--flag');
    }
  }
  if (cell.dataset.mode === 'bomb') {
    _app_params__WEBPACK_IMPORTED_MODULE_1__.GRID_PARAMS.foundBombs++;

    // if (GRID_PARAMS.foundBombs === GRID_PARAMS.numBombs) {
    //   cell.dispatchEvent(new CustomEvent('gamewin', {
    //     bubbles: true,
    //     detail: getCellParameters(cell)
    //   }));
    // }
  }
};

/***/ }),

/***/ "./src/modules/element-creator.js":
/*!****************************************!*\
  !*** ./src/modules/element-creator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHtmlElement": () => (/* binding */ createHtmlElement)
/* harmony export */ });
const createHtmlElement = (tagName, className) => {
  if (typeof tagName !== "string" && tagName instanceof String || typeof className !== "string" && className instanceof String) {
    throw new Error('tagName or className is not a string!');
  }
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
};

/***/ }),

/***/ "./src/modules/grid.js":
/*!*****************************!*\
  !*** ./src/modules/grid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrid": () => (/* binding */ createGrid)
/* harmony export */ });
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-creator */ "./src/modules/element-creator.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/modules/cell.js");
/* harmony import */ var _app_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-params */ "./src/modules/app-params.js");
/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-header */ "./src/modules/app-header.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio */ "./src/modules/audio.js");





const createGrid = () => {
  generateGrid();
  createHtmlGrid();
};
const generateGrid = () => {
  const bombsArr = addBombs();
  const bombs2DArr = convertTo2DArray(bombsArr, _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.numCells);
  _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.bombsArr = bombsArr;
  _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.gridArr = calculateNumbers(bombs2DArr);
};
const addBombs = () => {
  let bombsArr = [];
  let totalBombs = _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.numBombs;
  for (let i = 0; i < _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.totalNumCells; i++) {
    if (i <= totalBombs - 1) {
      bombsArr.push('x');
    } else {
      bombsArr.push(0);
    }
  }
  bombsArr = shuffleRandomArray(bombsArr);
  return bombsArr;
};
const shuffleRandomArray = array => {
  let resultArr = [];
  resultArr.push(...array);
  for (let i = resultArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [resultArr[i], resultArr[j]] = [resultArr[j], resultArr[i]];
  }
  return resultArr;
};
const convertTo2DArray = (sourceArr, numElements) => {
  return sourceArr.reduce((prev, __, i, arr) => {
    if (!(i % numElements)) return prev.concat([arr.slice(i, i + numElements)]);
    return prev;
  }, []);
};
const calculateNumbers = bombs2DArr => {
  const resultArr = [];
  const numCells = _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.numCells;
  resultArr.push(...bombs2DArr);
  for (let i = 0; i < numCells; i++) {
    for (let j = 0; j < numCells; j++) {
      const currentValue = resultArr[i][j];
      if (currentValue !== 'x') continue;
      const areaIndexes = (0,_cell__WEBPACK_IMPORTED_MODULE_1__.calculateAreaIndexes)(i, j);
      for (let key in areaIndexes) {
        let currentI = areaIndexes[key][0];
        let currentJ = areaIndexes[key][1];
        if (currentI !== -1 && currentJ !== -1) {
          if (resultArr[currentI][currentJ] !== 'x') resultArr[currentI][currentJ] += 1;
        }
        ;
      }
    }
  }
  return resultArr;
};
const createHtmlGrid = () => {
  const gridHtml = (0,_element_creator__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('div', 'grid');
  const gridArr = _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.gridArr;
  let idCell = 0;
  gridArr.forEach((row, i) => {
    row.forEach((cell, j) => {
      const newCell = (0,_cell__WEBPACK_IMPORTED_MODULE_1__.createCell)(idCell, i, j, cell);
      idCell++;
      _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.cellsArr.push(newCell);
      gridHtml.append(newCell);
    });
  });
  const clickGrid = e => {
    e.stopPropagation();
    const activeElement = e.target;
    if (activeElement !== gridHtml) {
      const activeCell = activeElement.closest('.cell');
      if (activeCell) {
        if (!_app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.isFirstClick) {
          _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.isFirstClick = true;
          gridHtml.dispatchEvent(new CustomEvent('firstclick', {
            bubbles: true,
            detail: 'first click'
          }));
          if (activeCell.dataset.mode === 'bomb') {
            setBombInNewPlace(activeCell);
          }
        }
        if (activeCell.dataset.open !== 'true' && !activeCell.classList.contains('cell--flag')) {
          (0,_app_header__WEBPACK_IMPORTED_MODULE_3__.addNumMoves)();
          if (activeCell.dataset.mode !== 'bomb') {
            (0,_audio__WEBPACK_IMPORTED_MODULE_4__.playCurrentAudio)('open');
          }
        }
        (0,_cell__WEBPACK_IMPORTED_MODULE_1__.openEmptyCells)(activeCell);
      }
    }
  };
  gridHtml.addEventListener('click', clickGrid);
  const rightClickGrid = e => {
    e.preventDefault();
    const activeElement = e.target;
    if (activeElement !== gridHtml) {
      const activeCell = activeElement.closest('.cell');
      if (activeCell) {
        if (!_app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.isFirstClick) {
          _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.isFirstClick = true;
          gridHtml.dispatchEvent(new CustomEvent('firstclick', {
            bubbles: true,
            detail: 'first click'
          }));
          if (activeCell.dataset.mode === 'bomb') {
            setBombInNewPlace(activeCell);
          }
        }
        if (activeCell.dataset.open !== 'true') {
          (0,_cell__WEBPACK_IMPORTED_MODULE_1__.toggleFlag)(activeCell);
        }
      }
    }
  };
  gridHtml.addEventListener('contextmenu', rightClickGrid);
  _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.gridHtml = gridHtml;
};
const setBombInNewPlace = cell => {
  const cellParameters = (0,_cell__WEBPACK_IMPORTED_MODULE_1__.getCellParameters)(cell);
  const cellId = cellParameters.id;
  let isPlaced = false;
  let currentI = 0;
  while (!isPlaced || currentI === _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.totalNumCells - 1) {
    const currentCellValue = _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.bombsArr[currentI];
    if (currentI !== cellId && currentCellValue !== 'x') {
      _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.bombsArr[currentI] = 'x';
      isPlaced = true;
    }
    currentI++;
  }
  _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.bombsArr[cellId] = 0;
  const bombs2DArr = convertTo2DArray(_app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.bombsArr, _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.numCells);
  const newGridArr = calculateNumbers(bombs2DArr);
  _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.gridArr = newGridArr;
  overwriteCellsArr();
};
const overwriteCellsArr = () => {
  _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.gridArr.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      const currentIndex = Number(rowIndex + '' + columnIndex);
      const currentCell = _app_params__WEBPACK_IMPORTED_MODULE_2__.GRID_PARAMS.cellsArr[currentIndex];
      (0,_cell__WEBPACK_IMPORTED_MODULE_1__.setCellValue)(currentCell, value);
    });
  });
};

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODAL_TEXT": () => (/* binding */ MODAL_TEXT),
/* harmony export */   "createModal": () => (/* binding */ createModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _app_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-params */ "./src/modules/app-params.js");
/* harmony import */ var _element_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-creator */ "./src/modules/element-creator.js");
/* harmony import */ var _img_cat_loss_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/cat-loss.svg */ "./src/img/cat-loss.svg");
/* harmony import */ var _img_cat_win_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/cat-win.svg */ "./src/img/cat-win.svg");
/* harmony import */ var _app_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-timer */ "./src/modules/app-timer.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio */ "./src/modules/audio.js");






const MODAL_TEXT = {
  winBegin: "Hooray! You found all mines in ",
  winSeconds: ' seconds and ',
  winMovesEnd: ' moves!',
  loss: "Game over. Try again"
};
const createModal = () => {
  const modal = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-modal');
  modal.addEventListener('click', closeModal);
  const modalWindow = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-modal__window');
  const modalHeader = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-modal__header');
  const modalImgLoss = new Image();
  modalImgLoss.src = _img_cat_loss_svg__WEBPACK_IMPORTED_MODULE_2__;
  modalImgLoss.classList.add('app-modal__img');
  modalImgLoss.classList.add('app-modal__img--loss');
  modalImgLoss.alt = 'Сat shocked by defeat';
  const modalImgWin = new Image();
  modalImgWin.src = _img_cat_win_svg__WEBPACK_IMPORTED_MODULE_3__;
  modalImgWin.classList.add('app-modal__img');
  modalImgWin.classList.add('app-modal__img--win');
  modalImgWin.alt = 'Сat rejoices in victory';
  modalHeader.append(modalImgLoss);
  modalHeader.append(modalImgWin);
  const modalContent = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('div', 'app-modal__content');
  const modalText = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('p', 'app-modal__text');
  modalContent.append(modalText);
  const modalButton = (0,_element_creator__WEBPACK_IMPORTED_MODULE_1__.createHtmlElement)('button', 'app-modal__button');
  modalWindow.append(modalHeader);
  modalWindow.append(modalContent);
  modalWindow.append(modalButton);
  modal.append(modalWindow);
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModal = modal;
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModalButton = modalButton;
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModalText = modalText;
};
const openModal = type => {
  (0,_app_timer__WEBPACK_IMPORTED_MODULE_4__.pauseTimer)();
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModal.classList.remove('app-modal--win');
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModal.classList.remove('app-modal--loss');
  if (type === 'win') {
    (0,_audio__WEBPACK_IMPORTED_MODULE_5__.playCurrentAudio)('win');
    _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModal.classList.add('app-modal--win');
    _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModalText.innerText = MODAL_TEXT.winBegin + (0,_app_timer__WEBPACK_IMPORTED_MODULE_4__.convertTimeToString)() + MODAL_TEXT.winSeconds + _app_params__WEBPACK_IMPORTED_MODULE_0__.GRID_PARAMS.currentNumMoves + MODAL_TEXT.winMovesEnd;
  }
  if (type === 'loss') {
    (0,_audio__WEBPACK_IMPORTED_MODULE_5__.playCurrentAudio)('loss');
    _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModal.classList.add('app-modal--loss');
    _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModalText.innerText = MODAL_TEXT.loss;
  }
  _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModal.classList.add('app-modal--open');
};
const closeModal = e => {
  const modal = _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModal;
  if (e.target == modal || e.target == _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModalButton) {
    modal.className = '';
    modal.classList.add('app-modal');
    _app_params__WEBPACK_IMPORTED_MODULE_0__.APP_PARAMS.appModalText.innerText = '';
    modal.dispatchEvent(new CustomEvent('closemodal', {
      bubbles: true
    }));
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Regular.woff2 */ "./src/fonts/Montserrat-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Montserrat-Regular.woff */ "./src/fonts/Montserrat-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! img/cat-start.svg */ "./src/img/cat-start.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! img/flag-red.svg */ "./src/img/flag-red.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! img/bomb.svg */ "./src/img/bomb.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! img/close-button.svg */ "./src/img/close-button.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  -webkit-text-decoration: underline;\n  text-decoration: underline; /* 2 */\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n* {\n  box-sizing: border-box;\n}\n\n.app {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\";\n  background-color: #686868;\n}\n\n.app__container {\n  display: inline-block;\n  margin: 8vw auto;\n  background-color: #303130;\n  border-radius: 16px;\n}\n\n.app-footer,\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px 30px 20px;\n  border-bottom: 2px solid #5d5d5d;\n}\n\n.app-footer {\n  border: none;\n  border-top: 2px solid #5d5d5d;\n}\n\n.app-footer__item,\n.app-header__item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-footer__item {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.app-footer__text,\n.app-header__text {\n  color: #ffffff;\n  width: 45px;\n  text-align: center;\n}\n\n.app-footer__img,\n.app-header__img {\n  width: 40px;\n}\n\n.app-restart {\n  width: 50px;\n  height: 50px;\n  padding: 2px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #5d5d5d;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.app-audio {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n  grid-template-rows: repeat(10, 40px);\n  grid-gap: 2px;\n  gap: 2px;\n  padding: 30px;\n  margin: 0 auto;\n}\n\n.grid--inactive {\n  pointer-events: none;\n}\n\n.cell {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border-color: #5d5d5d;\n  background-color: #5d5d5d;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n\n.cell--active {\n  background-color: transparent;\n  border: none;\n}\n\n.cell:hover {\n  background-color: #818181;\n}\n\n.cell:active {\n  background-color: #d7d7d7;\n}\n\n.cell--bomb {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: 90%;\n  background-image: none;\n}\n\n.cell--flag {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: 90%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.cell--active.cell--bomb {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n.cell__number {\n  opacity: 0;\n  font-weight: 700;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.cell--active .cell__number {\n  opacity: 1;\n}\n\n.cell[data-value=\"1\"] .cell__number {\n  color: #47b2ff;\n}\n\n.cell[data-value=\"2\"] .cell__number {\n  color: #37ff4b;\n}\n\n.cell[data-value=\"3\"] .cell__number {\n  color: #ff4747;\n}\n\n.cell[data-value=\"4\"] .cell__number {\n  color: #ff38c7;\n}\n\n.cell[data-value=\"5\"] .cell__number {\n  color: #ff9438;\n}\n\n.cell[data-value=\"6\"] .cell__number {\n  color: #b09dff;\n}\n\n.cell[data-value=\"7\"] .cell__number {\n  color: #e671ff;\n}\n\n.cell[data-value=\"8\"] .cell__number {\n  color: #000000;\n}\n\n.app-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(41, 41, 41, 0.6);\n  opacity: 0;\n  z-index: 1000;\n  transform: translateX(-100%);\n  transition: opacity 0.3s;\n}\n\n.app-modal--open {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.app-modal__window {\n  position: absolute;\n  padding: 100px 40px;\n  display: flex;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 900px;\n  gap: 30px;\n  align-items: center;\n  background: #6b6b6b;\n  border-radius: 9px;\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n}\n\n.app-modal__button {\n  position: absolute;\n  top: -50px;\n  right: -41px;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ff38c7;\n  background-color: transparent;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.app-modal__button:hover {\n  background-color: #ff38c7;\n  border-color: #ff38c7;\n}\n\n.app-modal__button:active {\n  background-color: #551643;\n}\n\n.app-modal__text {\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n}\n\n.app-modal__img {\n  display: none;\n  border-radius: 9px 0px 0px 9px;\n  width: 300px;\n  height: 300px;\n}\n\n.app-modal--loss .app-modal__img--loss {\n  display: block;\n}\n\n.app-modal--win .app-modal__img--win {\n  display: block;\n}\n\n.app--light.app {\n  background-color: #c7c7c7;\n}\n\n.app--light .app__container {\n  background-color: #ececec;\n}\n\n.app--light .app-footer,\n.app--light .app-header {\n  border-bottom: 2px solid #c7c7c7;\n}\n\n.app--light .app-footer {\n  border: none;\n  border-top: 2px solid #c7c7c7;\n}\n\n.app--light .cell {\n  border-color: #d2d2d2;\n  background-color: #d2d2d2;\n}\n\n.app--light .cell.cell--active {\n  background-color: transparent;\n}\n\n.app--light .cell[data-value=\"2\"] .cell__number {\n  color: #3cca48;\n}\n\n.app--light .app-footer__text,\n.app--light .app-header__text {\n  color: #686868;\n}\n\n.app--light .app-modal {\n  background: rgba(196, 196, 196, 0.6);\n}\n\n.app--light .app-modal__window {\n  background: #ececec;\n}\n\n.app--light .app-modal__text {\n  color: #686868;\n}\n\n@media (max-width: 1030px) {\n  .app-modal__window {\n    max-width: 80vw;\n  }\n}\n@media (max-width: 768px) {\n  .app-modal__window {\n    padding: 20vw 10vw;\n  }\n  .app-modal__img {\n    width: 40vw;\n    height: 40vw;\n  }\n}", "",{"version":3,"sources":["webpack://./src/libs/normalize.css","webpack://./src/index.scss","webpack://./src/style/_fonts.scss","webpack://./src/style/_style.scss","webpack://./src/style/_var.scss"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;ACFF;;ADKA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;ACJF;;ADOA;;EAAA;AAIA;EACE,cAAA;ACLF;;ADQA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;ACNF;;ADSA;+EAAA;AAGA;;;EAAA;AAKA;EACE,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;ACRF;;ADWA;;;EAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;ACTF;;ADYA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;ACXF;;ADcA;;;EAAA;AAKA;EACE,mBAAA,EAAA,MAAA;EACA,kCAAA;EAAA,0BAAA,EAAA,MAAA;EACA,0BAAA;EAAA,yCAAA;UAAA,iCAAA,EAAA,MAAA;ACZF;;ADeA;;EAAA;AAIA;;EAEE,mBAAA;ACbF;;ADgBA;;;EAAA;AAKA;;;EAGE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;ACdF;;ADiBA;;EAAA;AAIA;EACE,cAAA;ACfF;;ADkBA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AChBF;;ADmBA;EACE,eAAA;AChBF;;ADmBA;EACE,WAAA;AChBF;;ADmBA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;AClBF;;ADqBA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;ACpBF;;ADuBA;;;EAAA;AAKA;QACQ,MAAA;EACN,iBAAA;ACrBF;;ADwBA;;;EAAA;AAKA;SACS,MAAA;EACP,oBAAA;ACtBF;;ADyBA;;EAAA;AAIA;;;;EAIE,0BAAA;ACvBF;;AD0BA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;ACxBF;;AD2BA;;EAAA;AAIA;;;;EAIE,8BAAA;ACzBF;;AD4BA;;EAAA;AAIA;EACE,8BAAA;AC1BF;;AD6BA;;;;;EAAA;AAOA;EACE,sBAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AC3BF;;AD8BA;;EAAA;AAIA;EACE,wBAAA;AC5BF;;AD+BA;;EAAA;AAIA;EACE,cAAA;AC7BF;;ADgCA;;;EAAA;AAKA;;EAEE,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AC9BF;;ADiCA;;EAAA;AAIA;;EAEE,YAAA;AC/BF;;ADkCA;;;EAAA;AAKA;EACE,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AChCF;;ADmCA;;EAAA;AAIA;EACE,wBAAA;ACjCF;;ADoCA;;;EAAA;AAKA;EACE,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AClCF;;ADqCA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;ACpCF;;ADuCA;;EAAA;AAIA;EACE,kBAAA;ACrCF;;ADwCA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;ACvCF;;AD0CA;;EAAA;AAIA;EACE,aAAA;ACxCF;;ACnTA;EACE,yBAAA;EACA,oHAAA;ADsTF;AExTA;EACE,sBAAA;AF0TF;;AEvTA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,yBCTK;AHmUP;;AEvTA;EACE,qBAAA;EACA,gBAAA;EACA,yBCdW;EDeX,mBAAA;AF0TF;;AEvTA;;EAEE,aAAA;EACA,8BAAA;EAEA,uBAAA;EACA,gCAAA;AFyTF;;AEtTA;EACE,YAAA;EACA,6BAAA;AFyTF;;AEtTA;;EAEE,aAAA;EACA,mBAAA;EACA,QAAA;AFyTF;;AEtTA;EACE,gBAAA;EACA,YAAA;EACA,eAAA;AFyTF;;AEtTA;;EAEE,cC9CU;ED+CV,WAAA;EACA,kBAAA;AFyTF;;AEtTA;;EAEE,WAAA;AFyTF;;AEtTA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,4BAAA;EACA,sBAAA;EACA,yBCvDK;EDwDL,yDAAA;AFyTF;;AEtTA;EACE,YAAA;EACA,gBAAA;EACA,eAAA;AFyTF;;AEtTA;EACE,aAAA;EACA,uCAAA;EACA,oCAAA;EACA,aAAA;EAAA,QAAA;EACA,aAAA;EACA,cAAA;AFyTF;;AEtTA;EACE,oBAAA;AFyTF;;AEtTA;EACE,qBAAA;EACA,WAAA;EACA,YAAA;EACA,qBClFK;EDmFL,yBCnFK;EDoFL,eAAA;EACA,oBAAA;AFyTF;;AEtTA;EACE,6BAAA;EACA,YAAA;AFyTF;;AEtTA;EACE,yBC7FU;AHsZZ;;AEtTA;EACE,yBChGa;AHyZf;;AEtTA;EAEE,4BAAA;EACA,4BAAA;EACA,oBAAA;EACA,sBAAA;AFwTF;;AErTA;EACE,4BAAA;EACA,4BAAA;EACA,oBAAA;EACA,yDAAA;AFwTF;;AErTA;EACE,yDAAA;AFwTF;;AErTA;EACE,UAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;AFwTF;;AErTA;EACE,UAAA;AFwTF;;AErTA;EACE,cC/HS;AHubX;;AErTA;EACE,cClIS;AH0bX;;AErTA;EACE,cCrIW;AH6bb;;AErTA;EACE,cCxIU;AHgcZ;;AErTA;EACE,cC3IU;AHmcZ;;AErTA;EACE,cC9IS;AHscX;;AErTA;EACE,cCjJW;AHycb;;AErTA;EACE,cCpJW;AH4cb;;AErTA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,iCAAA;EACA,UAAA;EACA,aAAA;EACA,4BAAA;EACA,wBAAA;AFwTF;;AErTA;EACE,wBAAA;EACA,UAAA;AFwTF;;AErTA;EACE,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;EACA,mBCrMW;EDsMX,kBAAA;EACA,oDAAA;AFwTF;;AErTA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,6BAAA;EACA,yDAAA;EACA,4BAAA;EACA,2BAAA;EACA,oBAAA;EACA,eAAA;EACA,oBAAA;AFwTF;;AErTA;EACE,yBC1NkB;ED2NlB,qBC3NkB;AHmhBpB;;AEtTA;EACE,yBC7NyB;AHshB3B;;AEtTA;EACE,eAAA;EACA,cCjOgB;EDkOhB,kBAAA;AFyTF;;AEtTA;EACE,aAAA;EACA,8BAAA;EACA,YAAA;EACA,aAAA;AFyTF;;AEvTA;EACE,cAAA;AF0TF;;AEvTA;EACE,cAAA;AF0TF;;AEtTA;EACE,yBAAA;AFyTF;;AEvTA;EACE,yBAAA;AF0TF;;AExTA;;EAEE,gCAAA;AF2TF;;AEzTA;EACE,YAAA;EACA,6BAAA;AF4TF;;AEzTA;EACE,qBAAA;EACA,yBAAA;AF4TF;;AE1TA;EACE,6BAAA;AF6TF;;AE1TA;EACE,cAAA;AF6TF;;AE1TA;;EAEE,cAAA;AF6TF;;AE1TA;EACE,oCAAA;AF6TF;;AE1TA;EACE,mBAAA;AF6TF;;AE1TA;EACE,cAAA;AF6TF;;AE1TA;EACE;IACE,eAAA;EF6TF;AACF;AE1TA;EACE;IACE,kBAAA;EF4TF;EE1TA;IACE,WAAA;IACA,YAAA;EF4TF;AACF","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: \"Montserrat\";\n  src: url(\"fonts/Montserrat-Regular.woff2\") format(\"woff2\"), url(\"fonts/Montserrat-Regular.woff\") format(\"woff\");\n}\n* {\n  box-sizing: border-box;\n}\n\n.app {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Montserrat\";\n  background-color: #686868;\n}\n\n.app__container {\n  display: inline-block;\n  margin: 8vw auto;\n  background-color: #303130;\n  border-radius: 16px;\n}\n\n.app-footer,\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px 30px 20px;\n  border-bottom: 2px solid #5d5d5d;\n}\n\n.app-footer {\n  border: none;\n  border-top: 2px solid #5d5d5d;\n}\n\n.app-footer__item,\n.app-header__item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-footer__item {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.app-footer__text,\n.app-header__text {\n  color: #ffffff;\n  width: 45px;\n  text-align: center;\n}\n\n.app-footer__img,\n.app-header__img {\n  width: 40px;\n}\n\n.app-restart {\n  width: 50px;\n  height: 50px;\n  padding: 2px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #5d5d5d;\n  background-image: url(\"img/cat-start.svg\");\n}\n\n.app-audio {\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n  grid-template-rows: repeat(10, 40px);\n  gap: 2px;\n  padding: 30px;\n  margin: 0 auto;\n}\n\n.grid--inactive {\n  pointer-events: none;\n}\n\n.cell {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border-color: #5d5d5d;\n  background-color: #5d5d5d;\n  cursor: pointer;\n  transition: all 0.1s;\n}\n\n.cell--active {\n  background-color: transparent;\n  border: none;\n}\n\n.cell:hover {\n  background-color: #818181;\n}\n\n.cell:active {\n  background-color: #d7d7d7;\n}\n\n.cell--bomb {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: 90%;\n  background-image: none;\n}\n\n.cell--flag {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: 90%;\n  background-image: url(\"img/flag-red.svg\");\n}\n\n.cell--active.cell--bomb {\n  background-image: url(\"img/bomb.svg\");\n}\n\n.cell__number {\n  opacity: 0;\n  font-weight: 700;\n  user-select: none;\n}\n\n.cell--active .cell__number {\n  opacity: 1;\n}\n\n.cell[data-value=\"1\"] .cell__number {\n  color: #47b2ff;\n}\n\n.cell[data-value=\"2\"] .cell__number {\n  color: #37ff4b;\n}\n\n.cell[data-value=\"3\"] .cell__number {\n  color: #ff4747;\n}\n\n.cell[data-value=\"4\"] .cell__number {\n  color: #ff38c7;\n}\n\n.cell[data-value=\"5\"] .cell__number {\n  color: #ff9438;\n}\n\n.cell[data-value=\"6\"] .cell__number {\n  color: #b09dff;\n}\n\n.cell[data-value=\"7\"] .cell__number {\n  color: #e671ff;\n}\n\n.cell[data-value=\"8\"] .cell__number {\n  color: #000000;\n}\n\n.app-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(41, 41, 41, 0.6);\n  opacity: 0;\n  z-index: 1000;\n  transform: translateX(-100%);\n  transition: opacity 0.3s;\n}\n\n.app-modal--open {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.app-modal__window {\n  position: absolute;\n  padding: 100px 40px;\n  display: flex;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 900px;\n  gap: 30px;\n  align-items: center;\n  background: #6b6b6b;\n  border-radius: 9px;\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\n}\n\n.app-modal__button {\n  position: absolute;\n  top: -50px;\n  right: -41px;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #ff38c7;\n  background-color: transparent;\n  background-image: url(img/close-button.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.app-modal__button:hover {\n  background-color: #ff38c7;\n  border-color: #ff38c7;\n}\n\n.app-modal__button:active {\n  background-color: #551643;\n}\n\n.app-modal__text {\n  font-size: 20px;\n  color: #ffffff;\n  text-align: center;\n}\n\n.app-modal__img {\n  display: none;\n  border-radius: 9px 0px 0px 9px;\n  width: 300px;\n  height: 300px;\n}\n\n.app-modal--loss .app-modal__img--loss {\n  display: block;\n}\n\n.app-modal--win .app-modal__img--win {\n  display: block;\n}\n\n.app--light.app {\n  background-color: #c7c7c7;\n}\n\n.app--light .app__container {\n  background-color: #ececec;\n}\n\n.app--light .app-footer,\n.app--light .app-header {\n  border-bottom: 2px solid #c7c7c7;\n}\n\n.app--light .app-footer {\n  border: none;\n  border-top: 2px solid #c7c7c7;\n}\n\n.app--light .cell {\n  border-color: #d2d2d2;\n  background-color: #d2d2d2;\n}\n\n.app--light .cell.cell--active {\n  background-color: transparent;\n}\n\n.app--light .cell[data-value=\"2\"] .cell__number {\n  color: #3cca48;\n}\n\n.app--light .app-footer__text,\n.app--light .app-header__text {\n  color: #686868;\n}\n\n.app--light .app-modal {\n  background: rgba(196, 196, 196, 0.6);\n}\n\n.app--light .app-modal__window {\n  background: #ececec;\n}\n\n.app--light .app-modal__text {\n  color: #686868;\n}\n\n@media (max-width: 1030px) {\n  .app-modal__window {\n    max-width: 80vw;\n  }\n}\n@media (max-width: 768px) {\n  .app-modal__window {\n    padding: 20vw 10vw;\n  }\n  .app-modal__img {\n    width: 40vw;\n    height: 40vw;\n  }\n}","@font-face {\r\n  font-family: 'Montserrat';\r\n  src: url('fonts/Montserrat-Regular.woff2') format('woff2'),\r\n       url('fonts/Montserrat-Regular.woff') format('woff');\r\n}","* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.app { \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Montserrat';\r\n  background-color: $back;\r\n}\r\n\r\n.app__container {\r\n  display: inline-block;\r\n  margin: 8vw auto;\r\n  background-color: $back-field;\r\n  border-radius: 16px;\r\n}\r\n\r\n.app-footer,\r\n.app-header{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  \r\n  padding: 30px 30px 20px;\r\n  border-bottom: 2px solid #5d5d5d;\r\n}\r\n\r\n.app-footer {\r\n  border: none;\r\n  border-top: 2px solid #5d5d5d;\r\n}\r\n\r\n.app-footer__item,\r\n.app-header__item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.app-footer__item {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.app-footer__text,\r\n.app-header__text {\r\n  color: $app-white;\r\n  width: 45px;\r\n  text-align: center;\r\n}\r\n\r\n.app-footer__img,\r\n.app-header__img {\r\n  width: 40px;\r\n}\r\n\r\n.app-restart {\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 2px;\r\n  cursor: pointer;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-color: $cell;\r\n  background-image: url('img/cat-start.svg');\r\n}\r\n\r\n.app-audio {\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(10,40px);\r\n  grid-template-rows: repeat(10,40px);\r\n  gap: 2px;\r\n  padding: 30px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.grid--inactive {\r\n  pointer-events: none;\r\n}\r\n\r\n.cell {\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-color: $cell;\r\n  background-color: $cell;\r\n  cursor: pointer;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.cell--active {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.cell:hover {\r\n  background-color: $cell-hell;\r\n}\r\n\r\n.cell:active {\r\n  background-color: $cell-clicked;\r\n}\r\n\r\n.cell--bomb {\r\n  // background-color: white;\r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n  background-size: 90%;\r\n  background-image: none;\r\n}\r\n\r\n.cell--flag { \r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n  background-size: 90%;\r\n  background-image: url('img/flag-red.svg');\r\n}\r\n\r\n.cell--active.cell--bomb{\r\n  background-image: url('img/bomb.svg');\r\n}\r\n\r\n.cell__number {\r\n  opacity: 0;\r\n  font-weight: 700;\r\n  user-select: none;\r\n}\r\n\r\n.cell--active .cell__number {\r\n  opacity: 1;\r\n}\r\n\r\n.cell[data-value='1'] .cell__number {\r\n  color: $cell-one;\r\n}\r\n\r\n.cell[data-value='2'] .cell__number {\r\n  color: $cell-two;\r\n}\r\n\r\n.cell[data-value='3'] .cell__number {\r\n  color: $cell-three;\r\n}\r\n\r\n.cell[data-value='4'] .cell__number {\r\n  color: $cell-four;\r\n}\r\n\r\n.cell[data-value='5'] .cell__number {\r\n  color: $cell-five;\r\n}\r\n\r\n.cell[data-value='6'] .cell__number {\r\n  color: $cell-six;\r\n}\r\n\r\n.cell[data-value='7'] .cell__number {\r\n  color: $cell-seven;\r\n}\r\n\r\n.cell[data-value='8'] .cell__number {\r\n  color: $cell-eight;\r\n}\r\n\r\n.app-modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(41, 41, 41, 0.6);\r\n  opacity: 0;\r\n  z-index: 1000;\r\n  transform: translateX(-100%);\r\n  transition: opacity 0.3s;\r\n}\r\n\r\n.app-modal--open {\r\n  transform: translateX(0);\r\n  opacity: 1;\r\n}\r\n\r\n.app-modal__window {\r\n  position: absolute;\r\n  padding: 100px 40px;;\r\n  display: flex;\r\n  flex-direction: column;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  max-width: 900px;\r\n  gap: 30px;\r\n  align-items: center;\r\n  background: $back-modal;\r\n  border-radius: 9px;\r\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\r\n}\r\n\r\n.app-modal__button {\r\n  position: absolute;\r\n  top: -50px;\r\n  right: -41px;\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 2px solid $back-modal-button;\r\n  background-color: transparent;\r\n  background-image: url(img/close-button.svg);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border-radius: 100px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.app-modal__button:hover {\r\n  background-color: $back-modal-button;\r\n  border-color: $back-modal-button;\r\n}\r\n.app-modal__button:active {\r\n  background-color: $back-modal-button-active;\r\n}\r\n\r\n.app-modal__text {\r\n  font-size: 20px;\r\n  color: $back-modal-text;\r\n  text-align: center;\r\n}\r\n\r\n.app-modal__img {\r\n  display: none;\r\n  border-radius: 9px 0px 0px 9px;\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n.app-modal--loss .app-modal__img--loss {\r\n  display: block;\r\n}\r\n\r\n.app-modal--win .app-modal__img--win {\r\n  display: block;\r\n}\r\n\r\n// light mode\r\n.app--light.app {\r\n  background-color: #c7c7c7;\r\n}\r\n.app--light .app__container {\r\n  background-color: #ececec;\r\n}\r\n.app--light .app-footer,\r\n.app--light .app-header {\r\n  border-bottom: 2px solid #c7c7c7;\r\n}\r\n.app--light .app-footer {\r\n  border: none;\r\n  border-top: 2px solid #c7c7c7;\r\n}\r\n\r\n.app--light .cell {\r\n  border-color: #d2d2d2;\r\n  background-color: #d2d2d2;\r\n}\r\n.app--light .cell.cell--active {\r\n  background-color: transparent;\r\n}\r\n\r\n.app--light .cell[data-value=\"2\"] .cell__number {\r\n  color: #3cca48;\r\n}\r\n\r\n.app--light .app-footer__text, \r\n.app--light .app-header__text {\r\n  color: #686868;\r\n}\r\n\r\n.app--light .app-modal {\r\n  background: rgb(196 196 196 / 60%);\r\n}\r\n\r\n.app--light .app-modal__window {\r\n  background: #ececec;\r\n}\r\n\r\n.app--light .app-modal__text {\r\n  color: #686868;\r\n}\r\n\r\n@media (max-width: 1030px) {\r\n  .app-modal__window {\r\n    max-width: 80vw;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .app-modal__window {\r\n    padding: 20vw 10vw;\r\n  }\r\n  .app-modal__img {\r\n    width: 40vw;\r\n    height: 40vw;\r\n  }\r\n}","$back: #686868;\r\n$back-field: #303130;\r\n$app-white: #ffffff;\r\n\r\n$back-modal-light: #fafafa;\r\n$back-modal: #6b6b6b;\r\n$back-modal-button: #ff38c7;\r\n$back-modal-button-active: #551643;\r\n$back-modal-text: #ffffff;\r\n\r\n$cell: #5d5d5d;\r\n$cell-hell: #818181;\r\n$cell-clicked: #d7d7d7;\r\n\r\n$cell-one: #47b2ff;\r\n$cell-two: #37ff4b;\r\n$cell-three: #ff4747;\r\n$cell-four: #ff38c7;\r\n$cell-five: #ff9438;\r\n$cell-six: #b09dff;\r\n$cell-seven: #e671ff;\r\n$cell-eight: #000000;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon.svg */ "./src/img/favicon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon.png */ "./src/img/favicon.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/svg+xml\">\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"image/png\">\r\n  <title>Minesweeper</title>\r\n</head>\r\n<body class=\"app\">\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/bomb.svg":
/*!**************************!*\
  !*** ./src/img/bomb.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bomb.svg";

/***/ }),

/***/ "./src/img/cat-loss.svg":
/*!******************************!*\
  !*** ./src/img/cat-loss.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cat-loss.svg";

/***/ }),

/***/ "./src/img/cat-start.svg":
/*!*******************************!*\
  !*** ./src/img/cat-start.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cat-start.svg";

/***/ }),

/***/ "./src/img/cat-win.svg":
/*!*****************************!*\
  !*** ./src/img/cat-win.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cat-win.svg";

/***/ }),

/***/ "./src/img/close-button.svg":
/*!**********************************!*\
  !*** ./src/img/close-button.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/close-button.svg";

/***/ }),

/***/ "./src/img/favicon.png":
/*!*****************************!*\
  !*** ./src/img/favicon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.png";

/***/ }),

/***/ "./src/img/favicon.svg":
/*!*****************************!*\
  !*** ./src/img/favicon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon.svg";

/***/ }),

/***/ "./src/img/flag-red.svg":
/*!******************************!*\
  !*** ./src/img/flag-red.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/flag-red.svg";

/***/ }),

/***/ "./src/img/mode-dark.svg":
/*!*******************************!*\
  !*** ./src/img/mode-dark.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/mode-dark.svg";

/***/ }),

/***/ "./src/img/mode-light.svg":
/*!********************************!*\
  !*** ./src/img/mode-light.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/mode-light.svg";

/***/ }),

/***/ "./src/img/sound-off-light.svg":
/*!*************************************!*\
  !*** ./src/img/sound-off-light.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sound-off-light.svg";

/***/ }),

/***/ "./src/img/sound-off.svg":
/*!*******************************!*\
  !*** ./src/img/sound-off.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sound-off.svg";

/***/ }),

/***/ "./src/img/sound-on-light.svg":
/*!************************************!*\
  !*** ./src/img/sound-on-light.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sound-on-light.svg";

/***/ }),

/***/ "./src/img/sound-on.svg":
/*!******************************!*\
  !*** ./src/img/sound-on.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sound-on.svg";

/***/ }),

/***/ "./src/img/step.svg":
/*!**************************!*\
  !*** ./src/img/step.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/step.svg";

/***/ }),

/***/ "./src/img/time.svg":
/*!**************************!*\
  !*** ./src/img/time.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/time.svg";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.woff";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.woff2":
/*!********************************************!*\
  !*** ./src/fonts/Montserrat-Regular.woff2 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Montserrat-Regular.woff2";

/***/ }),

/***/ "./src/sounds/bomb.wav":
/*!*****************************!*\
  !*** ./src/sounds/bomb.wav ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sounds/bomb.wav";

/***/ }),

/***/ "./src/sounds/flag.wav":
/*!*****************************!*\
  !*** ./src/sounds/flag.wav ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sounds/flag.wav";

/***/ }),

/***/ "./src/sounds/game-over.wav":
/*!**********************************!*\
  !*** ./src/sounds/game-over.wav ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sounds/game-over.wav";

/***/ }),

/***/ "./src/sounds/game-win.wav":
/*!*********************************!*\
  !*** ./src/sounds/game-win.wav ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sounds/game-win.wav";

/***/ }),

/***/ "./src/sounds/open.wav":
/*!*****************************!*\
  !*** ./src/sounds/open.wav ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/sounds/open.wav";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app */ "./src/modules/app.js");
/* harmony import */ var _modules_app_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/app-params */ "./src/modules/app-params.js");
/* harmony import */ var _modules_app_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/app-timer */ "./src/modules/app-timer.js");





let mainApp = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.startApp)();
mainApp.addEventListener('restartapp', e => {
  console.log('restart');
  (0,_modules_app_timer__WEBPACK_IMPORTED_MODULE_4__.stopTimer)();
  (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.destroyApp)();
  console.log(_modules_app_params__WEBPACK_IMPORTED_MODULE_3__.GRID_PARAMS);
  mainApp = undefined;
  mainApp = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.startApp)();
});
})();

/******/ })()
;
//# sourceMappingURL=main.747e243b4b708225c1ed.js.map