const hero = document.querySelector('.design-gallery');
const toggle = hero?.querySelector('.hero-motion-toggle');
if (hero && toggle) {
  const labels = {
    ja: ['背景の動きを止める', '背景の動きを再生する'],
    en: ['Pause background motion', 'Play background motion'],
    ko: ['배경 움직임 멈추기', '배경 움직임 재생'],
    de: ['Hintergrundbewegung anhalten', 'Hintergrundbewegung starten'],
    'zh-Hant': ['暫停背景動態', '播放背景動態'],
    fr: ['Mettre le fond en pause', 'Animer le fond'],
    es: ['Pausar el movimiento del fondo', 'Reanudar el movimiento del fondo'],
    it: ['Ferma il movimento dello sfondo', 'Riprendi il movimento dello sfondo']
  };
  let paused = false;
  let visible = true;
  const label = () => {
    const text = (labels[document.documentElement.lang] || labels.en)[paused ? 1 : 0];
    toggle.setAttribute('aria-label', text);
    toggle.title = text;
  };
  const idle = () => { hero.dataset.motionIdle = String(document.hidden || !visible); };
  hero.dataset.motionReady = "true";
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    paused = !paused;
    hero.dataset.motionPaused = String(paused);
    label();
  });
  document.addEventListener('visibilitychange', idle);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; idle(); }).observe(hero);
  }
  new MutationObserver(label).observe(document.documentElement, {attributes:true,attributeFilter:['lang']});
  label();
  idle();
}
