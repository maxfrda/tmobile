const icons = document.getElementsByClassName('minus');
const dropdown = document.getElementById('extras-dropdown');
const plusMinus = document.getElementById('plus-minus');
const minus = '<i class="fas fa-minus fa-2x"></i>';
const plus = '<i class="fas fa-plus fa-2x"></i>';

function setListeners(item) {
  item.addEventListener('click', () => {
    const icon = item;
    icon.parentNode.style.display = 'none';
  });
}
[...icons].forEach(setListeners);

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
