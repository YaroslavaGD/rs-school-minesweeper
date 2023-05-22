import { APP_PARAMS, GRID_PARAMS } from "./app-params";

export const startTimer = () => {
  GRID_PARAMS.timer = setInterval(updateTimer, 1000);
}

export const pauseTimer = () => {
  clearInterval(GRID_PARAMS.timer);
}

export const stopTimer = () => {
  clearInterval(GRID_PARAMS.timer);
  GRID_PARAMS.totalTime.minutes = 0;
  GRID_PARAMS.totalTime.seconds = 0;

  APP_PARAMS.appTimer.innerText = '00:00';
}

export const convertTimeToString = () => {
  const strMinutes = GRID_PARAMS.totalTime.minutes.toString().padStart(2, '0');
  const strSeconds = GRID_PARAMS.totalTime.seconds.toString().padStart(2, '0');

  return `${strMinutes}:${strSeconds}`;
}

const updateTimer = () => {
  GRID_PARAMS.totalTime.seconds++;

  if (GRID_PARAMS.totalTime.seconds === 60) {
    GRID_PARAMS.totalTime.minutes++;
    GRID_PARAMS.totalTime.seconds = 0;
  }

  APP_PARAMS.appTimer.innerText = convertTimeToString();
}

