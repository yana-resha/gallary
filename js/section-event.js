document.querySelectorAll('.event__btn').forEach(function(el) {
    el.addEventListener('click', function(event) {
        event.target.classList.toggle('off')
    })
})

$(function(){
    $('.event__btn').click(function(){
    $('.event__list').toggleClass('open');
    });
  });