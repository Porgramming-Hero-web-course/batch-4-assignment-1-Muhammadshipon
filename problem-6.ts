  interface Profile{
    name:string;
    age:number;
    email:string
  }

const updateProfile=(profile:Profile,changes:Partial<Profile>):Profile=>{

const newProfile = {...profile,...changes}
return newProfile;

}



