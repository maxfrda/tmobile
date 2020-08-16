import plans from './data.js';

const dropdown = document.getElementById('extras-dropdown');
const plusMinus = document.getElementById('plus-minus');
const minus = '<i class="fas fa-minus fa-2x"></i>';
const plus = '<i class="fas fa-plus fa-2x"></i>';

function planListener(btn, col, min) {
  const button = btn;
  minusListener(min, button);
  button.addEventListener('click', () => {
    const column = col;
    column.style.display = 'inline-block';
    button.style.display = 'none';
    flipElement(dropdown);
    flipPlus();
  });
}

function minusListener(item, button) {
  item.addEventListener('click', () => {
    const icon = item;
    icon.parentNode.style.display = 'none';
    flipElement(button);
  });
}

plusMinus.addEventListener('click', () => {
  flipElement(dropdown);
  flipPlus();
});

function flipElement(item) {
  const element = item;
  if (element.style.display !== 'block') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function flipPlus() {
  if (document.querySelector('.fa-plus')) {
    plusMinus.innerHTML = minus;
  } else {
    plusMinus.innerHTML = plus;
  }
}

function showPrices(number, plan) {
  const p = plan;
  p.row.innerHTML = p.prices[`line${number}`];
}

function sanitise(data) {
  const prices = data;
  Object.keys(prices).forEach((v) => {
    if (isNaN(prices[v])) {
      prices[v] = 'N/A';
    }
    return prices;
  });
}

plans.forEach((plan) => {
  let prices = sanitise(plan.prices);
  planListener(plan.button, plan.column, plan.minus);
  showPrices(1, plan);
});
