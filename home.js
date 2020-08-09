const icons = document.getElementsByClassName('minus');

function setListeners(item) {
  item.addEventListener('click', () => {
    const icon = item;
    icon.parentNode.style.display = 'none';
  });
}
[...icons].forEach(setListeners);

// var testIcon = document.querySelector('.minus');

// testIcon.addEventListener('click', () =>{
//   testIcon.parentNode.style.display = 'none';
// })
