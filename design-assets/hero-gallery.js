import {createDesignPicker} from './gallery-sequence.js?v=20260907-live-queue';
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
  const wall = hero.querySelector('.hero-design-wall');
  const source = document.querySelector('#gallery-design-catalog');
  const originals = [...source.content.children];
  const designs = originals.map(card => ({ family:card.dataset.family, color:card.dataset.color, background:card.dataset.background==='true' }));
  const picker = createDesignPicker(designs);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const lanes = [...wall.querySelectorAll('.hero-design-track')].map((track,i) => ({
    track, cards:[], offset:0, speed:[-25,34,-29][i], phase:[.18,.72,.43][i]
  }));
  let paused = false, visible = false, frame = 0, previous = 0;
  let step = 106, measuredWidth = 0;
  const occupied = () => lanes.flatMap(lane => lane.cards.map(card => card.index));
  const nextCard = neighbor => {
    const index = picker.pick(occupied(),neighbor);
    const node = originals[index].cloneNode(true);
    // Load while still outside the clipped wall, before it reaches the edge.
    node.querySelector('img').loading = 'eager';
    return {index,node};
  };
  function layout() {
    const width = wall.clientWidth;
    if (!width || width === measuredWidth) return;
    measuredWidth = width;
    const style = getComputedStyle(wall);
    step = parseFloat(style.getPropertyValue('--card-width')) + parseFloat(style.getPropertyValue('--card-gap'));
    const count = Math.min(Math.ceil(width / step) + 3, Math.floor(designs.length / lanes.length) - 1);
    lanes.forEach(lane => { lane.cards=[]; lane.track.replaceChildren(); });
    // Fill column by column so all three lanes participate in color balancing.
    for (let col=0; col<count; col++) for (const lane of lanes) {
      const card = nextCard(lane.cards.at(-1)?.index ?? null);
      lane.cards.push(card); lane.track.append(card.node);
    }
    for (const lane of lanes) {
      lane.offset = -step * lane.phase;
      lane.track.style.transform = `translate3d(${lane.offset}px,0,0)`;
    }
  }
  function tick(now) {
    const seconds = previous ? Math.min((now-previous)/1000,.05) : 0;
    previous = now;
    for (const lane of lanes) {
      lane.offset += lane.speed * seconds;
      if (lane.offset <= -step) {
        const old = lane.cards.shift(); old.node.remove();
        const next = nextCard(lane.cards.at(-1)?.index ?? null);
        lane.cards.push(next); lane.track.append(next.node); lane.offset += step;
      } else if (lane.offset >= 0) {
        const old = lane.cards.pop(); old.node.remove();
        const next = nextCard(lane.cards[0]?.index ?? null);
        lane.cards.unshift(next); lane.track.prepend(next.node); lane.offset -= step;
      }
      lane.track.style.transform = `translate3d(${lane.offset}px,0,0)`;
    }
    frame = requestAnimationFrame(tick);
  }
  function idle() {
    const offscreen = document.hidden || !visible;
    hero.dataset.motionIdle = String(offscreen);
    cancelAnimationFrame(frame); previous=0;
    if (!offscreen && !paused && !reduced.matches) frame=requestAnimationFrame(tick);
  }
  const label = () => {
    const text = (labels[document.documentElement.lang] || labels.en)[paused ? 1 : 0];
    toggle.setAttribute('aria-label', text); toggle.title = text;
  };
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    paused = !paused; hero.dataset.motionPaused = String(paused); label(); idle();
  });
  document.addEventListener('visibilitychange',idle);
  new IntersectionObserver(entries => { visible=entries[0].isIntersecting;idle(); }).observe(hero);
  new ResizeObserver(layout).observe(wall);
  reduced.addEventListener('change',idle);
  new MutationObserver(label).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  layout(); label(); idle();
  hero.dataset.motionReady='true';
}
