// A deliberately small, browser-only sample of the app's design settings.
// RGB values and contrast correction follow Theme in Models.swift.
export const backgrounds = [
  ['white',[1,1,1],true],['black',[0,0,0],false],['charcoal',[.11,.11,.11],false],
  ['navy',[.07,.09,.15],false],['cream',[.96,.94,.89],true],['paper',[.93,.93,.94],true]
];
export const accents = [
  ['mono',[.92,.93,.95]],['sumi',[.24,.22,.20]],['blue',[.26,.56,1]],['lime',[.70,.91,.22]],
  ['orange',[1,.55,.16]],['pink',[1,.44,.72]],['lilac',[.79,.72,.93]],['mint',[.60,.86,.80]]
];
// RetroPalette.screen / ink / panel, in the app's order.
export const retros = [
  ['lcdGreen',[.84,.88,.73],[.16,.23,.16],[.77,.83,.65]],
  ['amber',[.91,.84,.64],[.26,.19,.09],[.86,.76,.52]],
  ['sky',[.75,.86,.91],[.10,.21,.27],[.65,.80,.87]],
  ['rose',[.91,.78,.78],[.28,.14,.16],[.86,.68,.69]],
  ['smoke',[.82,.85,.84],[.16,.20,.20],[.73,.78,.77]],
  ['lavender',[.84,.80,.90],[.22,.16,.28],[.76,.70,.84]],
  ['white',[1,1,1],[.08,.08,.08],[.90,.90,.90]],
  ['black',[0,0,0],[.96,.96,.96],[.15,.15,.15]]
];
export const faces = ['smile','kira','tare','sleepy','round','tojime','ring','asleep','cuteGlossy','glossy','retroEye','mellow','curious','starry'];
export const bodies = [
 ['classic',[1,1,1],[0,0,0],true],
 ['midnightCassette',[.04,.04,.045],[.92,.93,.95],false],
 ['warmAnalog',[.96,.94,.89],[.94,.71,.42],true],
 ['cyberSignal',[.07,.085,.08],[.70,.91,.22],false],
 ['dreamySticker',[.90,.85,.96],[.79,.72,.93],true],
 ['vividRed',[.94,.12,.18],[1,1,1],false],
 ['vividBlue',[.05,.35,.92],[1,1,1],false],
 ['vividGreen',[.04,.67,.28],[1,1,1],false],
 ['vividYellow',[1,.80,.02],[0,0,0],true]
];
export const defaults = Object.freeze({style:'illustration',body:'classic',background:'white',accent:'mono',face:'smile',size:1.32,spacing:78,height:49,motion:true,retro:false,retroPalette:'lcdGreen'});
const faceSettingsOverrides = {
 smile:{size:1.32,spacing:78,height:49},
 kira:{size:1.7,spacing:53,height:55},
 tare:{size:1.24,spacing:80,height:47},
 sleepy:{size:1.24,spacing:80,height:47},
 tojime:{size:1.24,spacing:80,height:47},
 ring:{size:1.24,spacing:80,height:47},
 asleep:{size:1.24,spacing:80,height:47},
 round:{size:0.9,spacing:110,height:55},
 cuteGlossy:{size:1.7,spacing:61,height:55},
 glossy:{size:1.7,spacing:61,height:55},
 retroEye:{size:1.7,spacing:61,height:55},
 mellow:{size:1.7,spacing:61,height:55},
 curious:{size:1.7,spacing:61,height:55},
 starry:{size:1.7,spacing:61,height:55}
};
export const defaultFaceSettings = Object.freeze(Object.fromEntries(faces.map(face=>[face,Object.freeze(faceSettingsOverrides[face]||{size:1.26,spacing:78,height:41})])));
export const rgb = values => `rgb(${values.map(v=>Math.round(v*255)).join(',')})`;
export function adjustedAccent(values, light) {
  const lum = .299*values[0]+.587*values[1]+.114*values[2];
  if(light && lum>.55) return values.map(v=>v*.42/lum);
  if(!light && lum<.30) return values.map(v=>v+(1-v)*(.60-lum)/(1-lum));
  return [...values];
}
export function palette(state) {
  if(state.retro){const p=retros.find(p=>p[0]===state.retroPalette);return {bg:rgb(p[1]),ink:rgb(p[2]),accent:rgb(p[2]),panel:rgb(p[3]),light:state.retroPalette!=='black'};}
  const b=bodies.find(b=>b[0]===state.body);
  return {bg:rgb(b[1]),ink:b[3]?'#111111':'#f2f2f2',accent:rgb(adjustedAccent(b[2],b[3])),panel:b[3]?'#000000':'#ffffff',light:b[3]};
}

export function randomDesign(previous, random=Math.random) {
 const pickDifferent=(items,current)=>{const options=items.filter(item=>item!==current);return options[Math.floor(random()*options.length)];};
 const faceWeights={smile:7,cuteGlossy:7,asleep:6,kira:3,round:2,tare:2};
 const cuteFaces=faces.flatMap(face=>Array(faceWeights[face]||1).fill(face));
 return {...previous,
  style:random()<.25?'simple':'illustration',
  retro:random()<.30,
  retroPalette:pickDifferent(retros.map(p=>p[0]),previous.retroPalette),
  body:pickDifferent(bodies.map(b=>b[0]),previous.body),
  face:pickDifferent(cuteFaces,previous.face)
 };
}
