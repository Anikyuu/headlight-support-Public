// Web versions of the app's vector shapes: MangaEyes.swift / HomeBodyStyle.swift.
// These functions contain no input, storage, or network operations.
const oval='M51 0C83 -1.5 100 22 100 50C100 84 78 101.5 49 100C18 100 0 80 0 48C0 18 20 1.5 51 0Z';
const raptor='M2 18C34 3 72 20 98 43C93 82 72 98 50 98C25 98 4 70 2 18Z';
const ellipse=(fill,stroke='none')=>`<ellipse cx="50" cy="50" rx="49" ry="49" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
const star='M50 0Q61 39 100 50Q61 61 50 100Q39 61 0 50Q39 39 50 0Z';
export function mangaEye(kind,w,h,right,light=true){
 const ink=light?'currentColor':'#212630',paper='#fffefa',pupil='#292b33';
 let ew=h,eh=h,angle=0,art='';
 if(kind==='cuteGlossy'){
  ew=eh=Math.min(w*.72,h*1.72);
  art=ellipse(ink,'currentColor')+`<circle cx="30" cy="29" r="14" fill="${paper}"/><circle cx="73" cy="72" r="6.5" fill="${paper}" opacity=".4"/>`;
 }else if(kind==='glossy'){
  ew=Math.min(w*.46,h*1.03);eh=h*1.58;
  art=ellipse(ink,'currentColor')+`<ellipse cx="36" cy="29.5" rx="14.5" ry="14" fill="${paper}" transform="rotate(22 36 29.5)"/><circle cx="68" cy="69" r="5" fill="${paper}"/>`;
 }else if(kind==='retroEye'){
  ew=Math.min(w*.52,h*1.19);eh=h*1.4;angle=-6;
  art=`<path d="${oval}" fill="${ink}" stroke="currentColor" stroke-width="2"/><path d="M44 40L92 15L99 42Z" fill="${paper}"/>`;
 }else if(kind==='mellow'){
  ew=Math.min(w*.68,h*1.75);eh=h*1.12;
  // A local SVG viewport is used for each eye; clip IDs are unique to the host.
  const id=`raptor-${light?'light':'dark'}-${right?'r':'l'}-${w.toFixed(3)}`;
  art=`<g ${right?'transform="translate(100 0) scale(-1 1)"':''}><defs><clipPath id="${id}"><path d="${raptor}"/></clipPath></defs><path d="${raptor}" fill="${paper}"/><g clip-path="url(#${id})"><ellipse cx="50" cy="61" rx="17" ry="42" fill="${ink}"/><rect x="46.25" y="28" width="7.5" height="66" rx="3.75" fill="${pupil}"/><circle cx="42" cy="35" r="4.5" fill="${paper}"/></g><path d="${raptor}" fill="none" stroke="currentColor" stroke-width="6"/><path d="M2 18C34 3 72 20 98 43" fill="none" stroke="${ink}" stroke-width="7" stroke-linecap="round"/></g>`;
 }else if(kind==='curious'){
  const factor=right?.84:1;ew=Math.min(w*.55,h*1.25)*factor;eh=h*1.48*factor;angle=right?7:-7;
  art=`<path d="${oval}" fill="${paper}" stroke="currentColor" stroke-width="5"/><ellipse cx="50" cy="51.5" rx="26" ry="31.5" fill="${pupil}"/><circle cx="42.5" cy="41.5" r="6.75" fill="${paper}"/>`;
 }else if(kind==='starry'){
  ew=Math.min(w*.57,h*1.40);eh=h*1.43;
  art=ellipse(ink,'currentColor')+`<g transform="translate(19 15.5) scale(.48 .51)"><path d="${star}" fill="${paper}"/></g><circle cx="71" cy="72" r="4.5" fill="${paper}"/>`;
 }else return null;
 return `<svg x="${(w-ew)/2}" y="${(h-eh)/2}" width="${ew}" height="${eh}" viewBox="-4 -4 108 108" overflow="visible" preserveAspectRatio="none"><g transform="rotate(${angle} 50 50)">${art}</g></svg>`;
}
const frame=(color,opacity=1,width=1,inset=10,dash='')=>`<rect x="${inset}" y="${inset}" width="${420-inset*2}" height="${913-inset*2}" rx="23" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="${width}" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
const screws=color=>[[17,20],[403,20],[17,893],[403,893]].map(([x,y])=>`<g stroke="${color}" stroke-width="1.2" opacity=".45"><circle cx="${x}" cy="${y}" r="3" fill="none"/><path d="M${x-2} ${y+2}l4-4"/></g>`).join('');
export function bodyArtwork(body,hasImage=false){
 if(body==='classic')return '';
 const gradient=(id,start,end,opacity)=>`<defs><linearGradient id="${id}" x2="0" y2="1"><stop stop-color="${start}"/><stop offset="1" stop-color="${end}"/></linearGradient></defs><rect width="420" height="913" fill="url(#${id})" opacity="${opacity}"/>`;
 const lines=(color,opacity,space=4)=>`<defs><pattern id="body-lines" width="${space}" height="${space}" patternUnits="userSpaceOnUse"><path d="M0 .5H${space}" stroke="${color}" stroke-opacity="${opacity}"/></pattern></defs><rect width="420" height="913" fill="url(#body-lines)"/>`;
 if(body==='midnightCassette')return gradient('cassette','#090909','#161616',hasImage?.42:.62)+lines('#fff',.028)+frame('#fff',.16)+screws('#fff')+`<path d="M26 64H394M26 785H394" stroke="#fff" stroke-opacity=".09"/><rect x="25" y="177" width="370" height="303" rx="28" fill="#000" opacity=".11"/>`;
 if(body==='warmAnalog')return gradient('analog','#f5e8d1','#e3cca6',hasImage?.12:.24)+lines('#654321',.025,3)+frame('#8c5926',.68,5,9)+frame('#4f331c',.55,1.1,13,'3 4');
 if(body==='cyberSignal')return gradient('signal','#090d0d','#141717',hasImage?.36:.58)+`<defs><pattern id="body-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#ade838" stroke-opacity=".035"/></pattern></defs><rect width="420" height="913" fill="url(#body-grid)"/><g fill="none" stroke="#ade838" stroke-opacity=".4"><path d="M9 85H21V210L32 224V280M411 220H399V450L386 464V522M10 580H25V690L34 701V780M410 715H399V839H371"/><circle cx="32" cy="280" r="3"/><circle cx="386" cy="522" r="3"/></g>`+frame('#ade838',.32,1,9);
 if(body==='dreamySticker')return gradient('dream','#f5e8fc','#d1c4f0',hasImage?.30:.58)+`<defs><pattern id="pearls" width="23" height="23" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="1" fill="#fff" opacity=".24"/></pattern></defs><rect width="420" height="913" fill="url(#pearls)"/><path d="M10 270a10 10 0 0 1 10-13 12 12 0 0 1 22 7 8 8 0 0 1-3 15H17a7 7 0 0 1-7-9" fill="#75dded" opacity=".35"/><g transform="translate(373 167) scale(.28)"><path d="${star}" fill="#ffdf45" opacity=".6"/></g><g transform="translate(370 506) scale(.28)"><path d="${star}" fill="#f08ebe" opacity=".5"/></g>`+frame('#fff',.5,1,11);
 return lines('#fff',.055,5.4)+frame('#fff',.52,3.8,9)+frame('#000',.16,1,14)+screws(body==='vividYellow'?'#000':'#fff');
}
export function mouthArtwork(body,y,height,accent){
 if(body==='classic')return `<rect x="17" y="${y}" width="386" height="${height}" rx="25" fill="none" stroke="${accent}" stroke-opacity=".3"/>`;
 let color=body==='warmAnalog'?'#8c5926':body==='dreamySticker'?'#fff':accent;
 return `<rect x="17" y="${y}" width="386" height="${height}" rx="25" fill="none" stroke="${color}" stroke-opacity=".65" stroke-width="1.5"/><rect x="24" y="${y+7}" width="372" height="${height-14}" rx="18" fill="none" stroke="${color}" stroke-opacity=".18" ${body==='warmAnalog'?'stroke-dasharray="3 5"':''}/>`;
}
