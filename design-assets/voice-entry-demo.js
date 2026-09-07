// A short, silent illustration of the existing voice-to-note flow.
// One finite timeline; no microphone access and no user data are involved.
const root=document.querySelector('.voice-entry-demo');
if(root){
 const words={
  ja:{steps:['一度押す','話して「送信」','メモに残る'],note:'牛乳を買う。',send:'送信',saved:'残せました',paper:'メモ',replay:'もう一度見る',pause:'アニメーションを止める',resume:'続きを見る',description:'大きなマイクを一度押し、牛乳を買うと話して送信と言うと、言葉がメモに残る流れ。'},
  en:{steps:['Tap once','Speak, then “send it”','Your note is saved'],note:'Buy milk.',send:'Send it',saved:'Saved',paper:'Note',replay:'Watch again',pause:'Pause animation',resume:'Continue watching',description:'Tap the large microphone once, say buy milk, then say send it. Your words become a saved note.'},
  ko:{steps:['한 번 누르기','말하고 “전송”','메모로 저장'],note:'우유 사기.',send:'전송',saved:'저장했어요',paper:'메모',replay:'다시 보기',pause:'애니메이션 일시정지',resume:'이어서 보기',description:'큰 마이크를 한 번 누르고 우유 사기라고 말한 뒤 전송이라고 하면 메모가 저장돼요.'},
  de:{steps:['Einmal tippen','Sprechen, „absenden“','Notiz gespeichert'],note:'Milch kaufen.',send:'Absenden',saved:'Gespeichert',paper:'Notiz',replay:'Noch einmal ansehen',pause:'Animation anhalten',resume:'Weiter ansehen',description:'Einmal auf das große Mikrofon tippen, Milch kaufen sagen und mit absenden abschließen. Die Worte werden als Notiz gespeichert.'},
  'zh-Hant':{steps:['點一下','說完後說「傳送」','存成筆記'],note:'買牛奶。',send:'傳送',saved:'已儲存',paper:'筆記',replay:'再看一次',pause:'暫停動畫',resume:'繼續觀看',description:'點一下大大的麥克風，說買牛奶，再說傳送，話語就會存成筆記。'},
  fr:{steps:['Touchez une fois','Parlez, puis « envoi »','La note est gardée'],note:'Acheter du lait.',send:'Envoi',saved:'Enregistré',paper:'Note',replay:'Revoir',pause:'Mettre l’animation en pause',resume:'Continuer',description:'Touchez une fois le grand microphone, dites acheter du lait, puis envoi. Vos mots deviennent une note enregistrée.'},
  es:{steps:['Toca una vez','Habla y di «envíalo»','Tu nota queda guardada'],note:'Comprar leche.',send:'Envíalo',saved:'Guardado',paper:'Nota',replay:'Ver de nuevo',pause:'Pausar la animación',resume:'Continuar',description:'Toca una vez el micrófono grande, di comprar leche y luego envíalo. Tus palabras se guardan como una nota.'},
  it:{steps:['Tocca una volta','Parla, poi di’ «invia»','La nota è salvata'],note:'Comprare il latte.',send:'Invia',saved:'Salvato',paper:'Nota',replay:'Guarda di nuovo',pause:'Metti in pausa l’animazione',resume:'Continua',description:'Tocca una volta il grande microfono, di’ comprare il latte, poi invia. Le tue parole diventano una nota salvata.'}
 };
 const query=s=>root.querySelector(s);
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const control=query('.voice-demo-control');
 const duration=9500;
 let elapsed=0,previous=null,frame=0,visible=false,paused=false,ended=false;
 const clamp=v=>Math.max(0,Math.min(1,v));
 const smooth=v=>{v=clamp(v);return v*v*(3-2*v);};
 const between=(time,start,end)=>smooth((time-start)/(end-start));
 let copy=words[document.documentElement.lang]||words.en;
 function localize(){
  copy=words[document.documentElement.lang]||words.en;
  root.setAttribute('aria-label',copy.description);
  root.querySelectorAll('.voice-demo-step').forEach((el,i)=>el.querySelector('span').textContent=copy.steps[i]);
  query('.voice-demo-paper-title').textContent=copy.paper;
  query('.voice-demo-note-text').textContent=copy.note;
  query('.voice-demo-speech-text').textContent=copy.note;
  query('.voice-demo-send').textContent=copy.send;
  query('.voice-demo-saved-label').textContent=copy.saved;
  updateControl();draw(elapsed);
 }
 function updateControl(){
  control.hidden=reduced.matches;
  const action=ended?'replay':paused?'resume':'pause';
  control.dataset.action=action;
  control.setAttribute('aria-label',copy[action]);control.title=copy[action];
 }
 function draw(time){
  const staticView=reduced.matches;
  const t=staticView?duration:time;
  const listen=between(t,1500,1850)*(1-between(t,5700,6000));
  const speech=between(t,1850,2200)*(1-between(t,6250,6650));
  const save=between(t,6700,7350);
  const hand=between(t,200,600)*(1-between(t,1300,1650));
  const tap=between(t,820,980)*(1-between(t,1060,1280));
  const stage=t<1700?0:t<6500?1:2;
  root.dataset.stage=String(stage);
  root.style.setProperty('--demo-listen',listen);
  root.style.setProperty('--demo-speech',staticView?1:speech);
  root.style.setProperty('--demo-save',save);
  root.style.setProperty('--demo-hand',staticView?0:hand);
  root.style.setProperty('--demo-hand-y',`${(1-between(t,200,650))*34+tap*9}px`);
  root.style.setProperty('--demo-mic-scale',String(1-tap*.045));
  root.style.setProperty('--demo-note-y',`${(1-save)*18}px`);
  root.style.setProperty('--demo-note-angle',`${(1-save)*-4}deg`);
  root.style.setProperty('--demo-send',String(staticView?1:between(t,4700,5050)*speech));
  const phrase=staticView?1:between(t,2300,4400);
  const chars=Array.from(copy.note);
  const count=Math.floor(phrase*chars.length);
  const shown=chars.slice(0,count).join('');
  if(query('.voice-demo-speech-text').textContent!==shown)query('.voice-demo-speech-text').textContent=shown;
  query('.voice-demo-speech-text').dataset.empty=String(count===0);
  root.querySelectorAll('.voice-demo-step').forEach((el,i)=>el.dataset.active=String(staticView||i<=stage));
  root.querySelectorAll('.voice-demo-wave i').forEach((bar,i)=>{
   const wave=.3+.7*Math.abs(Math.sin(t/135+i*.83));
   bar.style.transform=`scaleY(${staticView?.45:wave})`;
  });
 }
 function tick(now){
  frame=0;
  if(previous!==null)elapsed=Math.min(duration,elapsed+now-previous);
  previous=now;draw(elapsed);
  if(elapsed>=duration){ended=true;previous=null;updateControl();return;}
  frame=requestAnimationFrame(tick);
 }
 function sync(){
  cancelAnimationFrame(frame);frame=0;previous=null;
  if(visible&&!document.hidden&&!paused&&!ended&&!reduced.matches)frame=requestAnimationFrame(tick);
 }
 control.addEventListener('click',()=>{
  if(ended){elapsed=0;ended=false;paused=false;draw(0);}
  else paused=!paused;
  updateControl();sync();
 });
 document.addEventListener('visibilitychange',sync);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.3}).observe(root);
 reduced.addEventListener('change',()=>{draw(elapsed);updateControl();sync();});
 new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 localize();
}
