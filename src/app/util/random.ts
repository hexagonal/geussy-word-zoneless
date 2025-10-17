/** Random Number Generator. */
export type Rng = () => number;

/** Get a random seed. (A 32-bit integer.)*/
export function getSeed(): number {
  return (Math.random() * 0x1_0000_0000) >>> 0;
}

/**  Get a shuffled copy of an array. Uses a given seed. */
export function toShuffledWithSeed<T>(items: T[], seed: number): T[] {
  return toShuffled<T>(items, mulberry32(seed));
}

/**  Get a shuffled copy of an array. */
export function toShuffled<T>(items: T[], rng: Rng = Math.random): T[] {
  const copy = [...items];
  shuffle(copy, rng);
  return copy;
}

/**  Shuffles the array in place. Uses a given seed. */
export function shuffleWithSeed<T>(items: T[], seed: number): void {
  shuffle<T>(items, mulberry32(seed));
}

/**  Shuffles the array in place. */
export function shuffle<T>(arr: T[], rng: Rng = Math.random): void {
  let top: number = arr.length;

  if (top) while (--top) {
    let current: number = Math.floor(rng() * (top + 1));
    let item: T = arr[current];
    arr[current] = arr[top];
    arr[top] = item;
  }
}

/** A standard RNG. */
function mulberry32(seed: number): Rng {
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
