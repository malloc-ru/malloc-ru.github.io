function News(e,t,n){var o=document.querySelector(e),a=0,l=setInterval(function(){a==t.length&&clearInterval(l),o.value=t.substr(0,a),a+=3},n)}document.getElementById("literature-1").onclick=function(){window.open("https://help.ubuntu.ru/fullcircle/24/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B9","_blank")},document.getElementById("literature-2").onclick=function(){window.open("https://losst.ru/prava-dostupa-k-fajlam-v-linux","_blank")},document.getElementById("literature-3").onclick=function(){window.open("https://losst.ru/komanda-chmod-linux#%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0_chmod_Linux","_blank")},window.onload=function(){News("#news",'Событие!\nНа malloc.ru, вышла первая статья.\nОна называется - "Обновление системы на автомате при помощи chmod".',60)};var mySidebar=document.getElementById("mySidebar"),overlayBg=document.getElementById("myOverlay");function malloc_open(){"block"===mySidebar.style.display?(mySidebar.style.display="none",overlayBg.style.display="none"):(mySidebar.style.display="block",overlayBg.style.display="block")}function malloc_close(){mySidebar.style.display="none",overlayBg.style.display="none"}function date(){var e=new Date,t=new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"),n=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");return" "+t[e.getDay()]+" "+e.getDate()+" "+n[e.getMonth()]+" "+e.getFullYear()+" "}function zero_first_format(e){return e<10&&(e="0"+e),e}function time(){var e=new Date;return" "+zero_first_format(e.getHours())+":"+zero_first_format(e.getMinutes())+":"+zero_first_format(e.getSeconds())+" "}setInterval(function(){document.getElementById("mydate").innerHTML=date()},0),setInterval(function(){document.getElementById("mytime").innerHTML=time()}),$(function(){$("input").click(function(){$("#code")[0].select(),document.execCommand("copy"),$("#code").append(" "),$("#code").val().slice(0,-1)})});for(var acc=document.getElementsByClassName("malloc-accordion"),i=0;i<acc.length;i++)acc[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"});var _tmr=window._tmr||(window._tmr=[]);_tmr.push({id:"3211268",type:"pageView",start:(new Date).getTime()}),function(t,e,n){var o;t.getElementById(n)||((o=t.createElement("script")).type="text/javascript",o.async=!0,o.id=n,o.src="https://top-fwz1.mail.ru/js/code.js",n=function(){var e=t.getElementsByTagName("script")[0];e.parentNode.insertBefore(o,e)},"[object Opera]"==e.opera?t.addEventListener("DOMContentLoaded",n,!1):n())}(document,window,"topmailru-code");
