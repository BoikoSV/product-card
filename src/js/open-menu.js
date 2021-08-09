(function(){
    const header = document.querySelector('.header');
    const menu = header.querySelector('.menu');
    const toggleBtn = header.querySelector('.menu-btn');

    toggleBtn.addEventListener('click', function(){
        toggleMenu();
    })

    function toggleMenu(){
        
        if(menu.classList.contains('menu--open')){
            header.classList.remove('header__shadow')
            toggleBtn.classList.remove('menu-btn--open');
            menu.classList.remove('menu__animation--open');
            menu.classList.add('menu__animation--close');
            setTimeout(() => {
                menu.classList.remove('menu--open');
            }, 500)
        }else{
            header.classList.add('header__shadow');
            toggleBtn.classList.add('menu-btn--open');
            menu.classList.add('menu--open');
            setTimeout(()=> {
                menu.classList.add('menu__animation--open');
                menu.classList.remove('menu__animation--close');
            }, 1);
        }
    }

})();