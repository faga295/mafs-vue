export function range(min: number, max: number, step = 1): number[] {
  const result = [];

  const closest = closestMultiple(min, step);

  for (let i = closest; i < max; i += step) {
    result.push(i);
  }
  return result;
}
export function round(num: number, accuracy: number) {
  return Math.round(num * Math.pow(10, accuracy)) / Math.pow(10, accuracy);
}

export function closestMultiple(target: number, divisor: number) {
  return target - (target % divisor);
}
