function Manipulaion(Array){
  const operation = Array.map((element) => {
    if(element % 2 == 0){
      return element *2
    }else{
      return element *3
    }
      
    
  })
  return operation

}

let test = [1,2,3,4,5,6,]
console.log(Manipulaion(test))