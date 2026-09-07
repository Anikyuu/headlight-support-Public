import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
const {createDesignPicker}=await import(new URL('design-assets/gallery-sequence.js',pathToFileURL(process.cwd()+'/')));
const html=await readFile('index.html','utf8');
const template=html.match(/<template id="gallery-design-catalog">([\s\S]*?)<\/template>/)[1];
const designs=[...template.matchAll(/data-design="([^"]+)" data-family="([^"]+)" data-color="([^"]+)" data-background="([^"]+)"/g)].map(([,name,family,color,background])=>({name,family,color,background:background==='true'}));
assert.equal(designs.length,138);assert.equal(new Set(designs.map(d=>d.name)).size,138);
for(const width of [390,1280,2362,3840]) {
 let seed=923;const random=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
 const picker=createDesignPicker(designs,random);const step=width<=720?90:106;
 const count=Math.min(Math.ceil((width+340)/step)+3,45);
 const lanes=[[],[],[]],seen=new Set();
 function add(lane,front=false){const all=lanes.flat();const value=picker.pick(all,front?lane[0]??null:lane.at(-1)??null);assert(!all.includes(value));front?lane.unshift(value):lane.push(value);seen.add(value);}
 for(let c=0;c<count;c++)for(const lane of lanes)add(lane);
 const speeds=[25,34,29],offsets=[.18,.72,.43].map(x=>x*step);
 for(let t=0;t<24000;t++)for(let i=0;i<3;i++){
  offsets[i]+=speeds[i]*.1;
  if(offsets[i]>=step){offsets[i]-=step;i===1?lanes[i].pop():lanes[i].shift();add(lanes[i],i===1);}
  assert.equal(new Set(lanes.flat()).size,lanes.flat().length);
  if(width<=1280){const families=lanes.flat().map(i=>designs[i]).filter(d=>d.background).map(d=>d.family);assert.equal(new Set(families).size,families.length);}
 }
 assert.equal(seen.size,138);
 console.log(`PASS ${width}px: ${count*3} mounted cards, zero simultaneous duplicates, all 138 designs seen in 40 minutes.`);
}
