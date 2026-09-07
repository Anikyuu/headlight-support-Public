import {createPhoneArtwork} from './phone-artwork.js?v=20260907-clean-screen';
import {defaults,defaultFaceSettings,randomDesign,palette} from './model.js?v=20260906-centered-device';
import {copies} from './copy.js?v=20260906-centered-device';
import {setupDevice} from './device.js?v=20260907-optional-control';
const device=document.querySelector('#hero-device');
const phone=document.querySelector('#hero-phone');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const deviceView=setupDevice(device,null,reduced);
const dice=document.querySelector('.hero-dice');
const labels={
 ja:'サイコロでデザインを変える',en:'Roll the dice for a new design',
 ko:'주사위로 디자인 바꾸기',de:'Ein neues Design würfeln',
 'zh-Hant':'擲骰子換個設計',fr:'Lancer le dé pour changer de design',
 es:'Lanzar el dado para cambiar el diseño',it:'Lancia il dado per cambiare design'
};
function labelDice(){
 const label=labels[document.documentElement.lang]||labels.en;
 dice.setAttribute('aria-label',label);dice.title=label;
}
let state={...defaults,...defaultFaceSettings.smile};
let blinkTimeout;
let diceAnimation;
function localize(){
 const lang=document.documentElement.lang;
 const t=key=>(copies[lang]||copies.en)[key]||copies.en[key]||key;
 deviceView.localize(t);
 labelDice();
 render();
}
function render(closed=false){
 phone.closest('.phone-holder').style.background=palette(state).bg;
 phone.innerHTML=createPhoneArtwork({...state,motion:!reduced.matches},{appText:key=>copies.en[key]||key,text:key=>copies.en[key]||key}).render(closed);
}
dice.addEventListener('click',()=>{
 dice.classList.add('has-been-tried');
 clearTimeout(blinkTimeout);
 state=randomDesign(state);
 Object.assign(state,defaultFaceSettings[state.face]);
 render();deviceView.shuffle();
 diceAnimation?.cancel();
 if(!reduced.matches) diceAnimation=dice.querySelector('svg').animate([
  {transform:'rotate(0deg) scale(1)'},
  {transform:'rotate(-24deg) scale(.8)',offset:.2},
  {transform:'rotate(195deg) scale(1.12)',offset:.75},
  {transform:'rotate(180deg) scale(1)'}
 ],{duration:480,easing:'cubic-bezier(.2,.7,.3,1)'});
});
dice.hidden=false;
new IntersectionObserver(entries=>{dice.dataset.inView=String(entries[0].isIntersecting);}).observe(dice);
new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
reduced.addEventListener('change',()=>{diceAnimation?.cancel();clearTimeout(blinkTimeout);render();});
localize();
let visible=true;
const hero=document.querySelector('.hero');
const idle=()=>{hero.dataset.motionIdle=String(document.hidden||!visible);};
document.addEventListener('visibilitychange',idle);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;idle();}).observe(hero);
setInterval(()=>{
 if(document.hidden||!visible||reduced.matches||state.style!=='illustration'||state.face==='asleep')return;
 render(true);blinkTimeout=setTimeout(()=>render(),150);
},4200);
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
