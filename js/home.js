import firResPlus from './data.js';

const icons = document.getElementsByClassName('minus');
const dropdown = document.getElementById('extras-dropdown');
const plusMinus = document.getElementById('plus-minus');
const minus = '<i class="fas fa-minus fa-2x"></i>';
const plus = '<i class="fas fa-plus fa-2x"></i>';

function planListener(btn, col) {
  const button = btn;

  button.addEventListener('click', () => {
    const column = col;
    column.style.display = 'inline-block';
    button.style.display = 'none';
    flipPlans(dropdown);
  });
}

function minusListener(item) {
  item.addEventListener('click', () => {
    const icon = item;
    icon.parentNode.style.display = 'none';
  });
}
[...icons].forEach(minusListener);

plusMinus.addEventListener('click', () => {
  flipPlans(dropdown);
});

function flipPlans(item) {
  const element = item;
  if (element.style.display !== 'block') {
    element.style.display = 'block';
    plusMinus.innerHTML = minus;
  } else {
    element.style.display = 'none';
    plusMinus.innerHTML = plus;
  }
}

planListener(firResPlus.button, firResPlus.column);

function showPrices(number) {
  firResPlus.row.innerHTML = firResPlus.prices[`line${number}`];
}

showPrices(2);
