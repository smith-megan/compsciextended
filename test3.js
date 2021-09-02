function noCacheCalcFac(number) {
  let answer=number*(number-1)         
    for (let i=1; i<number-1;i++){
      answer *= i
      console.log(answer)
    }
  return answer
}
noCacheCalcFac(10)