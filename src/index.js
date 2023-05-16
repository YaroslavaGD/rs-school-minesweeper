import './index.html';
import './index.scss';
import bomb from './img/mine-explosion-white.svg';
import {mult, sum} from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = bomb;
img.width = 400;

imgWrap.append(img);

console.log(mult(2,5));
console.log(sum(2,5));