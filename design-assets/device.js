// Real depth planes keep the live SVG crisp. Rotation stays within an angle
// that keeps the app readable; the photo behind the phone never moves.
export function setupDevice(device, button, reduceMotion) {
  const initial = { x: -3, y: 12, z: 0 };
  let angle = { ...initial };
  let remembered = { ...initial };
  let front = false;
  let drag = null;
  let translate = key => key;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  function pose() {
    device.style.setProperty('--rotate-x', `${angle.x}deg`);
    device.style.setProperty('--rotate-y', `${angle.y}deg`);
    device.style.setProperty('--rotate-z', `${angle.z}deg`);
    device.style.setProperty('--reflection-x', `${30 + angle.y * .8}%`);
  }
  function label() {
    button?.setAttribute('aria-pressed', String(front));
    if (button) button.querySelector('span').textContent = translate(front ? 'threeDView' : 'frontView');
    device.setAttribute('aria-label', translate('rotateDevice'));
  }
  button?.addEventListener('click', () => {
    front = !front;
    if (front) { remembered = { ...angle }; angle = { x: 0, y: 0, z: 0 }; }
    else angle = { ...remembered };
    pose(); label();
  });
  device.addEventListener('pointerdown', event => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, angle: { ...angle } };
    device.setPointerCapture(event.pointerId);
    device.classList.add('dragging');
  });
  device.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) < 3) return;
    angle = {
      z: drag.angle.z,
      x: clamp(drag.angle.x - dy * .12, -12, 12),
      y: clamp(drag.angle.y + dx * .16, -30, 30)
    };
    front = false;
    pose(); label();
  });
  function endDrag(event) {
    if (!drag || (event && event.pointerId !== drag.id)) return;
    const id = drag.id;
    drag = null;
    device.classList.remove('dragging');
    if (device.hasPointerCapture(id)) device.releasePointerCapture(id);
  }
  device.addEventListener('pointerup', endDrag);
  device.addEventListener('pointercancel', endDrag);
  device.addEventListener('lostpointercapture', endDrag);
  device.addEventListener('keydown', event => {
    const moves = { ArrowLeft: [0,-3], ArrowRight: [0,3], ArrowUp: [3,0], ArrowDown: [-3,0] };
    if (!moves[event.key]) return;
    event.preventDefault();
    const [x,y] = moves[event.key];
    angle = { x: clamp(angle.x+x,-12,12), y: clamp(angle.y+y,-30,30), z: angle.z };
    front = false;
    pose(); label();
  });
  // Reduce Motion removes interpolation via CSS; direct manipulation still works.
  reduceMotion.addEventListener('change', () => { if (drag) endDrag(); });
  pose();
  return {
    localize(t) { translate = t; label(); },
    shuffle(random = Math.random) {
      endDrag();
      let y = Math.round(random()*44-22);
      if (Math.abs(y-angle.y)<8) y = angle.y>=0 ? -16 : 16;
      angle = { x: Math.round(random()*16-8), y, z: Math.round((random()*6-3)*10)/10 };
      remembered = { ...angle }; front = false;
      pose(); label();
    },
    reset() {
      endDrag(); angle = { ...initial }; remembered = { ...initial }; front = false;
      pose(); label();
    }
  };
}
