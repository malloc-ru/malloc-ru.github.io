function News(e,t,n){var o=document.querySelector(e),r=0,a=setInterval(function(){r==t.length&&clearInterval(a),o.value=t.substr(0,r),r+=3},n)}window.onload=function(){News("#news",'Событие!\nНа malloc.ru, вышла первая статья.\nОна называется - "Обновление системы на автомате при помощи chmod".',60)},document.getElementById("myTelegram-1").onclick=function(){window.open("https://msngr.link/tg/malloc_ru","_blank")},document.getElementById("myDonat-1").onclick=function(){window.open("https://sobe.ru/na/qa","_blank")},document.getElementById("myDream-1").onclick=function(){window.open("https://sobe.ru/na/na_me4tu_noutbuk_vmsi","_blank")},document.getElementById("myQuestion-1").onclick=function(){window.open("https://sobe.ru/na/vopros_q12x","_blank")};var mySidebar=document.getElementById("mySidebar"),overlayBg=document.getElementById("myOverlay");function malloc_open(){"block"===mySidebar.style.display?(mySidebar.style.display="none",overlayBg.style.display="none"):(mySidebar.style.display="block",overlayBg.style.display="block")}function malloc_close(){mySidebar.style.display="none",overlayBg.style.display="none"}function date(){var e=new Date,t=new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"),n=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");return" "+t[e.getDay()]+" "+e.getDate()+" "+n[e.getMonth()]+" "+e.getFullYear()+" "}function zero_first_format(e){return e<10&&(e="0"+e),e}function time(){var e=new Date;return" "+zero_first_format(e.getHours())+":"+zero_first_format(e.getMinutes())+":"+zero_first_format(e.getSeconds())+" "}setInterval(function(){document.getElementById("mydate").innerHTML=date()},0),setInterval(function(){document.getElementById("mytime").innerHTML=time()});var _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:"3211268",type:"pageView",start:(new Date).getTime()}),function(t,e,n){var o;t.getElementById(n)||((o=t.createElement("script")).type="text/javascript",o.async=!0,o.id=n,o.src="https://top-fwz1.mail.ru/js/code.js",n=function(){var e=t.getElementsByTagName("script")[0];e.parentNode.insertBefore(o,e)},"[object Opera]"==e.opera?t.addEventListener("DOMContentLoaded",n,!1):n())}(document,window,"topmailru-code");
