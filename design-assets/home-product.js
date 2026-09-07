import {createPhoneArtwork} from './phone-artwork.js?v=20260907-clean-screen';
import {defaults,defaultFaceSettings} from './model.js?v=20260906-centered-device';
import {copies} from './copy.js?v=20260906-centered-device';
import {setupDevice} from './device.js?v=20260907-optional-control';
const device=document.querySelector('#hero-device');
const phone=document.querySelector('#hero-phone');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const deviceView=setupDevice(device,null,reduced);
const labels={
 ja:['表示モード','シンプル','イラスト'],
 en:['Display mode','Simple','Illustrated'],
 ko:['표시 모드','심플','일러스트'],
 de:['Anzeigemodus','Schlicht','Illustriert'],
 'zh-Hant':['顯示模式','簡約','插畫'],
 fr:['Mode d’affichage','Simple','Illustré'],
 es:['Modo de visualización','Simple','Ilustrado'],
 it:['Modalità di visualizzazione','Semplice','Illustrato']
};
const presets=[
 {body:'classic',face:'smile',style:'simple'},
 {body:'classic',face:'smile',style:'illustration'}
];
let selected=1;
function localize(){
 const lang=document.documentElement.lang;
 const words=labels[lang]||labels.en;
 const t=key=>(copies[lang]||copies.en)[key]||copies.en[key]||key;
 deviceView.localize(t);
 document.querySelector('.hero-presets').setAttribute('aria-label',words[0]);
 document.querySelectorAll('.hero-presets button').forEach((button,i)=>{button.textContent=words[i+1];button.setAttribute('aria-label',words[i+1]);});
 render();
}
function render(){
 const state={...defaults,...defaultFaceSettings.smile,motion:false,...presets[selected]};
 phone.innerHTML=createPhoneArtwork(state,{showDeviceIndicators:false,appText:key=>copies.en[key]||key,text:key=>copies.en[key]||key}).render();
 document.querySelectorAll('.hero-presets button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===selected)));
}
presets.forEach((preset,i)=>{
 const button=document.createElement('button');button.type='button';
 button.addEventListener('click',()=>{selected=i;render();});
 document.querySelector('.hero-presets').append(button);
});
document.querySelector('.hero-presets').hidden=false;
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
