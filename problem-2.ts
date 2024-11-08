const removeDuplicates=(arr:number[]):number[]=>{
  let newArr:number[] = [];
  arr.map(item=>{
    const exist = newArr.find(elm=>elm===item);   
    if(!exist){
      newArr.push(item);
    }
  })
  return newArr;
}

