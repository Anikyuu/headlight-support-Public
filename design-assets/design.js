import {bodies,retros,faces,defaults,defaultFaceSettings,rgb,palette,randomDesign} from './model.js?v=20260906-centered-device';
import {copies} from './copy.js?v=20260906-centered-device';
import {createPhoneArtwork} from './phone-artwork.js?v=20260907-gallery';
import {setupDevice} from './device.js?v=20260906-centered-device';
const $=id=>document.getElementById(id);
const languages=['ja','en','ko','de','zh-Hant','fr','es','it'];
const guess=navigator.language.startsWith('zh')?'zh-Hant':navigator.language.split('-')[0];
let saved;try{saved=localStorage.getItem('headlightLang');}catch{}
let lang=languages.includes(saved)?saved:languages.includes(guess)?guess:'en';
let state={...defaults};
let faceSettings=structuredClone(defaultFaceSettings);
const restoreFaceSettings=()=>Object.assign(state,faceSettings[state.face]);
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
const deviceView=setupDevice($('device'),$('view-angle'),reduceMotion);
const text=key=>(copies[lang]||copies.en)[key]||copies.en[key]||key;
// The simulated app UI is always English; page controls follow the visitor's language.
const appText=key=>copies.en[key]||key;
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function faceSVG(...args){return createPhoneArtwork(state).face(...args);}
function renderPhone(closed=false){
 document.querySelector('.phone-holder').style.background=palette(state).bg;
 $('phone').innerHTML=createPhoneArtwork(state,{text,appText}).render(closed);
}
function buttons(id,values,key,swatches=false){
 $(id).innerHTML=values.map(value=>{const name=Array.isArray(value)?value[0]:value;return `<button type="button" class="${swatches?'swatch':''}" data-key="${key}" data-value="${name}" aria-label="${escape(text(name))}" title="${escape(text(name))}" aria-pressed="${state[key]===name}" ${swatches?`style="--swatch:${rgb(value[1])};--check:${value[1].reduce((a,b)=>a+b,0)>1.6?'#222':'#fff'}"`:''}>${swatches?`<span aria-hidden="true">${state[key]===name?'✓':''}</span>`:escape(text(name))}</button>`;}).join('');
}
function renderControls(){
 buttons('style-choices',['illustration','simple'],'style');buttons('retro-choices',retros,'retroPalette',true);
 $('body-choices').innerHTML=bodies.map(body=>`<button class="body-choice" type="button" data-key="body" data-value="${body[0]}" aria-pressed="${state.body===body[0]&&!state.retro}"><span class="body-sample ${body[0]}" aria-hidden="true" style="--body-color:${rgb(body[1])};--body-ink:${rgb(body[2])}"><i></i></span><span>${escape(text(body[0]))}</span></button>`).join('');
 $('face-choices').innerHTML=faces.map(face=>`<button class="face-choice" type="button" data-key="face" data-value="${face}" data-size="${faceSettings[face].size}" data-spacing="${faceSettings[face].spacing}" data-height="${faceSettings[face].height}" aria-pressed="${state.face===face}"><svg viewBox="0 -70 420 170" aria-hidden="true">${faceSVG(face,1.25,78,false)}</svg><span>${escape(text(face))}</span></button>`).join('');
 for(const name of ['size','spacing','height'])$(name).value=state[name];
 $('retro').checked=state.retro;$('motion').checked=state.motion;
 $('face-field').hidden=state.style==='simple';$('retro-options').hidden=!state.retro;
 $('retro-value').textContent=text(state.retroPalette);
}
function refresh(){renderControls();renderPhone();}
function localize(){
 document.documentElement.lang=lang;$('language').value=lang;
 document.querySelectorAll('[data-copy]').forEach(el=>el.textContent=text(el.dataset.copy));
 deviceView.localize(text);
 document.title=text('title')+' | Head-Light';document.querySelector('meta[name=description]').content=text('intro');
 $('preview-region').setAttribute('aria-label',text('preview'));$('controls-region').setAttribute('aria-label',text('choose'));$('language').setAttribute('aria-label',text('language'));
 refresh();
}
document.querySelector('.controls').addEventListener('click',event=>{
 const button=event.target.closest('button[data-key]');if(!button)return;
 state[button.dataset.key]=button.dataset.value;if(button.dataset.key==='body')state.retro=false;
 if(button.dataset.key==='face')restoreFaceSettings();
 // Update selection without replacing the focused button.
 const focusKey=button.dataset.key,focusValue=button.dataset.value;
 refresh();document.querySelector(`[data-key="${focusKey}"][data-value="${focusValue}"]`).focus({preventScroll:true});
});
for(const key of ['size','spacing','height'])$(key).addEventListener('input',event=>{
 state[key]=Number(event.target.value);faceSettings[state.face][key]=state[key];
 document.querySelector(`[data-key="face"][data-value="${state.face}"]`).dataset[key]=state[key];
 renderPhone();
});
for(const key of ['retro','motion'])$(key).addEventListener('change',event=>{state[key]=event.target.checked;refresh();});
$('shuffle').addEventListener('click',()=>{state=randomDesign(state);restoreFaceSettings();deviceView.shuffle();refresh();});
$('reset').addEventListener('click',()=>{state={...defaults};faceSettings=structuredClone(defaultFaceSettings);deviceView.reset();refresh();});
$('language').addEventListener('change',event=>{lang=event.target.value;try{localStorage.setItem('headlightLang',lang);}catch{}localize();});
// One light timer, paused in background tabs and for reduced-motion users.
setInterval(()=>{if(document.hidden||reduceMotion.matches||!state.motion||state.style!=='illustration'||state.face==='asleep')return;renderPhone(true);setTimeout(()=>renderPhone(false),150);},4200);
localize();
