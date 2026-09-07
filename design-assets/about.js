const languages=['ja','en','ko','de','zh-Hant','fr','es','it'];
const titles={ja:'Head-Lightとは — 好きなものだけを残すメモ帳',en:'About Head-Light — A journal for everything you love',ko:'Head-Light 소개 — 좋아하는 것을 남기는 다이어리',de:'Über Head-Light — Ein Tagebuch für alles, was du liebst','zh-Hant':'關於 Head-Light — 留下喜愛事物的手帳',fr:'À propos de Head-Light — Un journal pour ce que vous aimez',es:'Sobre Head-Light — Un diario para lo que te gusta',it:'Cos’è Head-Light — Un diario per ciò che ami'};
const select=document.querySelector('#languageSelect');
function apply(lang){
 document.documentElement.lang=lang;document.documentElement.dataset.lang=lang;
 document.title=titles[lang];select.value=lang;
 document.querySelectorAll('img[data-alt-ja]').forEach(img=>{img.alt=img.getAttribute('data-alt-'+lang.toLowerCase())||img.dataset.altEn||img.dataset.altJa;});
 document.querySelectorAll('img[data-shot]').forEach(img=>{const suffix=lang==='ja'?'ja':'en';img.src='img/shots/'+img.dataset.shot+'_'+suffix+'.jpg?v=20260906-white';});
}
let saved;try{saved=localStorage.getItem('headlightLang');}catch{}
const guess=navigator.language.startsWith('zh')?'zh-Hant':navigator.language.split('-')[0];
const lang=languages.includes(saved)?saved:languages.includes(guess)?guess:'en';
HeadlightSiteLocalizations.install('index');
apply(lang);
select.addEventListener('change',()=>{try{localStorage.setItem('headlightLang',select.value);}catch{}apply(select.value);});
