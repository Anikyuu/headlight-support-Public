// Regenerate with: node scripts/build-hero-designs.mjs
// These are the same UI drawings as design.html, not generated app screenshots.
import {writeFile, mkdir, readFile, readdir, unlink} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createPhoneArtwork} from '../design-assets/phone-artwork.js';
import {defaults, defaultFaceSettings, faces, palette, bodies, rgb, adjustedAccent} from '../design-assets/model.js';

const root = new URL('../', import.meta.url);
const date = new Date('2026-09-07T09:41:00+09:00');
const labels = {home:'Home',words:'Words',collection:'Collection',journal:'Journal',ai:'AI'};
// Bright designs dominate; only two of the 72 use a black body.
const lightBodies=['classic','vividBlue','dreamySticker','vividYellow','warmAnalog','vividGreen','vividRed'];
const lightRetros=['lcdGreen','amber','sky','rose','smoke','lavender','white'];
const faceVariants=Array.from({length:3},(_,pass)=>faces.map((face,i)=>
  [lightBodies[(i+pass*3)%lightBodies.length],face])).flat();
const alternateVariants=[
  ...faces.map((face,i)=>['classic',face,lightRetros[i%7]]),
  ...lightBodies.map(body=>[body,'smile',null,'simple']),
  ...lightRetros.map(color=>['classic','smile',color,'simple']),
  ['midnightCassette','starry'],['midnightCassette','smile',null,'simple']
];
// Stable interleave: every row includes different face shapes, Simple, and Retro.
const basicVariants=[];
for(let i=0;i<42;i++) {
  basicVariants.push(faceVariants[i]);
  if(i<30) basicVariants.push(alternateVariants[(i*7)%30]);
}
const backgrounds=['paper-cut','alpine-lake','flower-art','ocean','geometric','meadow','paint','watercolor','terrazzo','linen','washi'];
const artVariants=backgrounds.flatMap((background,i)=>[
  ['classic','smile',null,'illustration',background],
  ['warmAnalog','smile',null,'illustration',background],
  ['dreamySticker','smile',null,'illustration',background],
  ['vividYellow','smile',null,'illustration',background],
  ['classic',faces.filter(face=>face!=='smile')[(i*3+8)%13],null,'illustration',background],
  ['classic','smile',null,'simple',background]
]);
const pool=[...basicVariants,...artVariants];
// Choose a deterministic, varied order instead of grouping similar variants.
// Favor a different color/image from the preceding phones, across rows too.
let seed=20260907;
const random=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
const variants=[];
while(pool.length) {
 let best=-1,bestScore=-Infinity;
 for(let i=0;i<pool.length;i++) {
  const v=pool[i],recent=variants.slice(-5);
  let score=random()*2;
  for(let j=0;j<recent.length;j++) {
   const r=recent[j],weight=j===recent.length-1?5:1;
   if(v[4]&&v[4]===r[4])score-=weight*4;
   if(!v[4]&&!r[4]&&v[0]===r[0])score-=weight*3;
   if(v[1]===r[1]&&v[3]!=='simple'&&r[3]!=='simple')score-=weight;
   if(v[3]==='simple'&&r[3]==='simple')score-=weight*2;
  }
  if(variants.length%Math.ceil((basicVariants.length+artVariants.length)/3)===0&&v[4]&&v[1]==='smile')score+=10;
  if(score>bestScore){best=i;bestScore=score;}
 }
 variants.push(pool.splice(best,1)[0]);
}
await mkdir(new URL('img/hero-designs/',root),{recursive:true});
const names=[];
const artworkBackgrounds=new Map();
const designTraits=new Map();
for (const [body,face,retroPalette,style='illustration',background] of variants) {
  const name=background?`art-${background}-${body}-${style==='simple'?'simple':face}`:style==='simple'?`simple-${retroPalette?'retro-'+retroPalette:body}`:retroPalette?`retro-${retroPalette}-${face}`:`${body}-${face}`;
  const state={...defaults,...defaultFaceSettings[face],body,face,style,motion:false,
    retro:!!retroPalette,retroPalette:retroPalette||defaults.retroPalette};
  const imagePalette=background?{...palette(state),bg:'#f7f4eb',ink:'#111111',panel:'#000000',light:true,
    accent:rgb(adjustedAccent(bodies.find(b=>b[0]===body)[2],true))}:undefined;
  const artwork=createPhoneArtwork(state,{date,appText:key=>labels[key]||key,transparentBackground:!!background,paletteOverride:imagePalette}).render();
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="420" height="913" viewBox="0 0 420 913" preserveAspectRatio="xMidYMid slice">${artwork}</svg>\n`;
  await writeFile(new URL(`img/hero-designs/${name}.svg`,root),svg);
  names.push(name);
  const paper=['paint','watercolor','terrazzo','linen','washi'].includes(background);
  const family=background?(paper?'paper':background):retroPalette?'retro-'+retroPalette:body;
  const color=background?(paper?'cream':({'paper-cut':'coral','alpine-lake':'blue','flower-art':'floral',ocean:'aqua',geometric:'multicolor',meadow:'sky'}[background])):retroPalette||body;
  designTraits.set(name,{family,color,background:!!background});
  if(background)artworkBackgrounds.set(name,background);
}
for(const file of await readdir(new URL('img/hero-designs/',root))) {
  if(file.endsWith('.svg')&&!names.includes(file.slice(0,-4))) await unlink(new URL(`img/hero-designs/${file}`,root));
}
const card=name=>{
  const background=artworkBackgrounds.get(name);
  const style=background?` style="background-image:linear-gradient(#ffffff${['paper-cut','alpine-lake','flower-art','ocean','geometric','meadow'].includes(background)?'2e':'24'},#ffffff${['paper-cut','alpine-lake','flower-art','ocean','geometric','meadow'].includes(background)?'2e':'24'}),url('img/hero-backgrounds/${background}.jpg')"`:'';
  const {family,color,background:hasBackground}=designTraits.get(name);
  return `<span class="hero-design-card" data-design="${name}" data-family="${family}" data-color="${color}" data-background="${hasBackground}"><span class="hero-design-screen"${style}><img src="img/hero-designs/${name}.svg" alt="" width="420" height="913" decoding="async" loading="lazy"></span></span>`;
};
// A compact static fallback. The inert template is the shared live queue.
const rows=Array.from({length:3},(_,i)=>{
 const items=names.slice(i*18,(i+1)*18).map(card).join('');
 return `    <div class="hero-design-row"><div class="hero-design-track">${items}</div></div>`;
}).join('\n');
const catalog=`<template id="gallery-design-catalog">${names.map(card).join('')}</template>`;
const path=new URL('index.html',root);
const html=await readFile(path,'utf8');
const start='<!-- hero-designs:start -->',end='<!-- hero-designs:end -->';
if(!html.includes(start)||!html.includes(end))throw Error('Missing hero gallery markers');
await writeFile(path,html.replace(new RegExp(`${start}[\\s\\S]*?${end}`),`${start}\n  ${catalog}\n  <div class="hero-design-wall" aria-hidden="true">\n${rows}\n  </div>\n  ${end}`));
console.log(`Generated ${names.length} designs and three live gallery lanes in ${fileURLToPath(root)}`);
