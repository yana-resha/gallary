window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click',
    function() {
        document.querySelector('#menu').classList.add('press')
    })

    document.querySelector('#btn-close').addEventListener('click',
    function() {
        document.querySelector('#menu').classList.remove('press')
    })
});


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search-mobile').addEventListener('click',
    function() {
        document.querySelector('#search-block-768').classList.add('open-search-mobile')
    })

    document.querySelector('#close').addEventListener('click',
    function() {
        document.querySelector('#search-block-768').classList.remove('open-search-mobile')
    })
})