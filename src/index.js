import './index.html';
import './index.scss';
import {GRID_PARAMS, createGrid} from './modules/grid';
// import createGrid from './modules/grid';

createGrid();


console.log("======= MATRIX =======");
console.log(GRID_PARAMS.gridArr);
