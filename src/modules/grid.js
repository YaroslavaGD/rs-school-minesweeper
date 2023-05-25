import { createHtmlElement } from "./element-creator";
import { createCell, openEmptyCells, calculateAreaIndexes, toggleFlag, getCellParameters, setCellValue } from "./cell"; 
import { GRID_PARAMS } from "./app-params";
import { addNumMoves } from "./app-header";
import { playCurrentAudio } from "./audio";

export const createGrid = () => {
  generateGrid();
  createHtmlGrid();
}

const generateGrid = () => {
  const bombsArr = addBombs();
  const bombs2DArr = convertTo2DArray(bombsArr, GRID_PARAMS.numCells);
  
  GRID_PARAMS.bombsArr = bombsArr;

  GRID_PARAMS.gridArr = calculateNumbers(bombs2DArr);
}

const addBombs = () => {
  let bombsArr = [];
  let totalBombs = GRID_PARAMS.numBombs;

  for (let i = 0; i < GRID_PARAMS.totalNumCells; i++) {
    if (i <= totalBombs - 1) {
      bombsArr.push('x');
    } else {
      bombsArr.push(0);
    }
  }

  bombsArr = shuffleRandomArray(bombsArr);
  return bombsArr;
}

const shuffleRandomArray= (array) => {
  let resultArr = [];
  resultArr.push(...array);

  for (let i = resultArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [resultArr[i], resultArr[j]] = [resultArr[j], resultArr[i]]
  }

  return resultArr;
}

const convertTo2DArray = (sourceArr, numElements) => {
  return sourceArr.reduce((prev, __, i, arr) => {
    if (!(i % numElements)) return prev.concat([arr.slice(i, i + numElements)]);
    return prev;
  }, []);
}

const calculateNumbers = (bombs2DArr) => {
  const resultArr = [];
  const numCells = GRID_PARAMS.numCells;
  resultArr.push(...bombs2DArr);


  for (let i = 0; i < numCells; i++) {
    for (let j = 0; j < numCells; j++) {
      const currentValue = resultArr[i][j];

      if (currentValue !== 'x') continue;

      const areaIndexes = calculateAreaIndexes(i, j);

      for (let key in areaIndexes) {
        let currentI = areaIndexes[key][0];
        let currentJ = areaIndexes[key][1];

        if ((currentI !== -1) && 
            (currentJ !== -1)) {
          if (resultArr[currentI][currentJ] !== 'x')
            resultArr[currentI][currentJ] += 1;
        };  
      }
    }
  }
  return resultArr;
}

const createHtmlGrid = () => {
  const gridHtml = createHtmlElement('div', 'grid');

  const gridArr = GRID_PARAMS.gridArr;
  let idCell = 0;
  gridArr.forEach( (row, i) => {

    row.forEach( (cell, j) => {
      const newCell = createCell(idCell, i, j, cell);
      idCell++;
      GRID_PARAMS.cellsArr.push(newCell);
      gridHtml.append(newCell);
    });
  });

  const clickGrid = (e) => {
    e.stopPropagation();
    const activeElement = e.target;
    if (activeElement !== gridHtml) {
      const activeCell = activeElement.closest('.cell');
      if (activeCell) {
        
        if (!GRID_PARAMS.isFirstClick) {
          GRID_PARAMS.isFirstClick = true;
          gridHtml.dispatchEvent(new CustomEvent('firstclick', {
            bubbles: true,
            detail: 'first click'
          }));

          if (activeCell.dataset.mode === 'bomb') {
            setBombInNewPlace(activeCell);
          }
        }

        if ((activeCell.dataset.open !== 'true') && 
            (!activeCell.classList.contains('cell--flag'))) {
          addNumMoves();

          if (activeCell.dataset.mode !== 'bomb') {
            playCurrentAudio('open');
          }
        }

        openEmptyCells(activeCell);
      }
    }
  }
  gridHtml.addEventListener('click', clickGrid);
  
  const rightClickGrid = (e) => {
    e.preventDefault();
    const activeElement = e.target;
    if (activeElement !== gridHtml) {
      const activeCell = activeElement.closest('.cell');
      if (activeCell) {
        
        if (!GRID_PARAMS.isFirstClick) {
          GRID_PARAMS.isFirstClick = true;
          gridHtml.dispatchEvent(new CustomEvent('firstclick', {
            bubbles: true,
            detail: 'first click'
          }));

          if (activeCell.dataset.mode === 'bomb') {
            setBombInNewPlace(activeCell);
          }
        }

        if (activeCell.dataset.open !== 'true') {
          toggleFlag(activeCell);
        }
      }
    }
  }
  gridHtml.addEventListener('contextmenu', rightClickGrid);

  GRID_PARAMS.gridHtml = gridHtml;
}

const setBombInNewPlace = (cell) => {
  const cellParameters = getCellParameters(cell);
  const cellId = cellParameters.id;

  let isPlaced = false;
  let currentI = 0;

  while (!isPlaced || (currentI === GRID_PARAMS.totalNumCells - 1)) {

    const currentCellValue = GRID_PARAMS.bombsArr[currentI];

    if ((currentI !== cellId) && (currentCellValue !== 'x')) {
      GRID_PARAMS.bombsArr[currentI] = 'x';
      isPlaced = true;
    }
    currentI++;
  }
  GRID_PARAMS.bombsArr[cellId] = 0;

  const bombs2DArr = convertTo2DArray(GRID_PARAMS.bombsArr, GRID_PARAMS.numCells);
  const newGridArr = calculateNumbers(bombs2DArr);

  GRID_PARAMS.gridArr = newGridArr;
  overwriteCellsArr();
}

const overwriteCellsArr = () => {
  GRID_PARAMS.gridArr.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      const currentIndex = Number(rowIndex + '' + columnIndex);
      const currentCell = GRID_PARAMS.cellsArr[currentIndex];
      
      setCellValue(currentCell, value);
    })
  });
}
