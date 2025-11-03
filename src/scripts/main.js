'use strict';

const populationValues = [...document.querySelectorAll('.population')].map(
  (el) => Number(el.textContent.split(',').join('')),
);

const sum = populationValues.reduce((acc, val) => acc + val, 0);
const average = Math.round(sum / populationValues.length);

document.querySelector('.total-population').textContent =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
