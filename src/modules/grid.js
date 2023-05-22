import { createHtmlElement } from "./element-creator";
import { createCell, openCell, getCellParameters, calculateAreaIndexes } from "./cell"; 
import { GRID_PARAMS } from "./app-params";

export const createGrid = () => {
  generateGrid();
  const gridHtml = createHtmlGrid();
  
  GRID_PARAMS.gridHtml = gridHtml;
}

const generateGrid = () => {
  const bombsArr = addBombs();
  
  console.log(bombsArr);
  GRID_PARAMS.gridArr = calculateNumbers(bombsArr);
}

const addBombs = () => {
  let bombsArr = [];
  let bombs2DArr = [];
  let totalBombs = GRID_PARAMS.numBombs;

  for (let i = 0; i < GRID_PARAMS.totalNumCells; i++) {
    if (i <= totalBombs -1) {
      bombsArr.push('x');
    } else {
      bombsArr.push(0);
    }
  }

  bombsArr = shuffleRandomArray(bombsArr);
  bombs2DArr = convertTo2DArray(bombsArr, GRID_PARAMS.numCells);
  return bombs2DArr;
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

  const arrGrid = GRID_PARAMS.gridArr;
  let idCell = 0;
  arrGrid.forEach( (row, i) => {

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
        openEmptyCells(activeCell);
      }
    }
  }
  gridHtml.addEventListener('click', clickGrid);

  return gridHtml;
}

const openEmptyCells = (activeCell) => {
  const activeCellParameters = getCellParameters(activeCell);
  const areaIndexes = calculateAreaIndexes(activeCellParameters.row, activeCellParameters.column);

  if ((activeCellParameters.mode === 'number') || (activeCellParameters.mode === 'bomb')) {
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
