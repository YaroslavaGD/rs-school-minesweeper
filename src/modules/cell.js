export const createCell = () => {
  let buttonCell = document.createElement('button');
  buttonCell.classList.add('cell');
  
  let number = document.createElement('span');
  number.classList.add('cell__number');

  buttonCell.append(number);

  return buttonCell;
};