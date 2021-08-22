document.getElementById("article-3").onclick=function(){window.open("file:///home/mag/dev/lang/web/test/content/3-linux-rabota-s-katalogami-i-faylami-chast'-pervaya.html","_self")};
document.getElementById("Man").onclick=function(){window.open("https://www.gnu.org/software/coreutils/manual/coreutils.pdf","_self")};
document.getElementById("Donat-footer-d").onclick=function(){window.open("https://sobe.ru/na/qa","_blank")};
document.getElementById("Dream-footer-d").onclick=function(){window.open("https://sobe.ru/na/na_me4tu_noutbuk_vmsi","_blank")};
document.getElementById("Question-footer-d").onclick=function(){window.open("https://sobe.ru/na/vopros_q12x","_blank")};
document.getElementById("Telegram-footer-d").onclick=function(){window.open("https://msngr.link/tg/malloc_ru","_blank")};
document.getElementById("Youtube-footer-d").onclick=function(){window.open("https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw","_blank")};
document.getElementById("Topmail-footer-d").onclick=function(){window.open("https://top.mail.ru/jump?from=3211268","_blank")};
document.getElementById("Payeer-footer-d").onclick=function(){window.open("https://payeer.com/04184305","_blank")};

document.getElementById("Donat-footer-m").onclick=function(){window.open("https://sobe.ru/na/qa","_blank")};
document.getElementById("Dream-footer-m").onclick=function(){window.open("https://sobe.ru/na/na_me4tu_noutbuk_vmsi","_blank")};
document.getElementById("Question-footer-m").onclick=function(){window.open("https://sobe.ru/na/vopros_q12x","_blank")};
document.getElementById("Telegram-footer-m").onclick=function(){window.open("https://msngr.link/tg/malloc_ru","_blank")};
document.getElementById("Youtube-footer-m").onclick=function(){window.open("https://www.youtube.com/channel/UCIAboMgPOBcFR9Y5GoUdoTw","_blank")};
document.getElementById("Topmail-footer-m").onclick=function(){window.open("https://top.mail.ru/jump?from=3211268","_blank")};
document.getElementById("Payeer-footer-m").onclick=function(){window.open("https://payeer.com/04184305","_blank")};

document.getElementById("AD-payeer").onclick=function(){window.open("https://payeer.com/04184305","_blank")};

var mySidebar=document.getElementById("mySidebar"),overlayBg=document.getElementById("myOverlay");function malloc_open(){"block"===mySidebar.style.display?(mySidebar.style.display="none",overlayBg.style.display="none"):(mySidebar.style.display="block",overlayBg.style.display="block")}function malloc_close(){mySidebar.style.display="none";overlayBg.style.display="none"}
function date(){var a=new Date;return" "+"Воскресенье Понедельник Вторник Среда Четверг Пятница Суббота".split(" ")[a.getDay()]+" "+a.getDate()+" "+"января февраля марта апреля мая июня июля августа сентября октября ноября декабря".split(" ")[a.getMonth()]+" "+a.getFullYear()+" "}setInterval(function(){document.getElementById("mydate").innerHTML=date()},0);function zero_first_format(a){10>a&&(a="0"+a);return a}
function time(){var a=new Date,b=zero_first_format(a.getHours()),c=zero_first_format(a.getMinutes());a=zero_first_format(a.getSeconds());return" "+b+":"+c+":"+a+" "}setInterval(function(){document.getElementById("mytime").innerHTML=time()});
