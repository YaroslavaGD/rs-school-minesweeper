import { createCell } from "./cell"; 

export const GRID_PARAMS = {
  numBombs: 10,
  numFlags: 10,
  numCells: 10,
  totalNumCells: 100,
  gridArr: [],
  gridHtml: []
}

export const createGrid = () => {
  generateGrid();

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

const calculateAreaIndexes = (currentRow, currentColumn) => {
  const bombsAreaIndexes = {
    left: [currentRow, currentColumn - 1],
    right: [currentRow, currentColumn + 1],
    top: [currentRow - 1, currentColumn],
    topLeft: [currentRow - 1, currentColumn - 1],
    topRight: [currentRow - 1, currentColumn + 1],
    bottom: [currentRow + 1, currentColumn],
    bottomLeft: [currentRow + 1, currentColumn - 1],
    bottomRight: [currentRow + 1, currentColumn + 1]
  };

  for (let key in bombsAreaIndexes) {
    let newRow = bombsAreaIndexes[key][0];
    let newColumn = bombsAreaIndexes[key][1];

    //-1 - incorrect value
    if ((newRow < 0) || (newRow >= GRID_PARAMS.numCells)) newRow = -1;
    if ((newColumn < 0) || (newColumn >= GRID_PARAMS.numCells)) newColumn = -1;

    bombsAreaIndexes[key][0] = newRow;
    bombsAreaIndexes[key][1] = newColumn;
  }

  return bombsAreaIndexes;
}