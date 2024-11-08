

class Car{
constructor(public make:string,public model:string,public year:number){

}
getCarAge(){
  const currentYear:number =  new Date().getFullYear();
  return currentYear - this.year;
}
}


