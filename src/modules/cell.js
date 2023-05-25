import { createHtmlElement } from "./element-creator";
import { GRID_PARAMS } from "./app-params";
import { increaseCurrentFlag, decreaseCurrentFlag } from "./app-header";
import soundFlag from "../sounds/flag.wav";
import soundOpen from "../sounds/open.wav";
import soundBomb from "../sounds/bomb.wav";
import {playCurrentAudio } from "./audio";

export const  createCell = (id, rowIndex, columnIndex, value) => {
  const buttonCell = createHtmlElement('button', 'cell');
  const number = createHtmlElement('span', 'cell__number');

  buttonCell.dataset.id = id;
  buttonCell.dataset.row = rowIndex;
  buttonCell.dataset.column = columnIndex;
  buttonCell.dataset.value = value;
  buttonCell.dataset.open = false;

  switch (value) {
    case 'x' :
      buttonCell.classList.add('cell--bomb');
      buttonCell.dataset.mode = 'bomb';
      break;
    case 0 :
      buttonCell.dataset.mode = 'empty';
      break;
    default:
      buttonCell.dataset.mode = 'number';
      number.innerText = value;
  }
    
  buttonCell.append(number);
  return buttonCell;
};

export const setCellValue = (cell, value) => {
  const number = cell.querySelector('.cell__number');

  cell.classList.remove('cell--bomb');
  number.innerText = '';
  
  cell.dataset.value = value;
  switch (value) {
    case 'x' :
      cell.classList.add('cell--bomb');
      cell.dataset.mode = 'bomb';
      break;
    case 0 :
      cell.dataset.mode = 'empty';
      break;
    default:
      cell.dataset.mode = 'number';
      number.innerText = value;
  }
}

export const getCellParameters = (cell) => {
  return {
    id: cell.dataset.id,
    row: cell.dataset.row,
    column: cell.dataset.column,
    mode: cell.dataset.mode,
    open: (cell.dataset.open === 'true'),
    hasFlag: cell.classList.contains('cell--flag'),
  }
}

export const calculateAreaIndexes = (currentRow, currentColumn) => {
  let row = currentRow;
  let column = currentColumn;
  if ((typeof row) === 'string') row = Number(row);
  if ((typeof column) === 'string') column = Number(column);

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
    if ((newRow < 0) || (newRow >= GRID_PARAMS.numCells)) newRow = -1;
    if ((newColumn < 0) || (newColumn >= GRID_PARAMS.numCells)) newColumn = -1;

    cellAreaIndexes[key][0] = newRow;
    cellAreaIndexes[key][1] = newColumn;
  }

  return cellAreaIndexes;
}

export const openCell = async (cell, isOpen) => {
  if (!cell.classList.contains('cell--flag')) {
    cell.classList.add('cell--active');
    cell.classList.remove('cell--flag');
    
    if (((cell.dataset.mode === 'empty') || (cell.dataset.mode === 'number')) && 
        (cell.dataset.isOpen !== true)) {
          // playCurrentAudio('open');

          // audio.src = soundOpen;
          // audio.play();
          GRID_PARAMS.numEmptyCells--;
          // console.log(GRID_PARAMS.numEmptyCells);
    } 
    
    if ((cell.dataset.mode === 'bomb') && (isOpen === true)) {
      // audio.src = soundBomb;
      // audio.play();
      playCurrentAudio('bomb');
      cell.dispatchEvent(new CustomEvent('gameover', {
        bubbles: true,
        detail: getCellParameters(cell)
      }));
    } else if (GRID_PARAMS.numEmptyCells === 0) {
      cell.dispatchEvent(new CustomEvent('gamewin', {
        bubbles: true,
        detail: getCellParameters(cell)
      }));
    }
    cell.dataset.open = isOpen;
  }
}

export const openEmptyCells = (activeCell) => {
  const activeCellParameters = getCellParameters(activeCell);
  const areaIndexes = calculateAreaIndexes(activeCellParameters.row, activeCellParameters.column);
  if (!activeCell.classList.contains('cell--active')) {
    if ((activeCellParameters.mode === 'number') || 
        (activeCellParameters.mode === 'bomb') || 
        (activeCellParameters.hasFlag)) {
      openCell(activeCell, true);
    } else if (activeCellParameters.mode === 'empty') {
      
      if (activeCellParameters.open !== true) {
        openCell(activeCell, true);
        for (let key in areaIndexes) {
          let rowAreaCell = areaIndexes[key][0];
          let columnAreaCell = areaIndexes[key][1];
    
          // проверка что такие индексы существуют
          if ((rowAreaCell !== -1) && (columnAreaCell !== -1)) {
            let indexAreaCell = Number(rowAreaCell + "" + columnAreaCell);
            let areaCell = GRID_PARAMS.cellsArr[indexAreaCell];
            let areaCellParameters = getCellParameters(areaCell);
    
            if ((areaCellParameters.open !== true)) {
              openEmptyCells(areaCell);
            }
          }
        }
      }
    }
  }
}


export const toggleFlag = async (cell) => {
  // const audio = new Audio(soundFlag);
  // audio.play();
  // await playAudio('flag');
  // GRID_PARAMS.isPlayingAudio = false;
  // pauseAudio();
  playCurrentAudio('flag');
  if (cell.classList.contains('cell--flag')) {
    if (increaseCurrentFlag()) {
      cell.classList.remove('cell--flag');
    }
  } else {
    if (decreaseCurrentFlag()) {
      cell.classList.add('cell--flag');
    }
  }

  if (cell.dataset.mode === 'bomb') {
    GRID_PARAMS.foundBombs++;

    // if (GRID_PARAMS.foundBombs === GRID_PARAMS.numBombs) {
    //   cell.dispatchEvent(new CustomEvent('gamewin', {
    //     bubbles: true,
    //     detail: getCellParameters(cell)
    //   }));
    // }
  }
}