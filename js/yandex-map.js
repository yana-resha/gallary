// Функция ymaps.ready() будет вызвана, когда
          // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
          ymaps.ready(init);
          function init(){
              // Создание карты.
              var myMap = new ymaps.Map("map1", {
                  // Координаты центра карты.
                  // Порядок по умолчанию: «широта, долгота».
                  // Чтобы не определять координаты центра карты вручную,
                  // воспользуйтесь инструментом Определение координат.
                  center: [55.75846806898367,37.60108849999989],
                  // Уровень масштабирования. Допустимые значения:
                  // от 0 (весь мир) до 19.
                  zoom: 15, 
                  controls: ['smallMapDefaultSet']
                }, {
                    // Зададим ограниченную область прямоугольником, 
                    // примерно описывающим Санкт-Петербург.
                    // restrictMapArea: [
                        // [55.762672,37.600522],
                        // [55.76638,37.683356]
                    // ]
                });
              // Создание геообъекта с типом точка (метка).
          // var myGeoObject = new ymaps.GeoObject({
          //   geometry: {
          //   type: "Point", // тип геометрии - точка
          //   coordinates: [55.8, 37.8] // координаты точки
          //   }
          // });
          var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -42]
          });
          // Размещение геообъекта на карте.
          // myMap.geoObjects.add(myGeoObject);
          myMap.geoObjects.add(myPlacemark); 
        }