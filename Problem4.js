const quadraticEquation = ( a, b ,c) =>{
    const discriminant = b * b - 4 * a  * c;
    if(discriminant > 0){
        const root1 = (- b + Math.sqrt(discriminant)) / 2 * a;
        const root2 = (-b - Math.sqrt(discriminant)) / 2 * a;
        return `The roots of quadratic equation are ${root1} and ${root2} ` 
    }
    if(discriminant == 0){
        const root1 = -b / 2 * a;
        const root2 = root1;
        return `The roots of quadratic equation are ${root1} and ${root2} ` 

    }
    else{
        const root1 = (-b / 2*a).toFixed(2)
        const root2 = ((Math.sqrt(-discriminant)) / 2*a).toFixed(2)
        return `The roots of quadratic equation are ${root1} + ${root2}i and ${root1} - ${root2}i
        `
    }
}
const result = quadraticEquation(1, -3 , 10)
console.log(result);