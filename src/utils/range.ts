export function range(xLine: number, subDivision: number){
    return Array.from({ length: subDivision}, (_,index) => index * xLine / subDivision)
}