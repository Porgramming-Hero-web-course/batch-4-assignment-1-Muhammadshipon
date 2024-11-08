
const validateKeys=<T>(obj:T, keys:(keyof T)[]):boolean=>{

const objKeysArray:string[]= Object.keys(obj as object);
let newArray:string[] = [];

(keys as string[]).map(item =>{
 const isMatch:string|undefined= objKeysArray.find(key=>key===item);
 if(isMatch){
  newArray.push(item); 
 }
})

if(keys.length===newArray.length){
  return true
}else{return false}

}

