function whosPaying() {
    var names=["Angela", "Ben", "Jenny", "Michael", "Chloe"]
    var num=Math.random()*4
    num=Math.round(num)
    
    console.log(names[num]+" is going to buy lunch today")  
}

whosPaying()