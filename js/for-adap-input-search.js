// document.getElementById('blablabla').style.display = 'none';

// function blablabla() {
//   document.getElementById('blablabla').style.display = 'block';
// }

// 1024

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('for-search').addEventListener('click',
    function() {
        document.getElementById('search-block').classList.add('seach-style')
        document.getElementById('search').classList.toggle('open-search')
    })
});


window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('for-search-768').addEventListener('click',
    function() {
        
        document.getElementById('for-input-768').classList.add('header__add-input')
        document.getElementById('search-block-768').classList.add('seach-style')
        document.getElementById('close').classList.add('for-close-btn')
        document.getElementById('burger').classList.add('header__close-input')
        document.getElementById('logo').classList.add('header__close-input')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('close').addEventListener('click',
    function() {
        document.getElementById('for-input-768').classList.remove('header__add-input')
        document.getElementById('close').classList.remove('for-close-btn')
        document.getElementById('burger').classList.remove('header__close-input')
        document.getElementById('logo').classList.remove('header__close-input')
        document.getElementById('search-block-768').classList.remove('seach-style')
    })
});


