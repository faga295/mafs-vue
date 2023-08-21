export type Vector = [number, number];
export function add(vector1: Vector, vector2: Vector): Vector {
  return [vector1[0] + vector2[0], vector1[0] + vector2[1]];
}

export function rotate(v: Vector, a: number): Vector {
  const res = [
    v[0] * Math.cos(a) - v[1] * Math.sin(a),
    v[0] * Math.sin(a) + v[1] * Math.cos(a),
  ];
  return res as Vector;
}
