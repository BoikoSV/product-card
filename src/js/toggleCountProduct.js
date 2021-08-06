(function(){
    const counter = document.querySelector('.main-text__counter-box');
    const input = counter.querySelector('.counter__input');


    counter.addEventListener('click', function(e){
        if(e.target.closest('.counter__increment')){
            if(isCorrectInput(input.value)){
                ++input.value;
            }
        }
        if(e.target.closest('.counter__decrement')){
            if(isCorrectInput(input.value) && +input.value > 1){
                --input.value;
            }
        }
    })

    function isCorrectInput(value){
        return value > 1 || Number.isInteger(+value)
    }
})();