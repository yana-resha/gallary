// таб для кнопок со странами


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__tab-btn',).forEach(function(tabBtn) {
        tabBtn.addEventListener('click', function(event) {
            const way = event.currentTarget.dataset.way


            document.querySelectorAll('.catalog__for-change-lang').forEach(function(tabContent){
                tabContent.classList.remove('lang-active')
            })


            document.querySelector(`[data-country="${way}"]`).classList.add('lang-active')


            $( ".lang-active .accordion" ).accordion("refresh")

            
            // добавить удалить классы для кнопок со странами
            
            
            document.querySelectorAll('.catalog__tab-btn').forEach(function(tabBtn) {tabBtn.classList.remove('tab-click')});
            event.currentTarget.classList.add('tab-click')

            document.querySelector('.lang-active .tab-content').classList.add('tab-content-active');

            let activePath = document.querySelector('.lang-active .tab-content-active').dataset.target;

            document.querySelector(`.lang-active .accord-list-btn[data-path="${activePath}"]`).classList.add('for-active-btn');

        
        })
    })
})





// таб для кнопок художников в аккордеоне 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accord-list-btn',).forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            const path = e.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function(tab){
                tab.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

            // для добавления классов кнопкам в аккордеоне с художниками
            document.querySelectorAll('.accord-list-btn').forEach(function(tab) {tab.classList.remove('for-active-btn')});
            e.currentTarget.classList.add('for-active-btn')
            // $('.tab-content-active .accordion').accordion('refresh')


        })
    })
})










