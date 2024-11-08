
type Circle ={
  shape:string;
  radius:number
}
type rectangle={
  shape:string;
  height:number;
  width:number;
}

const calculateShapeArea=(obj:Circle|rectangle):number=>{
if('radius' in obj){
  return Math.PI*obj.radius*obj.radius;
}
else{
  return obj.height* obj.width;
}
}

