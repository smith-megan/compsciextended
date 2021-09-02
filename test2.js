class Factorial {
  constructor(){
    this.cache={}
  }
    calcFac(number){
      let answer=number*(number-1)
      
      if(!this.cache[number]){          
        for (let i=1; i<number-1;i++){
          answer *= i
          console.log(answer)
        }
        this.cache[number]=answer
      } else {
        return this.cache[number]
      } 
      return answer
    }
    
}

let test= new Factorial
// console.log(new Factorial())
console.log(test.calcFac(10))
console.log(test.calcFac(10))
console.log(test.calcFac(2))
console.log(test.calcFac(10))


