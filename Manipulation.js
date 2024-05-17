function processArray(Array){
  const operation = Array.map((element) => {
    if(element % 2 == 0){
      return element *2
    }else{
      return element *3
    }
      
    
  })
  return operation

}

function formatArrayStrings(stringArray, processArray){
 return stringArray.map((element, index) =>{
    if(processArray[index] % 2 == 0){
      return element.toUpperCase()
    }else{
      return element.toLowerCase()
    }
  })

}


let  food = ["banku", "jollof", "fries" ]
let  numbers =[1, 2, 3]
console.log()