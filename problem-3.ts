const countWordOccurrences =(sentence:string,word:string):number=>{

  const newWord:string = word.toLocaleLowerCase();
  const SentenceConvertedToArray:string[] = sentence.toLocaleLowerCase().split(' ');
  let repeatNumber:number = 0;
  SentenceConvertedToArray.filter(item=>{
    const isExist:boolean = item.includes(newWord);
    if(isExist){
      repeatNumber = repeatNumber+1;
    }
  });
   return repeatNumber;
}
