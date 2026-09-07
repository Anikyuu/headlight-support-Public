import {createPhoneArtwork} from './phone-artwork.js?v=20260907-gallery';
import {defaults,defaultFaceSettings} from './model.js?v=20260906-centered-device';
import {copies} from './copy.js?v=20260906-centered-device';
import {setupDevice} from './device.js?v=20260906-centered-device';
const device=document.querySelector('#hero-device');
const phone=document.querySelector('#hero-phone');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const deviceView=setupDevice(device,document.querySelector('.hero-view-angle'),reduced);
const labels={
 ja:['見どころ','デザイン','AI Pro','ドラッグで回す · 色を選んで着せ替え','ホワイト','ブルー','イエロー','シンプル','レトロ'],
 en:['Explore','Design','AI Pro','Drag to rotate · Pick a look','White','Blue','Yellow','Simple','Retro'],
 ko:['주요 기능','디자인','AI Pro','드래그하여 회전 · 디자인 선택','화이트','블루','옐로','심플','레트로'],
 de:['Entdecken','Design','AI Pro','Zum Drehen ziehen · Design wählen','Weiß','Blau','Gelb','Schlicht','Retro'],
 'zh-Hant':['亮點','設計','AI Pro','拖曳旋轉 · 選擇外觀','白色','藍色','黃色','簡約','復古'],
 fr:['Découvrir','Design','AI Pro','Glissez pour tourner · Choisissez un style','Blanc','Bleu','Jaune','Simple','Rétro'],
 es:['Descubrir','Diseño','AI Pro','Arrastra para girar · Elige un estilo','Blanco','Azul','Amarillo','Simple','Retro'],
 it:['Scopri','Design','AI Pro','Trascina per ruotare · Scegli uno stile','Bianco','Blu','Giallo','Semplice','Rétro']
};
const presets=[
 {body:'classic',face:'smile',color:'#faf9f6'},
 {body:'vividBlue',face:'smile',color:'#447eda'},
 {body:'vividYellow',face:'smile',color:'#f9da54'},
 {body:'classic',style:'simple',color:'linear-gradient(90deg,#fafafa 50%,#bfc4c8 50%)'},
 {body:'classic',retro:true,retroPalette:'lcdGreen',color:'#adba88'}
];
let selected=0;
function localize(){
 const lang=document.documentElement.lang;
 const words=labels[lang]||labels.en;
 const t=key=>(copies[lang]||copies.en)[key]||copies.en[key]||key;
 deviceView.localize(t);
 document.querySelector('.hero-interaction-hint').textContent=words[3];
 document.querySelector('.hero-presets').setAttribute('aria-label',words[1]);
 document.querySelectorAll('.hero-presets button').forEach((button,i)=>{button.setAttribute('aria-label',words[i+4]);button.title=words[i+4];});
 document.querySelector('.product-nav-links').replaceChildren(...['collection','design-customization','pricing'].map((id,i)=>{const a=document.createElement('a');a.href='#'+id;a.textContent=words[i];return a;}));
 render();
}
function render(){
 const state={...defaults,...defaultFaceSettings.smile,motion:false,...presets[selected]};
 phone.innerHTML=createPhoneArtwork(state,{appText:key=>copies.en[key]||key,text:key=>copies.en[key]||key}).render();
 document.querySelectorAll('.hero-presets button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===selected)));
}
presets.forEach((preset,i)=>{
 const button=document.createElement('button');button.type='button';button.style.setProperty('--swatch',preset.color);
 button.addEventListener('click',()=>{selected=i;render();});
 document.querySelector('.hero-presets').append(button);
});
document.querySelector('.hero-product-controls').hidden=false;
new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
localize();
let visible=true;
const hero=document.querySelector('.hero');
const idle=()=>{hero.dataset.motionIdle=String(document.hidden||!visible);};
document.addEventListener('visibilitychange',idle);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;idle();}).observe(hero);
// The language installer uses the source order. Build disclosure panels only
// after it has cloned the translations, without changing that source contract.
function refineDetails(){
 const section=document.querySelector('#tools');
 const list=section.querySelector('.toolgroups');
 const link=section.querySelector('a[href*="tools"]');
 if(list&&link&&!list.closest('details')){
  const details=document.createElement('details');details.className='product-details';
  const summary=document.createElement('summary');
  [...link.childNodes].forEach(node=>summary.append(node.cloneNode(true)));
  list.before(details);details.append(summary,list);
 }
 const copy=document.querySelector('.strong-light-copy');
 if(copy&&!copy.querySelector('details')){
  const details=document.createElement('details');details.className='product-details research-details';
  const summary=document.createElement('summary');
  const captions={ja:'この考え方について',en:'Behind this idea',ko:'이 생각의 배경',de:'Der Gedanke dahinter','zh-Hant':'關於這個想法',fr:'L’idée derrière tout cela',es:'La idea detrás',it:'Il pensiero alla base'};
  for(const [lang,label] of Object.entries(captions)){const span=document.createElement('span');span.dataset.i18n=lang;span.dataset.staticLocalized='';span.textContent=label;summary.append(span);}
  details.append(summary);
  const paragraphs=[...copy.querySelectorAll(':scope > p')];
  paragraphs.filter((p,i)=>i>1&&!p.classList.contains('closing-copy')).forEach(p=>details.append(p));
  copy.append(details);
 }
}
if(document.documentElement.dataset.siteI18nInstalled)refineDetails();
else window.addEventListener('headlight-site-localizations-ready',refineDetails,{once:true});
