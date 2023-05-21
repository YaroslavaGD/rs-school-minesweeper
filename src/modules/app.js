import { GRID_PARAMS } from "./app-params";
import { createGrid } from './grid';


export const createApp = () => {
  const app = document.querySelector('.app');
  
  const appMain = document.createElement('main');
  appMain.classList.add('app__container');


  createGrid();
  // console.log("======= MATRIX =======");
  appMain.append(GRID_PARAMS.gridHtml);

  app.append(appMain);
}