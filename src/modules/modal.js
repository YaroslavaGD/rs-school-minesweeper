import { APP_PARAMS } from "./app-params";
import { createHtmlElement } from "./element-creator";
import imageLoss from "../img/cat-loss.svg";
import imageWin from "../img/cat-win.svg";

export const MODAL_TEXT = {
  win: "Hooray! You found all mines in ## seconds and N moves!",
  loss: "Game over. Try again"
}

export const createModal = () => {
  const modal = createHtmlElement('div','app-modal');
  modal.addEventListener('click', closeModal);
  
  const modalWindow = createHtmlElement('div', 'app-modal__window');
  const modalHeader = createHtmlElement('div', 'app-modal__header');

  const modalImgLoss = new Image();
  modalImgLoss.src = imageLoss;
  modalImgLoss.classList.add('app-modal__img');
  modalImgLoss.classList.add('app-modal__img--loss');
  modalImgLoss.alt = 'Сat shocked by defeat';
  
  const modalImgWin = new Image();
  modalImgWin.src = imageWin;
  modalImgWin.classList.add('app-modal__img');
  modalImgWin.classList.add('app-modal__img--win');
  modalImgWin.alt = 'Сat rejoices in victory';
  
  modalHeader.append(modalImgLoss);
  modalHeader.append(modalImgWin);

  const modalContent = createHtmlElement('div', 'app-modal__content');
  
  const modalText = createHtmlElement('p', 'app-modal__text');

  modalContent.append(modalText);

  const modalButton = createHtmlElement('button', 'app-modal__button');
  
  modalWindow.append(modalHeader);
  modalWindow.append(modalContent);
  modalWindow.append(modalButton);
  
  modal.append(modalWindow);
  APP_PARAMS.appModal = modal;
  APP_PARAMS.appModalButton = modalButton;
  APP_PARAMS.appModalText = modalText;

}

export const openModal = (type) => {

  if (type === 'win') {
    APP_PARAMS.appModal.classList.add('app-modal--win');
    APP_PARAMS.appModalText.innerText = MODAL_TEXT.win;
  }
  
  if (type === 'loss') {
    APP_PARAMS.appModal.classList.add('app-modal--loss');
    APP_PARAMS.appModalText.innerText = MODAL_TEXT.loss;
  }

  APP_PARAMS.appModal.classList.add('app-modal--open');
}

const closeModal = (e) => {
  const modal = APP_PARAMS.appModal;
  
  if ((e.target == modal) || (e.target == APP_PARAMS.appModalButton)) {
    modal.className = '';
    modal.classList.add('app-modal');
    APP_PARAMS.appModalText.innerText = '';
  }
}