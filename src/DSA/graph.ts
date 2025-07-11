/**
 * A graph is a bunch of nodes connected by vertices
 */

function fibonnaci(n: number): number {
  if (n === 0 || n === 1) return 1
  return fibonnaci(n-1) + fibonnaci(n-2)
}
function $topSum(n:number):number {
  if (n === 0) return 0
  return $topSum(n) + $topSum(n - 1)
}