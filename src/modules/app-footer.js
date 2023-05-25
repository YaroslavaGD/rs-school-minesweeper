import { APP_PARAMS, GRID_PARAMS } from "./app-params";
import { createHtmlElement } from "./element-creator";

import imageSoundOn from "../img/sound-on.svg";
import imageSoundOnLight from "../img/sound-on-light.svg";
import imageSoundOff from "../img/sound-off.svg";
import imageSoundOffLight from "../img/sound-off-light.svg";

import imageModeLight from "../img/mode-light.svg";
import imageModeDark from "../img/mode-dark.svg";
import { createAudio } from "./audio";


export const createFooter = () => {
  const appFooter = createHtmlElement('div', 'app-footer');

  const appAudioButton = createAudioSwitch();
  const appModeButton = createModeSwitch();

  appFooter.append(appAudioButton);
  appFooter.append(appModeButton);

  APP_PARAMS.appFooter = appFooter;
  
}

const createAudioSwitch = () => {
  const audioButton = createHtmlElement('button', 'app-footer__item');
  audioButton.classList.add('app-audio');
  const audioImg = new Image();
  audioImg.src = GRID_PARAMS.isDark ? imageSoundOn: imageSoundOnLight;
  audioImg.alt = 'Audio switch';
  audioImg.classList.add('app-footer__img');

  audioButton.append(audioImg);

  createAudio();
  audioButton.addEventListener('click', (e) => {
    const img = audioButton.querySelector('.app-footer__img');
    if (GRID_PARAMS.isPlayingAudio) {
      GRID_PARAMS.isPlayingAudio = false;
      APP_PARAMS.appAudio.muted = true;
      img.src = GRID_PARAMS.isDark ? imageSoundOff: imageSoundOffLight;
    } else {
      GRID_PARAMS.isPlayingAudio = true;
      APP_PARAMS.appAudio.muted = false;
      img.src = GRID_PARAMS.isDark ? imageSoundOn : imageSoundOnLight;
    }
  });

  APP_PARAMS.appAudioButton = audioButton;
  return audioButton;
}

const createModeSwitch = () => {
  const modeButton = createHtmlElement('button', 'app-footer__item');
  modeButton.classList.add('app-mode');

  const modeImg = new Image();
  modeImg.src = imageModeDark;
  modeImg.alt = 'Mode switch';
  modeImg.classList.add('app-footer__img');

  modeButton.append(modeImg);

  modeButton.addEventListener('click', (e) => {
    const img = modeButton.querySelector('.app-footer__img');
    const app = document.querySelector('.app');
    const appAudioImg = APP_PARAMS.appAudioButton.querySelector('.app-footer__img');

    if (GRID_PARAMS.isDark) {
      GRID_PARAMS.isDark = false;
      img.src = imageModeLight;
      
      appAudioImg.src = GRID_PARAMS.isPlayingAudio ? imageSoundOnLight : imageSoundOffLight;
      app.classList.add('app--light');
      
      
    } else {
      GRID_PARAMS.isDark = true;
      img.src = imageModeDark;
      
      appAudioImg.src = GRID_PARAMS.isPlayingAudio ? imageSoundOn : imageSoundOff;
      app.classList.remove('app--light');
    }
  });

  return modeButton;
}