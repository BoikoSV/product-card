(function(){
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', function(e){
        if(e.target.closest('.sub-menu__item')){
            menu.querySelector('.sub-menu__title--active').classList.remove('sub-menu__title--active');
            menu.querySelector('.menu__title--active').classList.remove('menu__title--active');
            //Закрытие меню. Переписать в функцию и вынести отдельно
            const header = document.querySelector('.header');
            // const menu = header.querySelector('.menu');
            const toggleBtn = header.querySelector('.menu-btn');
                    document.body.classList.remove('scroll');
                    header.classList.remove('header__shadow')
                    toggleBtn.classList.remove('menu-btn--open');
                    menu.classList.remove('menu__animation--open');
                    menu.classList.add('menu__animation--close');
                    setTimeout(() => {
                        menu.classList.remove('menu--open');
                    }, 300)
        }
        if(e.target.closest('.sub-menu__title')){
            e.target.closest('.sub-menu__title').classList.toggle('sub-menu__title--active');
            return
        }
        if(e.target.classList.contains('menu__title--active')){
            e.target.classList.remove('menu__title--active');
            return
        }
        if(e.target.closest('.menu__title')){
            if(menu.querySelector('.menu__title--active')){
                menu.querySelector('.menu__title--active').classList.remove('menu__title--active');
            }
            e.target.closest('.menu__title').classList.add('menu__title--active');
        }
        
    })
})();