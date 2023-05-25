import soundWin from "../sounds/game-win.wav";
import soundLoss from "../sounds/game-over.wav";

import soundBomb from "../sounds/bomb.wav";
import soundFlag from "../sounds/flag.wav";
import soundOpen from "../sounds/open.wav";
import { APP_PARAMS, GRID_PARAMS } from "./app-params";

export const createAudio = () => {
  APP_PARAMS.appAudio = new Audio();

}

export const playCurrentAudio = (type) => {
  switch (type) {
    case 'flag':
      GRID_PARAMS.audioType = soundFlag;
      break;
    case 'bomb': 
    GRID_PARAMS.audioType = soundBomb;
      break;
    case 'win':
      GRID_PARAMS.audioType = soundWin;
      break;
    case 'loss':
      GRID_PARAMS.audioType = soundLoss;
      break;
    default:
      GRID_PARAMS.audioType = soundOpen;
  }
  playAudio();
}

export const pauseAudio = () => {
  if (!APP_PARAMS.appAudio.paused && GRID_PARAMS.isPlayingAudio) {
    APP_PARAMS.appAudio.pause();
  }
}

const playAudio = () => {
  APP_PARAMS.appAudio.src = GRID_PARAMS.audioType;
  APP_PARAMS.appAudio.currentTime = 0;
  APP_PARAMS.appAudio.play();
}
