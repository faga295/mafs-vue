export interface Axis {
    line: number,
    labels: (line: number) => string
}
export function labelPi(line: number) {
  const preNum = Math.round(line/Math.PI)
  if (!preNum) return '0'
  else if (preNum === 1) return 'π'
  else if (preNum === -1) return '-π'
  return `${Math.round(line/Math.PI)}π`
}