function recursiva(max){
    console.log(max)
    if(max >= 12000) return
    max++
    recursiva(max)
}

recursiva(-1)