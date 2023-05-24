const DEFAULT_GRID_PARAMS = {
  seconds: 0,
  minutes: 0,
  timer: undefined,
  isFirstClick: false,
  stepsNum: 0,
  numBombs: 10,
  numFlags: 10,
  numCells: 10,
  numEmptyCells: 90,
  totalNumCells: 100,
  foundBombs: 0,
  gridArr: [],
  gridHtml: undefined,
  cellsArr: [],
}

export const GRID_PARAMS = {
  totalTime: {
    seconds: 0,
    minutes: 0,
    // hours: 0
  },
  timer: undefined,
  isFirstClick: false,
  stepsNum: 0,
  numBombs: 10,
  numFlags: 10,
  numCells: 10,
  numEmptyCells: 90,
  totalNumCells: 100,
  foundBombs: 0,
  gridArr: [],
  gridHtml: undefined,
  cellsArr: [],
}

export const APP_PARAMS = {
  appHeader: undefined,
  appTimer: undefined,
  appBombs: undefined,
  appFlags: undefined,
  appMoves: undefined,
  appRestart: undefined,

  appModal: undefined,
  appModalButton: undefined,
  appModalText: undefined,
}


export const clearGridParams = () => {
  GRID_PARAMS.totalTime.minutes = DEFAULT_GRID_PARAMS.minutes;
  GRID_PARAMS.totalTime.seconds = DEFAULT_GRID_PARAMS.seconds;

  GRID_PARAMS.timer = undefined;
  GRID_PARAMS.isFirstClick = false;
  GRID_PARAMS.stepsNum = 0;
  GRID_PARAMS.numBombs = DEFAULT_GRID_PARAMS.numBombs;
  GRID_PARAMS.numFlags = DEFAULT_GRID_PARAMS.numFlags;
  GRID_PARAMS.numCells = DEFAULT_GRID_PARAMS.numCells;
  GRID_PARAMS.numEmptyCells = DEFAULT_GRID_PARAMS.numEmptyCells;
  GRID_PARAMS.totalNumCells = DEFAULT_GRID_PARAMS.totalNumCells;
  GRID_PARAMS.foundBombs = 0;
  GRID_PARAMS.gridArr = [];
  GRID_PARAMS.gridHtml = '';
  GRID_PARAMS.cellsArr = [];
}

export const clearAppParams = () => {
  for (let key in APP_PARAMS) {
    APP_PARAMS[key] = '';
  }
}