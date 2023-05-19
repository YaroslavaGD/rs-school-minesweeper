export const createCell = (rowIndex, columnIndex, value) => {
  const buttonCell = document.createElement('button');
  buttonCell.classList.add('cell');

  buttonCell.dataset.row = rowIndex;
  buttonCell.dataset.column = columnIndex;
  buttonCell.dataset.value = value;


  const number = document.createElement('span');
  number.classList.add('cell__number');

  switch (value) {
    case 'x' :
      buttonCell.classList.add('cell--bomb');
      buttonCell.dataset.type = 'bomb';
      break;
    case 0 :
      buttonCell.dataset.type = 'empty';
      break;
    default:
      buttonCell.dataset.type = 'number';
      buttonCell.classList.add('cell--active');
      number.innerText = value;
  }
    
  buttonCell.append(number);
  return buttonCell;
};