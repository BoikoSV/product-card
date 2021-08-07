(function(){
    const productCard = document.querySelector('.main-text');
    const products = []; //Тут будет массив сгенерированых товаров


    //Получить число в заданном диапазоне
    function random (min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //Получить цену после скидки
    function getAfterSale(price, sale){
        return Math.floor(price * ((100 - sale) / 100));
    }

    /* Конструктор создания одного товара (Один товар = одна фотография в карточке товара)
    *  все цены генерируються случайно
    */
    function Product(){
        this.basePrice = random(2000, 3000);  // Базовая цена относительно которой будут создаваться цены на разные размеры
        this.sale = random(5, 20);  //Размер базовой скидки
        this.size = {               //Цены по размерам
            s: this.basePrice,
            m: this.basePrice + 50,
            l: this.basePrice + 100,
            xl: this.basePrice + 150,
            xxl: this.basePrice + 200,
        },
        this.discountForMore = random(30, 50); //Скидка при покупке оптом
        this.bought = random(50, 100);          // Сколько купили единиц
        this.weHave = random(10, 100);          //Сколько осталось единиц 
    }

    //Создание ассортимента товаров
    for(let i = 0; i < 9; i++){
        products.push(new Product());
    }

    let currentProduct = products[0]; //Выбранный продукт (По умолчанию первый)
    let currentSize = currentProduct.size.s; //Выбранный размер
    let currentCount = 1;   //Выбранное количество
    let isAddToCard = false; //Добавлен ли в корзину
    let PriceWidthoutDiscont = currentSize * currentCount;


    //Вывести цену без скидки
    function showPriceWidthoutDiscont(){
        PriceWidthoutDiscont = currentSize * currentCount;
        productCard.querySelector('.main-text__price-old').innerText = PriceWidthoutDiscont;
    }
    showPriceWidthoutDiscont();

    //Вывести общую стоимость
    function showPriceWidthDiscont(){
        let widthDiscont;
        if(currentCount >= 10){
            widthDiscont = Math.floor(PriceWidthoutDiscont * ((100 - currentProduct.discountForMore) / 100));
        }else{
            widthDiscont = Math.floor(PriceWidthoutDiscont * ((100 - currentProduct.sale) / 100));
        }
        productCard.querySelector('.main-text__price-new').innerText = widthDiscont;
    }
    showPriceWidthDiscont();

    //Стоимость одного товара оптом
    function showPriceWidthBigDiscont(){
        let widthDiscont;
        widthDiscont = Math.floor(currentSize * ((100 - currentProduct.discountForMore) / 100));
        productCard.querySelector('.main-text__sale-size').innerText = widthDiscont;
    }
    showPriceWidthBigDiscont();

    //Вывести сколько осталось
    function showWeHave(){
        let weHave = currentProduct.weHave - currentCount;
        productCard.querySelector('.main-text__count-span').innerText = weHave;
    }
    showWeHave();

    //Показать сколько купили
    function showBought(){
        currentProduct.bought;
        productCard.querySelector('.main-text__about-count').innerText = `купили более ${currentProduct.bought}`;
    }
    showBought();

    //Установить выбранный товар
    let photoList = productCard.querySelectorAll('.delect-color__radio');
    photoList.forEach((photo, index) => {
        photo.addEventListener('input', function(){
            setProduct(index);
        })
    })

    function setProduct(index){
        currentProduct = products[index];
        currentSize = currentProduct.size.s;
        reloadAllData();
    }

    //Обновить данные на странице
    function reloadAllData(){
        showPriceWidthoutDiscont(); //Вывести цену без скидки
        showPriceWidthDiscont(); //Вывести общую стоимость
        showPriceWidthBigDiscont(); //вывести стоимость одного товара
        showWeHave(); //Сколько осталось
        showBought(); //Сколько купили
    }

    //Изменить количество заказанных товаров
    productCard.querySelector('.counter__input').addEventListener('input', function(){
        currentCount = this.value;
        reloadAllData();
    })

})();