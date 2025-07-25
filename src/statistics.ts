//i was bored so i made this
function corr_reg(xarr: number[], yarr: number[]): number[] {
  if (xarr.length !== yarr.length) return [];
  let xy = 0, x_squared = 0, y_squared = 0, x = 0, y = 0, n = xarr.length;
  for (let i = 0;i < n; i++) {
    xy += xarr[i]*yarr[i];
    x_squared += xarr[i]**2
    y_squared += yarr[i]**2
    x += xarr[i];
    y += yarr[i];
  }
  let corr:number = (n*xy-x*y)/Math.sqrt((n*x_squared-x**2)*(n*y_squared-y**2)) || 0
  let reg_m:number = (n*xy-x*y)/(n*x_squared-x**2) || 0
  let reg_b:number = (y-reg_m*x)/n;

  return [corr, reg_m, reg_b]
}
function mean(arr:number[]):number{
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum/arr.length;
}
function median (arr: number[]): number{
  arr.sort((a,b)=>a-b)
  if (arr.length % 2 === 0) {
    return (arr[arr.length/2]+arr[arr.length/2-1])/2
  }
  return arr[Math.floor(arr.length/2)]
}
function mode(arr:number[]): number[]{
  let map = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    let g = map.get(arr[i]) || 0 
    map.set(arr[i], g+=1)
  }
  return []
}
console.log(mode([1,2,3,3,4,4,5]))
let xarr:number[] = [5,12,14,17,23,30,40,47,55,67,72,81,96,112,127];
let yarr:number[] = [4,10,13,15,15,25,27,46,38,46,53,70,82,99,100];
console.log(corr_reg(xarr, yarr))
let a:number[]=[2,4,5,8]
let b:number[]=[3,5,7,8]
console.log('Corr_Reg', corr_reg(a,b))
console.log(mean(xarr))

function isPrime(n:number):boolean {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i+=2) if (n % i === 0) return false;
  return true;
}
console.log(isPrime(79128123))

function ftorial(n:number):number{
  if (n <= 1) return 1;
  return n * ftorial(n-1);
}
function combin(a:number, b:number):number{
  if (a<b) return 0
  return ftorial(a)/(ftorial(a-b)*ftorial(b))
}
function binomcdf(n:number, p:number, x:number):number{
  let sum = 0;
  for (let i = 0; i<x+1; i++) {
    sum+=binompdf(n,p,i);
  }
  return sum
}
function binompdf(n:number,p:number,x:number):number{
  return combin(n,x)*p**x*(1-p)**(n-x)
}

console.log(1-binomcdf(20,0.25,5))
console.log((combin(10,4)+combin(8,2))/combin(18,12))
console.log(binomcdf(4,0.4,4))

function diff(coeff:number[]): number[]{
  const derivative:number[] = coeff.map((e,i) =>  e*i).slice(1);
  return derivative
}

console.log(diff([4,8,3]))
function integral(coeff:number[]):number[]{

  const integral:number[] = [0];
  coeff.forEach((e,i) => {
    integral.push(e/(i+1))
  });
  return integral;
}
console.log(integral([8, 6]))

class Statistics{
  distribution:Distribution;
  constructor(ditribution:Distribution) {
    this.distribution = ditribution
  }
}
class Distribution {
  distribution:string;
  arr:number[]
  constructor(d:string,arr:number[]){
    this.distribution = d || 'binom',
    this.arr = arr || []
  }
}

console.log(corr_reg(
[1, 4, 9, 23, 34, 56, 67, 90],
[2, 5, 6, 32, 34, 58, 80, 102]
))