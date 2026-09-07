// A shared queue for all lanes: never mount the same design twice, and prefer
// backgrounds and colors that are scarce in the current field of view.
export function createDesignPicker(designs, random = Math.random) {
  let turn = 0;
  const plainCount = designs.filter(d => !d.background).length;
  const backgroundSizes = new Map();
  for (const design of designs) if (design.background) backgroundSizes.set(design.family,(backgroundSizes.get(design.family)||0)+1);
  const lastShown = designs.map(() => -random() * designs.length);
  return {
    pick(active, neighbor = null) {
      const occupied = new Set(active);
      const families = new Map(), colors = new Map();
      for (const index of active) {
        const d = designs[index];
        families.set(d.family, (families.get(d.family) || 0) + 1);
        colors.set(d.color, (colors.get(d.color) || 0) + 1);
      }
      // At ordinary viewport widths, a photo appears only once across all
      // three lanes. Treat the five similar paper textures as one family too.
      // Raise this limit only when an unusually wide viewport needs more slots
      // than all plain designs and one of each background can fill.
      let backgroundLimit = 1;
      while (plainCount + [...backgroundSizes.values()].reduce((n,size)=>n+Math.min(size,backgroundLimit),0) < active.length+1) backgroundLimit++;
      let best = -1, highest = -Infinity;
      designs.forEach((design, index) => {
        if (occupied.has(index)) return;
        if (design.background && (families.get(design.family)||0) >= backgroundLimit) return;
        const adjacent = neighbor === null ? null : designs[neighbor];
        const score = (turn - lastShown[index]) * .2
          - (families.get(design.family) || 0) * 26
          - (colors.get(design.color) || 0) * 7
          - (adjacent?.family === design.family ? 28 : 0)
          - (adjacent?.color === design.color ? 14 : 0)
          + random() * 2;
        if (score > highest) { best = index; highest = score; }
      });
      if (best < 0) throw new Error('No unoccupied gallery design');
      lastShown[best] = turn++;
      return best;
    }
  };
}
