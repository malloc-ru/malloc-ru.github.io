function News(n,e,t){var o=document.querySelector(n),u=0,l=setInterval(function(){u==e.length&&clearInterval(l),o.value=e.substr(0,u),u+=2},t)}window.onload=function(){News("#news","Внесены изменения на странице \"Статьи\".\nТеперь изображение располагается слева от заголовка. Размер изображения сжат и уменьшен до 145х95.",50)};
