//Fibonacci sequence 
//fib[7] 0, 1, 1, 2, 3, 5,8


const Fibo = (n) =>{

    let final = [0,1]
    
    for(i=2; i<=n; i++){
        final[i] = final[i-1] + final[i-2]

    }

return final;
}

const Facto = (n) =>{
    let r =1;
    for(i=1; i<n; i++ ){
        r = r+r*i
        console.log("The I: ",i)
        console.log("The r: ",r)
    }
    return r;
}

const isPrime = (n) =>{
if(n<2){
    return false
}

for(i =2; i<n; i++){
    if(n%i===0){
        return false
    }
   
}
return true;

}

// console.log(Fibo(5))
// console.log(Facto(5))
console.log(isPrime(13))