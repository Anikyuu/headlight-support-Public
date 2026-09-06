import {bodies,retros,faces,defaults,defaultFaceSettings,rgb,palette,randomDesign} from './model.js?v=20260906-face-settings';
import {pixels} from './pixels.js';
import {copies} from './copy.js?v=20260906-face-settings';
import {mangaEye,bodyArtwork,mouthArtwork} from './artwork.js';
import {setupDevice} from './device.js?v=20260906-face-settings';
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
const iconPaths={
 mic:'M12 3a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3 M6 11v2a6 6 0 0 0 12 0v-2 M12 19v3 M8 22h8',
 plus:'M12 3v18 M3 12h18',arrow:'M12 19V5 M6 11l6-6 6 6',
 words:'M9 5h12 M9 10h12 M3 16h18 M3 21h14 M5 4H3v5h3V6H3',
 wave:'M4 10v4 M8 6v12 M12 3v18 M16 6v12 M20 9v6',
 book:'M12 5C8 1 3 2 2 3v17c3-2 7-2 10 1 3-3 7-3 10-1V3c-1-1-6-2-10 2v16',
 grid:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
 home:'M7 18v-6a5 5 0 0 1 10 0v6 M3 19h18 M12 1v2 M3 5l2 2 M21 5l-2 2 M1 12h2 M21 12h2',
 ai:'M8 21v-4H5l1-5H4l3-4a7 7 0 1 1 12 7v6 M10 10c-3-3 1-6 3-3 2-3 5 0 2 2 2 3-2 4-3 1l-2 2',
 calendar:'M3 4h18v17H3z M3 9h18 M8 2v4 M16 2v4 M8 13h1 M12 13h1 M16 13h1 M8 17h1 M12 17h1',
 settings:'M9 3h6l1 3 3 1 2 5-2 2v4l-4 3-3-1-3 1-4-3v-4l-2-2 2-5 3-1z M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 tape:'M5 7a4 4 0 1 1 0 8h14a4 4 0 1 0-4-4v4 M9 11v4'
};
const icon=(name,x,y,size,color,width=1.8)=>`<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round">${name==='mic'&&state.retro?pixelIcon(pixelsForMic):`<path d="${iconPaths[name]}"/>`}</svg>`;
const pixelsForMic=['000111000','001111100','001111100','001111100','001111100','101111101','100111001','010000010','001111100','000010000','000010000','001111100'];
function pixelIcon(rows){return rows.map((row,y)=>[...row].map((c,x)=>c==='1'?`<rect x="${3+x*2}" y="${y*2}" width="2" height="2" fill="currentColor" stroke="none"/>`:'').join('')).join('');}
function eye(kind,w,h,stroke,right=false,light=true){
 const manga=mangaEye(kind,w,h,right,light);if(manga)return manga;
 if(kind==='round')return `<circle cx="${w/2}" cy="${h/2}" r="${h*.8}" fill="currentColor"/>`;
 if(kind==='ring')return `<circle cx="${w/2}" cy="${h/2}" r="${h*.8}" fill="none" stroke="currentColor" stroke-width="${stroke}"/>`;
 if(kind==='kira')return `<path d="M${w/2} ${h/2-h*.85} Q${w/2+h*.15} ${h/2-h*.15} ${w/2+h*.85} ${h/2} Q${w/2+h*.15} ${h/2+h*.15} ${w/2} ${h/2+h*.85} Q${w/2-h*.15} ${h/2+h*.15} ${w/2-h*.85} ${h/2} Q${w/2-h*.15} ${h/2-h*.15} ${w/2} ${h/2-h*.85}" fill="currentColor"/>`;
 let d=kind==='smile'?`M0 ${h} Q${w/2} ${-h*.7} ${w} ${h}`:['tare','asleep'].includes(kind)?`M0 0 Q${w/2} ${h*1.7} ${w} 0`:kind==='tojime'?`M${right?w:0} 0 L${right?0:w} ${h/2} L${right?w:0} ${h}`:`M0 ${h/2} H${w}`;
 return `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function pixelEye(kind,right,closed){
 const names={round:'solidOval',kira:'sparkle',tojime:right?'tojimeRight':'tojimeLeft',glossy:'glossyOval',cuteGlossy:'solidOval',retroEye:'retroSquare',curious:right?'curiousRight':'curiousLeft'};
 const rows=pixels[closed&&kind!=='asleep'?(kind==='smile'?'smileClosed':'sleepy'):(names[kind]||kind)];
 const holes=closed?[]:['glossy','cuteGlossy'].includes(kind)?[[3,3],[4,3],[3,4],[7,7]]:kind==='retroEye'?[[3,3],[4,3],[3,4],[4,4],[7,7]]:kind==='curious'?[[5,4],[6,4]]:kind==='mellow'?[[4,3],[5,3]]:[];
 return rows.map((row,y)=>[...row].map((c,x)=>c==='1'&&!holes.some(([hx,hy])=>hx===x&&hy===y)?`<rect x="${x}" y="${y}" width="1" height="1"/>`:'').join('')).join('');
}
function faceSVG(kind,scale=state.size,spacing=state.spacing,retro=state.retro,closed=false,light=true){
 const width=88*scale,height=30*scale,total=width*2+spacing;
 const fit=Math.min(1,380/(total+10));
 return `<g transform="translate(210 0) scale(${fit}) translate(${-total/2} 0)">${[false,true].map((right,i)=>`<g transform="translate(${i*(width+spacing)} 0)">${retro?`<g transform="translate(${(width-height*1.8)/2} ${-height*.4}) scale(${height*1.8/11})" fill="currentColor">${pixelEye(kind,right,closed)}</g>`:`<g transform="translate(0 ${height/2}) scale(1 ${closed?.08:1}) translate(0 ${-height/2})">${eye(kind,width,height,8.5,right,light)}</g>`}</g>`).join('')}</g>`;
}
function sleepZzz(){
 const scale=Math.min(1.35,Math.max(.85,state.size));
 return `<g id="sleep-zzz" transform="translate(314 -22) scale(${scale})" fill="currentColor" font-weight="600" opacity=".7" class="${state.motion?'sleep-animated':''}">${[15,21,28].map((size,i)=>`<g class="sleep-letter" style="--sleep-delay:${i*.4}s;--sleep-lift:-${5+i*3}px"><text x="${[0,13,31][i]}" y="0" font-size="${size}">z</text></g>`).join('')}</g>`;
}
function renderPhone(closed=false){
 const p=palette(state),illustrated=state.style==='illustration',retro=state.retro;
 const now=new Date(),day=now.getDate(),month=now.toLocaleDateString('en',{month:'short'}).toUpperCase(),weekday=now.toLocaleDateString('en',{weekday:'short'});
 const family=retro?'HeadlightPixel, monospace':"-apple-system, BlinkMacSystemFont, sans-serif";
 document.querySelector('.phone-holder').style.background=p.bg;
 const inputY=illustrated?336:166,inputHeight=illustrated?88:288;
 const panel=retro?`<path d="M28 ${inputY}H392V${inputY+8}H400V${inputY+inputHeight-8}H392V${inputY+inputHeight}H28V${inputY+inputHeight-8}H20V${inputY+8}H28Z" fill="${p.bg}" stroke="${p.ink}" stroke-width="2"/>`:`<rect x="17" y="${inputY}" width="386" height="${inputHeight}" rx="26" fill="${p.panel}" fill-opacity="${illustrated?.055:.028}"/>`;
 const tabKeys=['home','words','collection','journal','ai'],tabIcons=['home','words','grid','book','ai'];
 $('phone').innerHTML=`<title id="preview-title">${escape(text('preview')+' — '+text(state.style)+(retro?', '+text('retro'):''))}</title><defs><pattern id="lcd" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="${p.ink}" opacity=".055"/></pattern></defs><g font-family="${family}" fill="${p.ink}" color="${p.accent}"><rect width="420" height="913" fill="${p.bg}"/>${retro?'<rect width="420" height="913" fill="url(#lcd)"/>':bodyArtwork(state.body)}<text x="40" y="37" font-size="18" font-weight="600">9:41</text><rect x="146" y="13" width="128" height="38" rx="22" fill="#000"/><rect x="359" y="25" width="25" height="12" rx="3" fill="none" stroke="${p.ink}" stroke-width="1.5"/><rect x="362" y="28" width="19" height="6" rx="1"/><text x="18" y="138" font-family="${retro?'monospace':'Georgia, serif'}" font-size="66">${day}</text><text x="83" y="116" font-size="16" opacity=".55">${escape(weekday)}</text><text x="83" y="138" font-family="Georgia, serif" font-size="17" font-weight="600" letter-spacing="2" opacity=".55">${month}</text><g opacity=".5">${icon('calendar',302,99,27,p.ink)}${icon('settings',361,97,32,p.ink)}</g>${illustrated?`<g id="preview-eyes" transform="translate(0 ${306-state.height})" color="${p.accent}">${faceSVG(state.face,state.size,state.spacing,retro,closed,p.light)}${state.face==='asleep'?sleepZzz():''}</g>`:''}${panel}${illustrated&&!retro?mouthArtwork(state.body,inputY,inputHeight,p.accent):''}${icon('plus',37,inputY+inputHeight-40,24,p.ink)}<circle cx="374" cy="${inputY+inputHeight-31}" r="17" fill="${p.accent}"/>${icon('arrow',363,inputY+inputHeight-42,22,p.light?'#fff':p.bg,2.7)}<circle cx="210" cy="609" r="60" fill="${retro?p.bg:p.accent}" fill-opacity="${retro?1:.08}" stroke="${p.accent}" stroke-opacity=".28"/>${icon('mic',186,583,48,p.ink,2.4)}<g opacity=".65">${icon('wave',70,598,26,p.ink)}${icon('words',323,598,26,p.ink)}</g><rect x="183" y="719" width="54" height="38" rx="10" fill="${p.accent}" fill-opacity=".08" stroke="${p.accent}" stroke-opacity=".22"/>${icon('tape',195,728,30,p.ink)}<g opacity=".25">${icon('plus',203,795,14,p.ink)}</g><rect x="16" y="827" width="388" height="67" rx="32" fill="${p.bg}" fill-opacity=".65"/><rect x="20" y="831" width="76" height="58" rx="28" fill="${p.accent}" fill-opacity=".11"/>${tabKeys.map((key,i)=>`${icon(tabIcons[i],42+i*75,837,29,i===0?p.accent:p.ink)}<text x="${57+i*75}" y="878" text-anchor="middle" font-size="10" fill="${i===0?p.accent:p.ink}">${escape(appText(key))}</text>`).join('')}<rect x="143" y="902" width="134" height="4" rx="2" fill="${p.ink}" opacity=".7"/></g>`;
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
$('shuffle').addEventListener('click',()=>{state=randomDesign(state);restoreFaceSettings();refresh();});
$('reset').addEventListener('click',()=>{state={...defaults};faceSettings=structuredClone(defaultFaceSettings);refresh();});
$('language').addEventListener('change',event=>{lang=event.target.value;try{localStorage.setItem('headlightLang',lang);}catch{}localize();});
// One light timer, paused in background tabs and for reduced-motion users.
setInterval(()=>{if(document.hidden||reduceMotion.matches||!state.motion||state.style!=='illustration'||state.face==='asleep')return;renderPhone(true);setTimeout(()=>renderPhone(false),150);},4200);
localize();
