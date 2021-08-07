(function(){
    const counter = document.querySelector('.main-text__counter-box');
    const input = counter.querySelector('.counter__input');


    counter.addEventListener('click', function(e){
        if(e.target.closest('.counter__increment')){
            if(isCorrectInput(input.value)){
                ++input.value;
                input.dispatchEvent(new Event('input'));
            }
        }
        if(e.target.closest('.counter__decrement')){
            if(isCorrectInput(input.value) && +input.value > 1){
                --input.value;
                input.dispatchEvent(new Event('input'));
            }
        }
    })

    function isCorrectInput(value){
        return value > 1 || Number.isInteger(+value)
    }
})();