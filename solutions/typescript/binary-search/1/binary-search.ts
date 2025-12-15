export function find(haystack: number[], needle: number): number | never {
  let l=0;
  let h=haystack.length-1;
  while(l<=h){
    let m=Math.floor((l+h)/2);
    if(haystack[m]===needle){
      return m;
    }
    else if(haystack[m]>needle){
      h=m-1;
    }
    else{
      l=m+1;
    }
  }

  throw new Error("Value not in array")
}
