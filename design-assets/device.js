// CSS 3D keeps the live SVG crisp while giving the device real depth planes.
// Rendering changes never affect the app design or the fixed photo behind it.
export function setupDevice(device, button, reduceMotion) {
  let front = reduceMotion.matches;
  let translate = key => key;
  const stage = device.parentElement;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  function pose(x = 0, y = 0) {
    const flat = front || reduceMotion.matches;
    device.style.setProperty('--rotate-x', `${flat ? 0 : 5 - y * 3}deg`);
    device.style.setProperty('--rotate-y', `${flat ? 0 : -15 + x * 6}deg`);
    device.style.setProperty('--rotate-z', `${flat ? 0 : -2}deg`);
    device.style.setProperty('--reflection-x', `${flat ? 15 : 15 + x * 8}%`);
  }
  function label() {
    button.setAttribute('aria-pressed', String(front));
    button.querySelector('span').textContent = translate(front ? 'threeDView' : 'frontView');
  }
  button.addEventListener('click', () => {
    front = !front;
    // The static perspective is available on request, even with Reduce Motion.
    device.classList.toggle('explicit-perspective', !front);
    if (!front && reduceMotion.matches) {
      device.style.setProperty('--rotate-x', '5deg');
      device.style.setProperty('--rotate-y', '-15deg');
      device.style.setProperty('--rotate-z', '-2deg');
    } else pose();
    label();
  });
  stage.addEventListener('pointermove', event => {
    if (!finePointer.matches || reduceMotion.matches || front) return;
    const bounds = stage.getBoundingClientRect();
    pose(Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1)),
         Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1)));
  });
  stage.addEventListener('pointerleave', () => { if (!reduceMotion.matches) pose(); });
  reduceMotion.addEventListener('change', () => { front = reduceMotion.matches; pose(); label(); });
  pose();
  return { localize(t) { translate = t; label(); } };
}
