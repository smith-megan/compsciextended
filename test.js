function arrInception(parentArr) {
  for (let i = 0; i < parentArr.length; i++) {
    let childArr = parentArr[i]
    for (let j = 0; j < childArr.length; j++) {
      console.log(`value at index ${j} in child arr (at ${i} in parent arr): ${childArr[j]}`)
    }
  }
}

arrInception([[1,2,3],[0,0,0]])