import { GRID_PARAMS } from "./app-params";
import { createGrid } from './grid';


export const createApp = () => {
  const app = document.querySelector('.app');
  
  const appMain = document.createElement('main');
  appMain.classList.add('app__container');


  const grid = createGrid();
  // console.log("======= MATRIX =======");
  // console.log(GRID_PARAMS.gridArr);
  appMain.append(grid);

  app.append(appMain);
}