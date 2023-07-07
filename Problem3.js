const swapVariable = (var1 , var2) =>{
    let temp =0;
    temp = var1;
    var1 = var2;
    var2 = temp;
    return{
        First_Variable: var1,
        Second_Variable: var2
    }
}

const result = swapVariable(9 , 4)
console.log(result);