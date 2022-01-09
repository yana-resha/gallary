const button = document.querySelectorAll('.drop-btn');
const drop = document.querySelectorAll('.dropdown')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    button.forEach(el => {el.classList.remove(('.drop-btn--active'))});
    e.currentTarget.classList.add('.drop-btn--active');
    drop.forEach(el => {el.classList.remove(('dropdown--active'))})
    e.currentTarget.closest('li').querySelector('.dropdown').classList.toggle('dropdown--active');
  });
});

document.addEventListener('click', (e) => {
  // console.log(e.target)
  if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('drop-btn')) {
    button.forEach(el => {el.classList.remove(('.drop-btn--active'))});
    drop.forEach(el => {el.classList.remove(('dropdown--active'))})
  }
});