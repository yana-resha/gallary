(() => {
    const checkBtn = document.querySelector('.js-check-heading');
    
    checkBtn.addEventListener('click', function () {
        this.classList.toggle('is-active');
    });
})();
