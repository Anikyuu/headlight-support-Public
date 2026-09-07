// Keep one image element per story. Only the selected edition is requested.
const comics=[...document.querySelectorAll('img[data-comic-ja][data-comic-en]')];
function localizeComics(){
 const edition=document.documentElement.lang==='ja'?'ja':'en';
 for(const image of comics){
  const source=image.getAttribute(`data-comic-${edition}`);
  if(image.getAttribute('src')!==source)image.setAttribute('src',source);
 }
}
new MutationObserver(localizeComics).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
localizeComics();
