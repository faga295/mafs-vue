export function divide(min: number, max:number, division:number) {
  console.log(min, max)
  
  const sub = max - min
  const divisionSize = sub / division
  return Array.from({length: division + 1}, (_, index) =>  min + index * divisionSize) 
}