/* News */
function News(elem, text, speed) {
  // Обращаемся к элементу
  var element = document.querySelector(elem);

  // Устанавливаем начальную позицию
  var pos = 0,
  // Создаём интервал
      int = setInterval(function() {
        // Если позиция равна количеству символов в тексте, то удаляем интервал
        if(pos == text.length){
          clearInterval(int);
        };
        // Устанавливаем значение для textarea
        element.value = text.substr(0,pos); // Текст от начала до текущей позиции
        // Прибавляем +1 к позиции
        pos+=3;
      }, speed);
};
/* Текст для баннера */
window.onload = function() 
{
  News('#news', ' Совсем недавно, на просторах интернета, появился сайт Malloc.RU. На сайте будут размещаться статьи по информатике и программированию.\n Спросить или задать вопрос, можно в сайдбаре, кнопка "Вопрос".', 60);
};
