const navLabels={
 ja:['Head-Lightとは','デザイン','道具の使い方'],
 en:['About Head-Light','Design','How to use'],
 ko:['Head-Light 소개','디자인','도구 사용법'],
 de:['Über Head-Light','Design','Anleitungen'],
 'zh-Hant':['關於 Head-Light','設計','工具用法'],
 fr:['À propos','Design','Mode d’emploi'],
 es:['Sobre Head-Light','Diseño','Cómo usarlo'],
 it:['Cos’è Head-Light','Design','Come si usa']
};
function renderNavigation(){
 const links=document.querySelector('.product-nav-links');if(!links)return;
 const labels=navLabels[document.documentElement.lang]||navLabels.en;
 links.replaceChildren(...['about.html','design.html','tools.html'].map((path,i)=>{
  const a=document.createElement('a');a.href='./'+path;a.textContent=labels[i];
  if(location.pathname.endsWith('/'+path))a.setAttribute('aria-current','page');
  return a;
 }));
}
new MutationObserver(renderNavigation).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
renderNavigation();
